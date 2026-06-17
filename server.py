import http.server
import socketserver
import urllib.request
import urllib.parse
import json
import os
import sys

PORT = 8000

class CozyProxyHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Allow CORS for direct local access
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

    def do_GET(self):
        parsed_url = urllib.parse.urlparse(self.path)
        path = parsed_url.path
        query_params = urllib.parse.parse_qs(parsed_url.query)

        # Handle API request to proxy Yahoo Finance
        if path == "/api/chart":
            symbol = query_params.get("symbol", ["AAPL"])[0].upper()
            q_range = query_params.get("range", ["1mo"])[0]
            interval = query_params.get("interval", ["1d"])[0]

            yahoo_url = f"https://query1.finance.yahoo.com/v8/finance/chart/{symbol}?range={q_range}&interval={interval}"
            
            try:
                # Set up headers to mimic a browser request to avoid user-agent blocks
                req = urllib.request.Request(
                    yahoo_url, 
                    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}
                )
                
                with urllib.request.urlopen(req, timeout=10) as response:
                    data = response.read()
                    
                    self.send_response(200)
                    self.send_header('Content-type', 'application/json')
                    self.end_headers()
                    self.wfile.write(data)
                    return
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                err_res = {"error": str(e), "message": f"Failed fetching Yahoo Finance data for {symbol}"}
                self.wfile.write(json.dumps(err_res).encode())
                return
                
        # Handle autocomplete symbol search API
        elif path == "/api/search":
            q = query_params.get("q", [""])[0]
            yahoo_url = f"https://query1.finance.yahoo.com/v1/finance/search?q={urllib.parse.quote(q)}&quotesCount=5&newsCount=0"
            
            try:
                req = urllib.request.Request(
                    yahoo_url,
                    headers={'User-Agent': 'Mozilla/5.0'}
                )
                with urllib.request.urlopen(req, timeout=8) as response:
                    data = response.read()
                    self.send_response(200)
                    self.send_header('Content-type', 'application/json')
                    self.end_headers()
                    self.wfile.write(data)
                    return
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode())
                return

        # Default static file serving behavior
        return super().do_GET()

# Check if directory matches, set Cwd to script directory
script_dir = os.path.dirname(os.path.realpath(__file__))
os.chdir(script_dir)

# Override TCPServer to allow port reuse instantly
class MyTCPServer(socketserver.TCPServer):
    allow_reuse_address = True

print(f"=========================================================")
print(f"  [STARTING] STOCK RADAR Cozy Simulator Proxy Server starting...")
print(f"  [LINK] Open in your web browser: http://localhost:{PORT}")
print(f"=========================================================")

with MyTCPServer(("", PORT), CozyProxyHandler) as httpd:
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nShutdown server...")
        sys.exit(0)
