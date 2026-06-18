// Cozy Stock Radar App Engine

// ==========================================================================
// 1. Initial Mock Stock Data & Generator
// ==========================================================================
const baseStocks = [
  {
    ticker: "AXTI",
    name: "AXT Inc.",
    marketCapM: 660,
    sector: "Semiconductors",
    price: 14.82,
    quality: 74,
    risk: "medium",
    floatM: 38,
    volumeSurge: 5.7,
    revenueGrowth: 18,
    debtRatio: 18,
    notes: ["ทะลุ high เดิมพร้อม volume หลายเท่าของค่าเฉลี่ย", "relative strength ชนะกลุ่ม semiconductor", "พื้นฐานยังมี cyclic risk แต่ balance sheet ไม่ตึงเกินไป"],
    prices: [8.18, 8.22, 8.2, 8.25, 8.31, 8.42, 8.5, 8.55, 8.71, 8.83, 8.79, 8.9, 9.15, 9.32, 9.45, 9.71, 10.12, 10.05, 10.44, 10.91, 11.18, 11.75, 12.3, 12.1, 12.4, 12.9, 13.2, 13.8, 14.1, 14.82],
    volumes: [0.8, 0.7, 0.9, 1.0, 1.1, 1.2, 1.3, 1.2, 1.6, 1.8, 1.4, 1.7, 2.1, 2.5, 2.3, 2.9, 4.1, 3.4, 5.2, 7.1, 8.3, 9.6, 10.9, 14.3, 18.2, 23.5, 28.4, 33.9, 31.2, 36.7],
  },
  {
    ticker: "TSSI",
    name: "TSS Inc.",
    marketCapM: 190,
    sector: "Data centers",
    price: 9.34,
    quality: 68,
    risk: "medium",
    floatM: 15,
    volumeSurge: 7.9,
    revenueGrowth: 42,
    debtRatio: 22,
    notes: ["ราคายกฐานต่อเนื่องและเร่งขึ้นใน 10 วันล่าสุด", "volume surge สูงมากเมื่อเทียบกับ float", "ต้องระวังสภาพคล่องและการแกว่งแรง"],
    prices: [4.1, 4.05, 4.18, 4.22, 4.34, 4.31, 4.48, 4.62, 4.75, 4.73, 4.95, 5.25, 5.44, 5.61, 5.79, 6.18, 6.6, 6.88, 7.2, 7.88, 8.1, 8.8, 8.45, 8.9, 8.2, 8.75, 9.1, 8.85, 9.22, 9.34],
    volumes: [0.4, 0.5, 0.4, 0.7, 0.6, 0.5, 0.8, 0.9, 0.8, 0.7, 1.1, 1.4, 1.8, 2.2, 2.8, 3.3, 4.5, 5.1, 6.4, 8.2, 7.8, 10.1, 12.9, 14.3, 15.6, 18.4, 21.2, 17.6, 22.5, 23.1],
  },
  {
    ticker: "SOUN",
    name: "SoundHound AI",
    marketCapM: 2500,
    sector: "AI software",
    price: 6.22,
    quality: 48,
    risk: "high",
    floatM: 245,
    volumeSurge: 4.8,
    revenueGrowth: 31,
    debtRatio: 46,
    notes: ["momentum แรงจากธีม AI สหรัฐฯ", "quality score ยังไม่ผ่านเกณฑ์พื้นฐานดี", "risk สูงเพราะ valuation และ dilution sensitivity"],
    prices: [3.9, 3.8, 3.72, 3.86, 3.95, 4.12, 3.98, 4.05, 4.18, 4.3, 4.22, 4.4, 4.65, 4.78, 4.96, 5.2, 5.55, 5.42, 5.75, 6.1, 5.98, 5.65, 5.42, 5.1, 4.88, 5.1, 5.45, 5.85, 6.02, 6.22],
    volumes: [12.0, 10.0, 9.0, 11.0, 13.0, 15.0, 12.0, 14.0, 18.0, 20.0, 19.0, 24.0, 30.0, 42.0, 50.0, 68.0, 90.0, 76.0, 84.0, 102.0, 88.0, 63.0, 55.0, 49.0, 44.0, 42.0, 51.0, 58.0, 62.0, 60.0],
  },
  {
    ticker: "KOPN",
    name: "Kopin Corp.",
    marketCapM: 310,
    sector: "Display tech",
    price: 2.68,
    quality: 57,
    risk: "medium",
    floatM: 102,
    volumeSurge: 3.6,
    revenueGrowth: 12,
    debtRatio: 12,
    notes: ["ทะลุกรอบ sideway 1 เดือน", "volume เข้าแต่ยังไม่แรงเท่ากลุ่มนำ", "quality กลาง ๆ ต้องรอ confirmation เพิ่ม"],
    prices: [1.92, 1.88, 1.86, 1.91, 1.95, 1.94, 1.99, 2.03, 2.0, 2.02, 2.08, 2.12, 2.15, 2.18, 2.16, 2.2, 2.26, 2.33, 2.38, 2.42, 2.46, 2.5, 2.48, 2.55, 2.59, 2.62, 2.66, 2.64, 2.7, 2.68],
    volumes: [1.2, 1.1, 0.9, 1.3, 1.2, 1.4, 1.5, 1.6, 1.4, 1.7, 1.9, 2.1, 2.3, 2.4, 2.2, 2.6, 3.1, 3.6, 3.8, 4.2, 4.6, 4.9, 4.4, 5.3, 5.7, 6.1, 6.5, 6.2, 6.8, 6.6],
  },
  {
    ticker: "CRNT",
    name: "Ceragon Networks",
    marketCapM: 340,
    sector: "Networking",
    price: 3.91,
    quality: 76,
    risk: "low",
    floatM: 78,
    volumeSurge: 2.9,
    revenueGrowth: 9,
    debtRatio: 8,
    notes: ["พื้นฐานนิ่งกว่าหุ้นเล็กทั่วไป", "ราคาขึ้นช้าแต่ยกฐานดี", "เหมาะเป็น watchlist มากกว่าตัวเร่งสุด"],
    prices: [3.12, 3.08, 3.1, 3.14, 3.18, 3.2, 3.24, 3.27, 3.28, 3.31, 3.35, 3.37, 3.39, 3.42, 3.44, 3.5, 3.55, 3.59, 3.62, 3.66, 3.71, 3.74, 3.78, 3.8, 3.83, 3.86, 3.88, 3.87, 3.9, 3.91],
    volumes: [0.9, 0.8, 0.9, 1.0, 0.9, 1.1, 1.2, 1.1, 1.3, 1.4, 1.6, 1.5, 1.6, 1.7, 1.8, 2.0, 2.3, 2.6, 2.7, 2.9, 3.1, 3.2, 3.5, 3.6, 3.8, 4.0, 4.1, 3.9, 4.2, 4.1],
  },
  {
    ticker: "BBAI",
    name: "BigBear.ai",
    marketCapM: 980,
    sector: "AI defense",
    price: 4.04,
    quality: 43,
    risk: "high",
    floatM: 133,
    volumeSurge: 6.1,
    revenueGrowth: 8,
    notes: ["price action แรงแต่ quality ต่ำกว่าเกณฑ์", "volume สูงจากธีม speculative", "ควรติด watch แบบเสี่ยงสูง ไม่ใช่ candidate พื้นฐานดี"],
    prices: [3.15, 3.08, 3.2, 3.28, 3.35, 3.5, 3.72, 3.86, 4.05, 4.28, 4.15, 4.5, 4.8, 4.55, 4.3, 4.12, 3.95, 3.72, 3.64, 3.8, 3.92, 4.1, 4.25, 4.18, 4.02, 3.86, 3.94, 4.05, 4.12, 4.04],
    volumes: [7.0, 6.0, 8.0, 9.0, 11.0, 15.0, 22.0, 30.0, 42.0, 55.0, 49.0, 66.0, 80.0, 60.0, 48.0, 42.0, 38.0, 34.0, 32.0, 36.0, 41.0, 52.0, 61.0, 54.0, 46.0, 40.0, 45.0, 50.0, 53.0, 49.0],
  },
  {
    ticker: "AEHR",
    name: "Aehr Test Systems",
    marketCapM: 530,
    sector: "Semiconductor equipment",
    price: 18.28,
    quality: 71,
    risk: "medium",
    floatM: 27,
    volumeSurge: 3.9,
    revenueGrowth: 21,
    debtRatio: 5,
    notes: ["กำลังกลับตัวหลังฐานยาว", "quality ดีและ float ต่ำ", "ยังต้องรอ breakout เหนือกรอบใหญ่เพื่อยืนยัน"],
    prices: [12.4, 12.1, 12.3, 12.6, 12.2, 12.8, 13.1, 13.5, 13.2, 13.7, 14.1, 14.8, 14.5, 15.2, 15.9, 16.4, 16.2, 16.8, 17.1, 17.5, 17.9, 18.3, 18.1, 17.8, 18.0, 18.2, 18.5, 18.1, 18.4, 18.28],
    volumes: [0.7, 0.6, 0.7, 0.9, 0.7, 1.0, 1.2, 1.4, 1.1, 1.6, 1.9, 2.4, 1.8, 2.8, 3.5, 4.1, 3.6, 4.4, 4.9, 5.3, 5.8, 6.1, 5.5, 4.8, 5.1, 5.6, 6.4, 5.7, 6.3, 6.0],
  },
  {
    ticker: "PLAB",
    name: "Photronics",
    marketCapM: 1700,
    sector: "Semiconductors",
    price: 26.74,
    quality: 82,
    risk: "low",
    floatM: 58,
    volumeSurge: 1.8,
    revenueGrowth: 6,
    debtRatio: 4,
    notes: ["quality สูงแต่ demand signal ยังไม่เร่ง", "เหมาะเทียบเป็น benchmark ในกลุ่ม", "ไม่ใช่ตัวติดเรดาร์แรงสุดตอนนี้"],
    prices: [24.2, 24.4, 24.0, 24.1, 24.6, 24.8, 25.0, 24.9, 25.1, 25.3, 25.2, 25.6, 25.8, 25.7, 25.9, 26.1, 26.2, 26.0, 26.3, 26.5, 26.4, 26.7, 26.8, 26.6, 26.9, 27.1, 26.9, 26.8, 26.95, 26.74],
    volumes: [0.6, 0.7, 0.5, 0.6, 0.8, 0.9, 0.8, 0.7, 0.9, 1.0, 0.9, 1.1, 1.2, 1.0, 1.1, 1.3, 1.4, 1.1, 1.4, 1.6, 1.5, 1.7, 1.8, 1.5, 1.8, 2.0, 1.7, 1.6, 1.8, 1.7],
  },
];

// Helper to generate seeded random number
function seededRandom(seed) {
  let value = seed % 2147483647;
  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}

// Generate real-looking ticker symbols
function generateTicker(index) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const a = alphabet[index % 26];
  const b = alphabet[Math.floor(index / 26) % 26];
  const c = alphabet[Math.floor(index / 676) % 26];
  const d = alphabet[Math.floor(index / 17576) % 26];
  return `${a}${b}${c}${d}`.replace(/A+$/, "") || "WYZ";
}

// Company name seed library
const companyFirst = ["Aero", "Lumi", "Quantum", "Bio", "Crest", "Nova", "Zeta", "Vertex", "Heli", "Apex", "Grid", "Robo", "Macro", "Core", "Alpha", "Cyper", "Ion", "Astra", "Omni", "Solar"];
const companySecond = ["Vironment", "Systems", "Technologies", "Genomics", "Networks", "Software", "Energy", "Logic", "Dynamics", "Solutions", "Pharma", "Analytics", "Automation", "Labs"];

// Generate mock stocks up to N
function buildDatabase(size = 50) {
  baseStocks.forEach(s => s.isReal = true);
  const list = [...baseStocks];
  
  for (let i = baseStocks.length; i < size; i++) {
    const rand = seededRandom(i * 123 + 456);
    
    const ticker = generateTicker(i + 200);
    const first = companyFirst[Math.floor(rand() * companyFirst.length)];
    const second = companySecond[Math.floor(rand() * companySecond.length)];
    const name = `${first}${second}`;
    
    const sectors = ["Semiconductors", "Biotech", "Industrial tech", "Software", "Energy services", "Networking", "Medical devices", "Defense Tech", "Aerospace"];
    const sector = sectors[Math.floor(rand() * sectors.length)];
    
    // Market cap between 10M and 3000M
    const marketCapM = Math.round(15 + rand() * 2985);
    const quality = Math.round(25 + rand() * 65);
    const risk = quality > 72 && rand() > 0.3 ? "low" : quality > 50 && rand() > 0.2 ? "medium" : "high";
    const floatM = Math.round(5 + rand() * 150);
    const volumeSurge = Number((0.5 + rand() * 9.5).toFixed(1));
    const revenueGrowth = Math.round(-15 + rand() * 85);
    const debtRatio = Math.round(rand() * 80);
    
    // Generate price history (30 days)
    let price = Number((1.5 + rand() * 45).toFixed(2));
    const drift = -0.005 + rand() * 0.025; // drift upward generally
    const prices = [];
    const volumes = [];
    
    for (let day = 0; day < 30; day++) {
      const shock = (rand() - 0.47) * 0.08;
      const surgeBonus = day === 29 ? (volumeSurge > 3 ? volumeSurge * 0.02 : 0) : 0;
      price = Math.max(0.2, price * (1 + drift + shock + surgeBonus));
      prices.push(Number(price.toFixed(2)));
      volumes.push(Number((0.1 + rand() * 5 + (day === 29 ? volumeSurge * 2.5 : 0)).toFixed(2)));
    }
    
    const notes = [
      `ข้อมูลนี้สร้างโดยจำลองระบบคะแนนแสกนความแรง ${Math.round(quality + volumeSurge * 3)} คะแนน`,
      volumeSurge > 3.5 ? "ตรวจพบการระเบิดของปริมาณการซื้อขายเฉลี่ย (Volume Breakout)" : "อัตราการซื้อขายเฉลี่ยคงที่ รอยืนยันสัญญาณราคา",
      quality >= 60 ? "อัตราหนี้สินและโครงสร้างพื้นฐานจัดว่าอยู่ในเกณฑ์แกร่ง" : "สัดส่วนงบการเงินตึงตัว ควรจำกัดสัดส่วนพอร์ตในการลงทุน"
    ];
    
    list.push({
      ticker,
      name,
      marketCapM,
      sector,
      price: prices[29],
      quality,
      risk,
      floatM,
      volumeSurge,
      revenueGrowth,
      debtRatio,
      notes,
      prices,
      volumes
    });
  }
  
  return list;
}

let stocksDB = buildDatabase(50);

// ==========================================================================
// 2. Global State & DOM Element Mapping
// ==========================================================================
const state = {
  activeTab: "scanner", // scanner, watchlist, portfolio, leaderboard, exchange
  selectedTicker: "SOUN",
  capFilter: "all",
  scoreThreshold: 45,
  qualityOnly: false,
  volumeSurgeOnly: false,
  searchQuery: "",
  activeIndex: "all",
  chartType: "price",
  chartRange: "30d",
  syncing: false,
  
  // Sort State
  sortBy: "score", // ticker, change, volume, quality, score, price
  sortDesc: true,
  
  // Simulated Market State
  marketOpen: false,

  // Expanded Features State
  techFilter: "all", // all, goldencross, oversold, volume
  drawMode: null, // null, pen, marker, eraser
  annotations: {}, // ticker -> array of paths { tool, points }
  quests: {
    apprentice: false,
    deepValue: false,
    volumeRaider: false,
    folderCollector: false
  }
};

// Map DOM Elements
const els = {
  // Topbar
  marketDot: document.getElementById("marketDot"),
  marketPulseText: document.getElementById("marketPulseText"),
  userPortfolioVal: document.getElementById("userPortfolioVal"),
  profileBadge: document.getElementById("profileBadge"),
  
  // Sidebar
  sidebarPanel: document.getElementById("sidebarPanel"),
  searchInput: document.getElementById("searchInput"),
  capFilters: document.getElementById("capFilters"),
  scoreThreshold: document.getElementById("scoreThreshold"),
  scoreThresholdVal: document.getElementById("scoreThresholdVal"),
  qualityOnly: document.getElementById("qualityOnly"),
  volumeSurgeFilter: document.getElementById("volumeSurgeFilter"),
  dbCountText: document.getElementById("dbCountText"),
  syncProgress: document.getElementById("syncProgress"),
  btnUpdateData: document.getElementById("btnUpdateData"),
  syncStatus: document.getElementById("syncStatus"),
  
  // Center Panels / Tabs
  feedTitle: document.getElementById("feedTitle"),
  feedSubtitle: document.getElementById("feedSubtitle"),
  agendaNoteBtn: document.getElementById("agendaNoteBtn"),
  stockRows: document.getElementById("stockRows"),
  screenerSummary: document.getElementById("screenerSummary"),
  sumRadarCount: document.getElementById("sumRadarCount"),
  sumAvgQuality: document.getElementById("sumAvgQuality"),
  sumTopBreakout: document.getElementById("sumTopBreakout"),
  sumTopVolume: document.getElementById("sumTopVolume"),
  
  // Tabs Container Views
  viewScanner: document.getElementById("viewScanner"),
  viewWatchlists: document.getElementById("viewWatchlists"),
  viewPortfolio: document.getElementById("viewPortfolio"),
  viewLeaderboard: document.getElementById("viewLeaderboard"),
  viewExchange: document.getElementById("viewExchange"),
  
  // Detail Panel
  detailPanel: document.getElementById("detailPanel"),
  detSector: document.getElementById("detSector"),
  detTicker: document.getElementById("detTicker"),
  btnToggleWatchlist: document.getElementById("btnToggleWatchlist"),
  detName: document.getElementById("detName"),
  detPrice: document.getElementById("detPrice"),
  detChange: document.getElementById("detChange"),
  detMarketCap: document.getElementById("detMarketCap"),
  detRadarScore: document.getElementById("detRadarScore"),
  detRsi: document.getElementById("detRsi"),
  detVolSurgeVal: document.getElementById("detVolSurgeVal"),
  detGrowth: document.getElementById("detGrowth"),
  detDebt: document.getElementById("detDebt"),
  detFloat: document.getElementById("detFloat"),
  detRisk: document.getElementById("detRisk"),
  
  // Chart Elements
  chartCanvas: document.getElementById("stockPriceChart"),
  chartPenPath: document.getElementById("chartPenPath"),
  chartPenDot: document.getElementById("chartPenDot"),
  chartHoverXLine: document.getElementById("chartHoverXLine"),
  chartHoverDot: document.getElementById("chartHoverDot"),
  chartTooltip: document.getElementById("chartTooltip"),
  tooltipPrice: document.getElementById("tooltipPrice"),
  tooltipDate: document.getElementById("tooltipDate"),
  chartTypeTabs: document.getElementById("chartTypeTabs"),
  chartRangeTabs: document.getElementById("chartRangeTabs"),
  
  // Order Panel
  trPositionShares: document.getElementById("trPositionShares"),
  trPositionAvg: document.getElementById("trPositionAvg"),
  trPositionPnl: document.getElementById("trPositionPnl"),
  btnOrderBuy: document.getElementById("btnOrderBuy"),
  btnOrderSell: document.getElementById("btnOrderSell"),
  
  // AI Mascot
  mascotBubbleText: document.getElementById("mascotBubbleText"),
  mascotChatForm: document.getElementById("mascotChatForm"),
  mascotChatInput: document.getElementById("mascotChatInput"),
  
  // Exchange Panel UI
  exPayInput: document.getElementById("exPayInput"),
  btnSwapCurrency: document.getElementById("btnSwapCurrency"),
  exReceiveInput: document.getElementById("exReceiveInput"),
  exPayCurr: document.getElementById("exPayCurr"),
  exReceiveCurr: document.getElementById("exReceiveCurr"),
  exchangeRateText: document.getElementById("exchangeRateText"),
  exThbBalance: document.getElementById("exThbBalance"),
  exUsdBalance: document.getElementById("exUsdBalance"),
  btnExecuteExchange: document.getElementById("btnExecuteExchange"),
  
  // Tables & Logs
  portfolioRows: document.getElementById("portfolioRows"),
  tradeLogRows: document.getElementById("tradeLogRows"),
  btnClearHistory: document.getElementById("btnClearHistory"),
  leaderboardList: document.getElementById("leaderboardList"),
  
  // Modals
  watchlistModal: document.getElementById("watchlistModal"),
  watchlistChecklist: document.getElementById("watchlistChecklist"),
  btnWlCancel: document.getElementById("btnWlCancel"),
  btnWlConfirm: document.getElementById("btnWlConfirm"),
  wlModalTicker: document.getElementById("wlModalTicker"),
  
  orderModal: document.getElementById("orderModal"),
  ordModalTitle: document.getElementById("ordModalTitle"),
  ordModalTicker: document.getElementById("ordModalTicker"),
  ordModalPrice: document.getElementById("ordModalPrice"),
  ordModalCash: document.getElementById("ordModalCash"),
  ordQuantityInput: document.getElementById("ordQuantityInput"),
  ordModalTotal: document.getElementById("ordModalTotal"),
  btnOrdCancel: document.getElementById("btnOrdCancel"),
  btnOrdConfirm: document.getElementById("btnOrdConfirm"),
  
  // Toasts
  toastContainer: document.getElementById("toastContainer"),

  // Technical and News UI Elements
  techFilters: document.getElementById("techFilters"),
  newsHeadline: document.getElementById("newsHeadline"),
  newsBody: document.getElementById("newsBody"),
  newsStamp: document.getElementById("newsStamp"),
  
  // Draw Tool UI Elements
  drawPenBtn: document.getElementById("drawPenBtn"),
  drawMarkerBtn: document.getElementById("drawMarkerBtn"),
  drawEraserBtn: document.getElementById("drawEraserBtn"),
  drawClearBtn: document.getElementById("drawClearBtn")
};

// ==========================================================================
// 3. Calculator Utilities (Math, RSI, Scores, SMAs)
// ==========================================================================
function getStockChangePercent(stock, days = 30) {
  const prices = stock.prices;
  if (prices.length < 2) return 0;
  const current = prices[prices.length - 1];
  
  // Clamp range
  const targetDays = Math.min(days, prices.length);
  const basePrice = prices[prices.length - targetDays];
  
  return ((current - basePrice) / basePrice) * 100;
}

function calculateRSI(prices, period = 14) {
  if (prices.length < period + 1) return 50; // default middle
  
  let gains = 0;
  let losses = 0;
  
  for (let i = prices.length - period; i < prices.length; i++) {
    const diff = prices[i] - prices[i - 1];
    if (diff > 0) gains += diff;
    else losses -= diff;
  }
  
  if (losses === 0) return 100;
  const rs = gains / losses;
  return Math.round(100 - 100 / (1 + rs));
}

function calculateRadarScore(stock) {
  const change1M = getStockChangePercent(stock, 30);
  
  // Core Score components: Momentum (50%), Quality (30%), Vol Surge (20%)
  const momentumScore = Math.max(0, Math.min(100, Math.round(change1M * 3.5 + 40)));
  const volScore = Math.max(0, Math.min(100, Math.round(stock.volumeSurge * 10)));
  const baseScore = (momentumScore * 0.5) + (stock.quality * 0.3) + (volScore * 0.2);
  
  // Penalize risk
  const penalty = stock.risk === "high" ? 6 : stock.risk === "medium" ? 2 : 0;
  return Math.max(0, Math.min(99, Math.round(baseScore - penalty)));
}

function formatMarketCap(m) {
  if (m >= 1000) return `$${(m / 1000).toFixed(2)}B`;
  return `$${m}M`;
}

function calculateSMA(data, period) {
  const sma = [];
  for (let i = 0; i < data.length; i++) {
    if (i < period - 1) {
      sma.push(null);
    } else {
      let sum = 0;
      for (let j = 0; j < period; j++) {
        sum += data[i - j];
      }
      sma.push(sum / period);
    }
  }
  return sma;
}

// ==========================================================================
// 4. Real Stock Yahoo Finance API Integrator (Option A / Option B proxy)
// ==========================================================================
const apiBase = window.location.origin.includes("localhost") || window.location.origin.includes("127.0.0.1") || window.location.port === "8000" ? "" : "https://api.allorigins.win/get?url=";

async function queryStockFromYahoo(symbol, range = "1mo") {
  const targetUrl = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?range=${range}&interval=1d`;
  let url = `/api/chart?symbol=${symbol}&range=${range}`;
  let isProxied = false;
  
  if (apiBase) {
    url = apiBase + encodeURIComponent(targetUrl);
    isProxied = true;
  }
  
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    if (!response.ok) throw new Error("Yahoo fetch failed");
    let json = await response.json();
    
    if (isProxied) {
      json = JSON.parse(json.contents);
    }
    
    const result = json.chart.result[0];
    const indicators = result.indicators.quote[0];
    
    // Align quotes arrays by filtering out indices with null/undefined values
    const adjClose = result.indicators.adjclose ? result.indicators.adjclose[0].adjclose : null;
    const closeQuotes = indicators.close || [];
    const openQuotes = indicators.open || [];
    const highQuotes = indicators.high || [];
    const lowQuotes = indicators.low || [];
    const volumeQuotes = indicators.volume || [];
    
    const prices = [];
    const opens = [];
    const highs = [];
    const lows = [];
    const volumes = [];
    
    for (let i = 0; i < closeQuotes.length; i++) {
      const closeVal = adjClose ? adjClose[i] : closeQuotes[i];
      const openVal = openQuotes[i];
      const highVal = highQuotes[i];
      const lowVal = lowQuotes[i];
      const volVal = volumeQuotes[i];
      
      if (closeVal !== null && closeVal !== undefined &&
          openVal !== null && openVal !== undefined &&
          highVal !== null && highVal !== undefined &&
          lowVal !== null && lowVal !== undefined) {
        prices.push(closeVal);
        opens.push(openVal);
        highs.push(highVal);
        lows.push(lowVal);
        volumes.push(volVal / 1000000); // convert to Millions
      }
    }
    
    const meta = result.meta;
    const price = meta.regularMarketPrice || prices[prices.length - 1];
    const prevClose = meta.chartPreviousClose || prices[0];
    const changePct = ((price - prevClose) / prevClose) * 100;
    
    // Quality scoring approximation
    const scoreBase = Math.round(45 + (symbol.length <= 4 ? 15 : 0) + (price > 12 ? 10 : 0));
    const quality = Math.max(30, Math.min(95, scoreBase));
    
    // Risk beta profile mock
    const risk = price > 35 ? "low" : price > 8 ? "medium" : "high";
    
    // Volume surge metric
    const lastVol = indicators.volume[indicators.volume.length - 1] || 100000;
    const avgVol = indicators.volume.reduce((a, b) => a + (b || 0), 0) / indicators.volume.length;
    const volumeSurge = Number((lastVol / (avgVol || 1)).toFixed(1)) || 1.2;
    
    // sector and details
    let sector = "US Stocks";
    if (["AAPL", "MSFT", "NVDA", "AMD", "AVGO"].includes(symbol)) sector = "Semiconductors / AI";
    else if (["TSLA", "RIVN", "LCID"].includes(symbol)) sector = "Automotive / EV";
    else if (["AMZN", "META", "GOOGL", "NFLX"].includes(symbol)) sector = "Tech Giants / Internet";
    
    return {
      ticker: symbol,
      name: meta.shortName || symbol,
      price: price,
      prices: prices.slice(-252), // max 1Y history
      opens: opens.slice(-252),
      highs: highs.slice(-252),
      lows: lows.slice(-252),
      volumes: volumes.slice(-252),
      marketCapM: Math.round((meta.marketCap || (price * 100000000)) / 1000000),
      floatM: Math.round((meta.floatShares || (meta.impliedSharesOutstanding || 10000000)) / 1000000) || 50,
      sector: sector,
      quality: quality,
      risk: risk,
      volumeSurge: volumeSurge,
      revenueGrowth: 18,
      debtRatio: 24,
      notes: [
        `ดึงข้อมูลจริงเรียลไทม์ (ดีเลย์ 15 นาที) จาก Yahoo Finance API`,
        `อัตราการเทรด (Volume Surge) เฉลี่ยอยู่ที่ ${volumeSurge.toFixed(1)}x เท่าของค่าเฉลี่ยสะสม`,
        `ราคาปิดวันก่อนหน้าของตลาดสหรัฐฯ: $${prevClose.toFixed(2)} USD`
      ]
    };
  } catch (err) {
    console.error(`Failed querying real stock data for ${symbol}`, err);
    throw err;
  }
}

async function searchAndAddStock(ticker) {
  ticker = ticker.toUpperCase().trim();
  if (!ticker) return;
  
  // check if already exists
  const existing = stocksDB.find(s => s.ticker === ticker);
  if (existing) {
    selectStock(ticker);
    return;
  }
  
  showToast(`🔍 กำลังค้นหาข้อมูลหุ้นจริง ${ticker} จาก Yahoo...`);
  try {
    const stock = await queryStockFromYahoo(ticker, "1y");
    stocksDB.push(stock);
    els.dbCountText.textContent = `${stocksDB.length} หุ้น`;
    renderTable();
    selectStock(ticker);
    showToast(`✅ เพิ่มหุ้น ${ticker} เข้าเรดาร์สแกนสำเร็จ!`);
  } catch (err) {
    console.error("Error searching stock", err);
    showToast(`❌ ไม่พบข้อมูลหุ้น ${ticker} หรือมีปัญหา CORS ในบราวเซอร์ของคุณ`);
  }
}

// ==========================================================================
// 5. Data Filter & Sorting Operations
// ==========================================================================
function getFilteredStocks() {
  return stocksDB.filter(stock => {
    // 1. Search Query
    if (state.searchQuery) {
      const q = state.searchQuery.toUpperCase();
      if (!stock.ticker.includes(q) && !stock.name.toUpperCase().includes(q)) {
        return false;
      }
    }
    
    // 2. Index selection (sp500/nasdaq/all)
    if (state.activeIndex === "sp500") {
      if (stock.marketCapM < 1500) return false;
    } else if (state.activeIndex === "nasdaq") {
      if (stock.sector === "Energy services" || stock.sector === "Industrial tech") return false;
    }
    
    // 3. Market Cap Segmented Filters
    if (state.capFilter === "big") {
      if (stock.marketCapM < 1000) return false;
    } else if (state.capFilter === "mid") {
      if (stock.marketCapM < 250 || stock.marketCapM >= 1000) return false;
    } else if (state.capFilter === "small") {
      if (stock.marketCapM >= 250) return false;
    }
    
    // 4. Score Threshold
    const score = calculateRadarScore(stock);
    if (score < state.scoreThreshold) return false;
    
    // 5. Quality Only
    if (state.qualityOnly && stock.quality < 60) return false;
    
    // 6. Volume Surge Only
    if (state.volumeSurgeOnly && stock.volumeSurge < 2.0) return false;

    // 7. Technical Indicator Screener Presets
    if (state.techFilter === "goldencross") {
      const prices = stock.prices;
      const ma20 = calculateSMA(prices, 20);
      const ma50 = calculateSMA(prices, 50);
      const lastIdx = prices.length - 1;
      const lastMA20 = ma20[lastIdx];
      const lastMA50 = ma50[lastIdx];
      if (lastMA20 === null || lastMA50 === null) return false;
      // Golden Cross condition: MA20 > MA50 and Close > MA20
      if (lastMA20 <= lastMA50 || stock.price <= lastMA20) return false;
    } else if (state.techFilter === "oversold") {
      const rsi = calculateRSI(stock.prices);
      if (rsi >= 35) return false;
    } else if (state.techFilter === "volume") {
      if (stock.volumeSurge < 2.5) return false;
    }
    
    return true;
  });
}

function getSortedStocks(stocksList) {
  return [...stocksList].sort((a, b) => {
    let valA, valB;
    
    switch (state.sortBy) {
      case "ticker":
        valA = a.ticker;
        valB = b.ticker;
        break;
      case "change":
        valA = getStockChangePercent(a, 30);
        valB = getStockChangePercent(b, 30);
        break;
      case "volume":
        valA = a.volumeSurge;
        valB = b.volumeSurge;
        break;
      case "quality":
        valA = a.quality;
        valB = b.quality;
        break;
      case "price":
        valA = a.price;
        valB = b.price;
        break;
      case "score":
      default:
        valA = calculateRadarScore(a);
        valB = calculateRadarScore(b);
        break;
    }
    
    if (valA === valB) return 0;
    
    if (typeof valA === "string") {
      return state.sortDesc ? valB.localeCompare(valA) : valA.localeCompare(valB);
    }
    
    return state.sortDesc ? valB - valA : valA - valB;
  });
}

// ==========================================================================
// 6. Ledger / LocalStorage Game State Management
// ==========================================================================
const userPortfolio = {
  cashUSD: 100000.00,
  cashTHB: 1000000.00,
  holdings: {}, // Ticker -> { shares: number, totalCost: number }
  logs: [],      // array of logs { time, ticker, action (BUY/SELL/SWAP), qty, price, total }
  watchlists: {
    "Core High Momentum": ["AXTI", "SOUN"],
    "Small-Cap Gems": ["TSSI", "AEHR"],
    "Speculative AI": ["SOUN", "BBAI"]
  }
};

function savePortfolio() {
  localStorage.setItem("cozy_stock_portfolio_ii", JSON.stringify(userPortfolio));
  renderTopbarBalance();
  updatePositionBox();
}

function loadPortfolio() {
  const saved = localStorage.getItem("cozy_stock_portfolio_ii");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      Object.assign(userPortfolio, parsed);
    } catch (e) {
      console.error("Failed parsing portfolio", e);
    }
  }
}

function addTradeLog(ticker, action, qty, price, total) {
  userPortfolio.logs.unshift({
    time: new Date().toLocaleString("th-TH"),
    ticker,
    action,
    qty,
    price,
    total
  });
  savePortfolio();
}

function executeBuy(ticker, qty, price) {
  const totalCost = qty * price;
  if (userPortfolio.cashUSD < totalCost) {
    showToast("❌ ยอดเงินสด USD ของคุณไม่เพียงพอสำหรับการสั่งซื้อนี้!");
    return false;
  }
  
  userPortfolio.cashUSD -= totalCost;
  
  if (!userPortfolio.holdings[ticker]) {
    userPortfolio.holdings[ticker] = { shares: 0, totalCost: 0 };
  }
  
  const h = userPortfolio.holdings[ticker];
  h.shares += qty;
  h.totalCost += totalCost;
  
  addTradeLog(ticker, "BUY", qty, price, totalCost);
  showToast(`✅ ซื้อหุ้น ${ticker} จำนวน ${qty} หุ้นเรียบร้อย!`);
  
  // Achievement Validation Checks on Buy
  const stock = stocksDB.find(s => s.ticker === ticker);
  if (stock) {
    if (!userPortfolio.quests) {
      userPortfolio.quests = { apprentice: false, deepValue: false, volumeRaider: false, folderCollector: false };
    }
    
    const rsi = calculateRSI(stock.prices);
    if (rsi <= 35 && !userPortfolio.quests.deepValue) {
      userPortfolio.quests.deepValue = true;
      triggerQuestUnlock("questDeepValue", "stampDeepValueInk", "🏆 ปลดล็อคความสำเร็จ: นักช้อนของดี! (ช้อนซื้อหุ้นเทคโนโลยีตอนตลาด Oversold)");
    }
    
    if (stock.volumeSurge >= 3.0 && !userPortfolio.quests.volumeRaider) {
      userPortfolio.quests.volumeRaider = true;
      triggerQuestUnlock("questVolumeRaider", "stampVolumeInk", "🏆 ปลดล็อคความสำเร็จ: ราชาเก็งกำไร! (เข้าเทรดหุ้นจำลองในช่วง Volume ทะลักเดือด)");
    }
  }
  
  checkQuests();
  return true;
}

function executeSell(ticker, qty, price) {
  const h = userPortfolio.holdings[ticker];
  if (!h || h.shares < qty) {
    showToast("❌ คุณมีจำนวนหุ้นในครอบครองไม่เพียงพอสำหรับการสั่งขาย!");
    return false;
  }
  
  const totalRev = qty * price;
  const avgCost = h.totalCost / h.shares;
  
  h.shares -= qty;
  h.totalCost -= (avgCost * qty);
  
  if (h.shares === 0) {
    delete userPortfolio.holdings[ticker];
  }
  
  userPortfolio.cashUSD += totalRev;
  
  addTradeLog(ticker, "SELL", qty, price, totalRev);
  showToast(`✅ ขายหุ้น ${ticker} จำนวน ${qty} หุ้นเรียบร้อย!`);
  checkQuests();
  return true;
}

// ==========================================================================
// 7. Interactive Sketchy Graphing Engine (HTML Canvas + SVG Pen filter)
// ==========================================================================
function getChartPoints(stock, range = "30d") {
  const prices = stock.prices;
  const volumes = stock.volumes;
  let pointsCount = 30;
  
  if (range === "5d") pointsCount = 5;
  else if (range === "90d") pointsCount = 90;
  else if (range === "252d") pointsCount = 252;
  
  let priceSlice = [];
  let volSlice = [];
  
  if (prices.length >= pointsCount) {
    priceSlice = prices.slice(-pointsCount);
    volSlice = volumes.slice(-pointsCount);
  } else {
    const rand = seededRandom(stock.name.length);
    priceSlice = [...prices];
    volSlice = [...volumes];
    while (priceSlice.length < pointsCount) {
      const p = priceSlice[0] * (1 + (rand() - 0.5) * 0.05);
      priceSlice.unshift(Number(p.toFixed(2)));
      volSlice.unshift(Number((rand() * 4).toFixed(2)));
    }
  }
  
  return { prices: priceSlice, volumes: volSlice };
}

function drawSketchyChart() {
  const canvas = els.chartCanvas;
  const stock = stocksDB.find(s => s.ticker === state.selectedTicker);
  if (!stock) return;
  
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  
  const width = rect.width || canvas.width;
  const height = rect.height || canvas.height;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  ctx.scale(dpr, dpr);
  
  ctx.clearRect(0, 0, width, height);
  
  // Cozy cream background fill
  ctx.fillStyle = "#fbf7ed";
  ctx.fillRect(0, 0, width, height);
  
  // Extract points
  const chartData = getChartPoints(stock, state.chartRange);
  const dataLength = chartData.prices.length;
  
  // Calculate OHLC dataset for candles mode
  const ohlc = [];
  const rand = seededRandom(stock.name.length);
  const closes = chartData.prices;
  const opens = stock.opens ? stock.opens.slice(-closes.length) : [];
  const highs = stock.highs ? stock.highs.slice(-closes.length) : [];
  const lows = stock.lows ? stock.lows.slice(-closes.length) : [];

  for (let i = 0; i < closes.length; i++) {
    const close = closes[i];
    let open = i > 0 ? closes[i - 1] : close * (1 - 0.01 + rand() * 0.02);
    if (opens[i] !== undefined && opens[i] !== null) open = opens[i];
    
    let high = Math.max(open, close) * (1 + rand() * 0.015);
    if (highs[i] !== undefined && highs[i] !== null) high = highs[i];
    
    let low = Math.min(open, close) * (1 - rand() * 0.015);
    if (lows[i] !== undefined && lows[i] !== null) low = lows[i];
    
    high = Math.max(high, open, close);
    low = Math.min(low, open, close);
    ohlc.push({ open, high, low, close });
  }

  let values = [];
  if (state.chartType === "volume") {
    values = chartData.volumes;
  } else if (state.chartType === "relative") {
    const basePrice = chartData.prices[0];
    values = chartData.prices.map(p => ((p - basePrice) / basePrice) * 100);
  } else if (state.chartType === "candles") {
    // Collect all open/high/low/close prices to scale the canvas correctly
    ohlc.forEach(o => values.push(o.open, o.high, o.low, o.close));
  } else {
    values = chartData.prices;
  }
  
  const minVal = Math.min(...values);
  const maxVal = Math.max(...values);
  const spread = maxVal - minVal || 1;
  
  const pTop = 25;
  const pBottom = 30;
  const pLeft = 50;
  const pRight = 15;
  
  const plotW = width - pLeft - pRight;
  const plotH = height - pTop - pBottom;
  
  // 1. Draw Gridlines & Labels
  ctx.strokeStyle = "#e5dcc7";
  ctx.lineWidth = 0.8;
  ctx.setLineDash([3, 4]);
  ctx.font = "10.5px 'JetBrains Mono', monospace";
  ctx.fillStyle = "#8a8378";
  
  for (let i = 0; i <= 4; i++) {
    const y = pTop + (plotH / 4) * i;
    ctx.beginPath();
    ctx.moveTo(pLeft, y);
    ctx.lineTo(width - pRight, y);
    ctx.stroke();
    
    const val = maxVal - (spread / 4) * i;
    let lblText = val.toFixed(2);
    if (state.chartType === "volume") lblText = `${val.toFixed(1)}M`;
    else if (state.chartType === "relative") lblText = `${val > 0 ? "+" : ""}${val.toFixed(1)}%`;
    else lblText = `$${val.toFixed(2)}`;
    
    ctx.fillText(lblText, 8, y + 4);
  }
  ctx.setLineDash([]);
  
  // Save chart geometry for cursor hover tracking
  const points = chartData.prices.map((val, idx) => {
    const x = pLeft + (idx / (dataLength - 1)) * plotW;
    const y = height - pBottom - ((val - minVal) / spread) * plotH;
    return { x, y, value: val, index: idx };
  });
  
  window._currentChartGeom = {
    points,
    prices: chartData.prices,
    pLeft, pTop, plotW, plotH, height, pBottom, minVal, spread
  };
  
  // Clean dynamic candle elements
  let bullEl = document.getElementById("chartBullCandlesPath");
  let bearEl = document.getElementById("chartBearCandlesPath");
  
  // 2. Draw Volume Bars / Chart Lines on Canvas
  const trendUp = chartData.prices[dataLength - 1] >= chartData.prices[0];
  
  if (state.chartType === "volume") {
    ctx.fillStyle = "rgba(143, 154, 94, 0.6)";
    points.forEach((pt, idx) => {
      const nextX = points[idx + 1] ? points[idx + 1].x : width - pRight;
      const barW = Math.max(3, (nextX - pt.x) * 0.7);
      const barH = height - pBottom - pt.y;
      ctx.fillRect(pt.x - barW / 2, pt.y, barW, barH);
    });
    
    // Hide SVG paths
    els.chartPenPath.setAttribute("d", "");
    els.chartPenDot.setAttribute("cx", "-10");
    if (bullEl) bullEl.style.display = "none";
    if (bearEl) bearEl.style.display = "none";
    const m20 = document.getElementById("chartMa20Path");
    if (m20) m20.setAttribute("d", "");
    const m50 = document.getElementById("chartMa50Path");
    if (m50) m50.setAttribute("d", "");
  } else if (state.chartType === "candles") {
    // Draw Candlesticks using SVG overlay paths for pen filter distortion
    els.chartPenPath.setAttribute("d", "");
    els.chartPenDot.setAttribute("cx", "-10");
    
    let bullPathStr = "";
    let bearPathStr = "";
    
    const candleW = Math.max(1.8, (plotW / dataLength) * 0.3);
    
    ohlc.forEach((c, idx) => {
      const pt = points[idx];
      const yOpen = height - pBottom - ((c.open - minVal) / spread) * plotH;
      const yClose = height - pBottom - ((c.close - minVal) / spread) * plotH;
      const yHigh = height - pBottom - ((c.high - minVal) / spread) * plotH;
      const yLow = height - pBottom - ((c.low - minVal) / spread) * plotH;
      
      const wickStr = `M ${pt.x.toFixed(1)},${yHigh.toFixed(1)} L ${pt.x.toFixed(1)},${yLow.toFixed(1)} `;
      
      const xLeft = pt.x - candleW;
      const xRight = pt.x + candleW;
      const bodyStr = `M ${xLeft.toFixed(1)},${yOpen.toFixed(1)} L ${xRight.toFixed(1)},${yOpen.toFixed(1)} L ${xRight.toFixed(1)},${yClose.toFixed(1)} L ${xLeft.toFixed(1)},${yClose.toFixed(1)} Z `;
      
      if (c.close >= c.open) {
        bullPathStr += wickStr + bodyStr;
      } else {
        bearPathStr += wickStr + bodyStr;
      }
    });
    
    if (!bullEl) {
      bullEl = document.createElementNS("http://www.w3.org/2000/svg", "path");
      bullEl.setAttribute("id", "chartBullCandlesPath");
      bullEl.setAttribute("class", "chart-candle-line bull");
      bullEl.style.fill = "#8f9a5e"; // Matcha green
      bullEl.style.stroke = "#1f1a14";
      bullEl.style.strokeWidth = "1.2px";
      bullEl.setAttribute("filter", "url(#chartSketchFilter)");
      document.getElementById("chartPenOverlay").appendChild(bullEl);
    }
    bullEl.setAttribute("d", bullPathStr);
    bullEl.style.display = "";
    
    if (!bearEl) {
      bearEl = document.createElementNS("http://www.w3.org/2000/svg", "path");
      bearEl.setAttribute("id", "chartBearCandlesPath");
      bearEl.setAttribute("class", "chart-candle-line bear");
      bearEl.style.fill = "#d05a3f"; // Maple red
      bearEl.style.stroke = "#1f1a14";
      bearEl.style.strokeWidth = "1.2px";
      bearEl.setAttribute("filter", "url(#chartSketchFilter)");
      document.getElementById("chartPenOverlay").appendChild(bearEl);
    }
    bearEl.setAttribute("d", bearPathStr);
    bearEl.style.display = "";
  } else {
    // Price / Relative
    if (bullEl) bullEl.style.display = "none";
    if (bearEl) bearEl.style.display = "none";
    
    const svgPathStr = points.map((pt, idx) => 
      (idx === 0 ? "M" : "L") + pt.x.toFixed(1) + "," + pt.y.toFixed(1)
    ).join(" ");
    
    els.chartPenPath.setAttribute("d", svgPathStr);
    els.chartPenPath.className.baseVal = `chart-pen-line ${trendUp ? "up" : "down"}`;
    
    const lastPt = points[points.length - 1];
    els.chartPenDot.setAttribute("cx", lastPt.x.toFixed(1));
    els.chartPenDot.setAttribute("cy", lastPt.y.toFixed(1));
    els.chartPenDot.className.baseVal = `chart-pen-dot ${trendUp ? "up" : "down"}`;
  }
  
  // Sketchy SMA Lines overlays (always calculate closes SMA)
  if (state.chartType !== "volume") {
    let ma20Path = document.getElementById("chartMa20Path");
    if (!ma20Path) {
      ma20Path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      ma20Path.setAttribute("id", "chartMa20Path");
      ma20Path.setAttribute("class", "chart-pen-line ma20");
      ma20Path.setAttribute("filter", "url(#chartSketchFilter)");
      document.getElementById("chartPenOverlay").appendChild(ma20Path);
    }
    
    let ma50Path = document.getElementById("chartMa50Path");
    if (!ma50Path) {
      ma50Path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      ma50Path.setAttribute("id", "chartMa50Path");
      ma50Path.setAttribute("class", "chart-pen-line ma50");
      ma50Path.setAttribute("filter", "url(#chartSketchFilter)");
      document.getElementById("chartPenOverlay").appendChild(ma50Path);
    }
    
    const showMA20 = document.getElementById("toggleMA20")?.checked;
    const showMA50 = document.getElementById("toggleMA50")?.checked;
    
    // Values array mapping closes for SMA
    const closeVals = chartData.prices;
    
    if (showMA20) {
      const ma20Vals = calculateSMA(closeVals, 20);
      const ma20Points = ma20Vals.map((val, idx) => {
        if (val === null) return null;
        const x = pLeft + (idx / (dataLength - 1)) * plotW;
        const y = height - pBottom - ((val - minVal) / spread) * plotH;
        return { x, y };
      });
      const dStr = ma20Points.map((pt, idx) => {
        if (pt === null) return "";
        const isFirst = idx === 0 || ma20Points[idx - 1] === null;
        return (isFirst ? "M" : "L") + pt.x.toFixed(1) + "," + pt.y.toFixed(1);
      }).join(" ");
      ma20Path.setAttribute("d", dStr);
      ma20Path.style.display = "";
    } else {
      ma20Path.setAttribute("d", "");
      ma20Path.style.display = "none";
    }
    
    if (showMA50) {
      const ma50Vals = calculateSMA(closeVals, 50);
      const ma50Points = ma50Vals.map((val, idx) => {
        if (val === null) return null;
        const x = pLeft + (idx / (dataLength - 1)) * plotW;
        const y = height - pBottom - ((val - minVal) / spread) * plotH;
        return { x, y };
      });
      const dStr = ma50Points.map((pt, idx) => {
        if (pt === null) return "";
        const isFirst = idx === 0 || ma50Points[idx - 1] === null;
        return (isFirst ? "M" : "L") + pt.x.toFixed(1) + "," + pt.y.toFixed(1);
      }).join(" ");
      ma50Path.setAttribute("d", dStr);
      ma50Path.style.display = "";
    } else {
      ma50Path.setAttribute("d", "");
      ma50Path.style.display = "none";
    }
  }
  
  // 3. Draw X-axis timestamps
  ctx.textAlign = "center";
  ctx.fillStyle = "#8a8378";
  ctx.font = "9.5px 'Inter', sans-serif";
  const interval = Math.floor(dataLength / 3) || 1;
  
  for (let idx = 0; idx < dataLength; idx += interval) {
    if (idx >= dataLength) break;
    const pt = points[idx];
    const dayAgo = dataLength - 1 - idx;
    const dateStr = dayAgo === 0 ? "วันนี้" : `${dayAgo} วันก่อน`;
    ctx.fillText(dateStr, pt.x, height - 12);
  }

  // 4. Draw Free-hand Annotations
  const paths = state.annotations[state.selectedTicker] || [];
  paths.forEach(path => {
    if (path.points.length < 1) return;
    ctx.beginPath();
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    
    if (path.tool === "pen") {
      ctx.strokeStyle = "#1f1a14"; // Charcoal
      ctx.lineWidth = 2;
    } else if (path.tool === "marker") {
      ctx.strokeStyle = "rgba(143, 154, 94, 0.45)"; // Matcha highlighter
      ctx.lineWidth = 10;
    }
    
    const first = path.points[0];
    ctx.moveTo(first.xPct * width, first.yPct * height);
    for (let i = 1; i < path.points.length; i++) {
      const pt = path.points[i];
      ctx.lineTo(pt.xPct * width, pt.yPct * height);
    }
    ctx.stroke();
  });
}

// Setup Chart Mouse Tracking Hover listeners
function setupChartHover() {
  const canvas = els.chartCanvas;
  
  function handleHover(e) {
    const geom = window._currentChartGeom;
    if (!geom) return;
    
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    
    let nearest = null;
    let minDist = Infinity;
    
    geom.points.forEach(pt => {
      const dist = Math.abs(pt.x - mouseX);
      if (dist < minDist) {
        minDist = dist;
        nearest = pt;
      }
    });
    
    if (nearest && minDist < 24) {
      const priceVal = geom.prices[nearest.index];
      const dayAgo = geom.points.length - 1 - nearest.index;
      
      els.chartHoverXLine.setAttribute("x1", nearest.x.toFixed(1));
      els.chartHoverXLine.setAttribute("x2", nearest.x.toFixed(1));
      els.chartHoverXLine.setAttribute("y1", geom.pTop.toFixed(1));
      els.chartHoverXLine.setAttribute("y2", (geom.height - geom.pBottom).toFixed(1));
      els.chartHoverXLine.style.opacity = 0.55;
      
      els.chartHoverDot.setAttribute("cx", nearest.x.toFixed(1));
      els.chartHoverDot.setAttribute("cy", nearest.y.toFixed(1));
      els.chartHoverDot.style.opacity = 1;
      
      let valText = `$${priceVal.toFixed(2)}`;
      if (state.chartType === "volume") valText = `${nearest.value.toFixed(1)}M Vol`;
      else if (state.chartType === "relative") valText = `${nearest.value > 0 ? "+" : ""}${nearest.value.toFixed(1)}% Relative`;
      
      els.tooltipPrice.textContent = valText;
      els.tooltipDate.textContent = dayAgo === 0 ? "ราคาตลาดล่าสุด" : `${dayAgo} วันทำการก่อนหน้า`;
      
      els.chartTooltip.style.left = `${nearest.x}px`;
      els.chartTooltip.style.top = `${nearest.y - 12}px`;
      els.chartTooltip.classList.add("visible");
    } else {
      hideTooltip();
    }
  }
  
  function hideTooltip() {
    els.chartHoverXLine.style.opacity = 0;
    els.chartHoverDot.style.opacity = 0;
    els.chartTooltip.classList.remove("visible");
  }
  
  canvas.addEventListener("mousemove", handleHover);
  canvas.addEventListener("mouseleave", hideTooltip);
}

// Drawing toolbar / annotation listeners
function setupDrawingListeners() {
  const canvas = els.chartCanvas;
  let isDrawing = false;
  let currentPath = null;
  
  function getMousePos(e) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }
  
  canvas.addEventListener("mousedown", (e) => {
    if (!state.drawMode) return;
    
    if (state.drawMode === "eraser") {
      isDrawing = true;
      eraseAtPoint(e);
      return;
    }
    
    isDrawing = true;
    const pos = getMousePos(e);
    const rect = canvas.getBoundingClientRect();
    
    currentPath = {
      tool: state.drawMode,
      points: [{ xPct: pos.x / rect.width, yPct: pos.y / rect.height }]
    };
    
    const ticker = state.selectedTicker;
    if (!state.annotations[ticker]) {
      state.annotations[ticker] = [];
    }
    state.annotations[ticker].push(currentPath);
  });
  
  canvas.addEventListener("mousemove", (e) => {
    if (!isDrawing) return;
    
    if (state.drawMode === "eraser") {
      eraseAtPoint(e);
      return;
    }
    
    if (!currentPath) return;
    const pos = getMousePos(e);
    const rect = canvas.getBoundingClientRect();
    
    currentPath.points.push({ xPct: pos.x / rect.width, yPct: pos.y / rect.height });
    drawSketchyChart();
  });
  
  canvas.addEventListener("mouseup", () => {
    isDrawing = false;
    currentPath = null;
    saveAnnotations();
  });
  
  canvas.addEventListener("mouseleave", () => {
    isDrawing = false;
    currentPath = null;
  });
  
  function eraseAtPoint(e) {
    const pos = getMousePos(e);
    const rect = canvas.getBoundingClientRect();
    const xPct = pos.x / rect.width;
    const yPct = pos.y / rect.height;
    
    const ticker = state.selectedTicker;
    const paths = state.annotations[ticker] || [];
    
    const remaining = paths.filter(path => {
      return !path.points.some(pt => {
        const dx = pt.xPct - xPct;
        const dy = pt.yPct - yPct;
        return Math.sqrt(dx*dx + dy*dy) < 0.04;
      });
    });
    
    state.annotations[ticker] = remaining;
    saveAnnotations();
    drawSketchyChart();
  }
}

function saveAnnotations() {
  localStorage.setItem("cozy_chart_annotations", JSON.stringify(state.annotations));
}

function loadAnnotations() {
  const saved = localStorage.getItem("cozy_chart_annotations");
  if (saved) {
    try {
      state.annotations = JSON.parse(saved);
    } catch (e) {
      console.error("Failed loading annotations", e);
    }
  }
}

// ==========================================================================
// 8. Interactive Mascot Dialogue simulation (HoshiSen Mascot Dialog)
// ==========================================================================
const mascotDialogues = {
  welcome: [
    "ยินดีต้อนรับสู่คลับแสกนหาหุ้นจริงจาก Yahoo ค่ะ! สนใจตัวไหนวิเคราะห์คลิกตารางได้เลยนะค๊า 🦊✨",
    "วันนี้หุ้นจริงในตลาดจะเป็นยังไงกันบ้างนะ? ลองกดอัปเดท Yahoo ดึงข้อมูลสดกันเถอะค๊า! 🚀",
    "หนูโฮชิเซ็นพร้อมช่วยแสกนหาจุดกลับตัวและจุดงบแกร่งของหุ้นให้ทุกท่านแล้วค๊า! 🔎"
  ],
  business: {
    AXTI: "AXT Inc. ผลิตแผ่นเวเฟอร์กึ่งตัวนำประสิทธิภาพสูง (InP, GaAs) ซึ่งเป็นหัวใจสำคัญของอุปกรณ์เลเซอร์ความเร็วสูง 5G และการเชื่อมต่อความเร็วสูงในดาต้าเซ็นเตอร์ AI ค่ะ โครงสร้างงบการเงินค่อนข้างนิ่ง แต่มีความเสี่ยงตามรอบวัฏจักรเซมิคอนดักเตอร์ค่ะ",
    TSSI: "TSS Inc. ให้บริการออกแบบ ติดตั้งระบบ และดูแลรักษาโครงสร้างพื้นฐานดาต้าเซ็นเตอร์แบบโมดูลาร์สำหรับยักษ์ใหญ่คลาวด์และหน่วยงานรัฐค่ะ ได้รับประโยชน์เต็มๆ จากธีมการเติบโตและการวางระบบเซิร์ฟเวอร์ AI ค่ะ งบการเงินอยู่ในช่วงเทิร์นอะราวด์",
    SOUN: "SoundHound AI พัฒนาแพลตฟอร์ม AI ผู้ช่วยเสียงพูดคุยและการแปลภาษาธรรมชาติ เจาะกลุ่มร้านอาหาร drive-thru และรถยนต์อัจฉริยะค่ะ ธีมการเติบโตร้อนแรงมาก แต่ผลประกอบการด้านงบการเงินยังต้องระวังเรื่องการเพิ่มทุนและการขาดทุนสุทธิค่ะ",
    KOPN: "Kopin Corp. เป็นผู้บุกเบิกเทคโนโลยีจอภาพขนาดเล็กระดับไมโคร (Micro-display) และระบบออพติคอลสำหรับแว่นตา AR/VR ทั้งในกลุ่มการทหารและการพาณิชย์ค่ะ โครงสร้างราคาอยู่ในช่วงพักตัวสะสมพลังค่ะ",
    CRNT: "Ceragon Networks ผลิตอุปกรณ์ส่งสัญญาณไร้สายความเร็วสูง 5G Backhaul เพื่อเชื่อมโครงข่ายโทรคมนาคมในเขตห่างไกลค่ะ คุณภาพงบการเงินจัดว่าแกร่งและหนี้สินต่ำมากเมื่อเทียบกับหุ้นตัวเล็กตัวอื่นค่ะ",
    BBAI: "BigBear.ai ให้บริการแพลตฟอร์มซอฟต์แวร์วิเคราะห์ข้อมูลเชิงลึกและ AI สำหรับกระทรวงกลาโหมสหรัฐฯ และความมั่นคงค่ะ มีประเด็นเก็งกำไรสูงจากธีมความขัดแย้งระหว่างประเทศ แต่ระวังอัตราหนี้สินที่สูงถึง 64% นะคะ",
    AEHR: "Aehr Test Systems เป็นผู้นำระดับโลกด้านอุปกรณ์ทดสอบและตรวจสอบแผ่นชิป Silicon Carbide (SiC) ในตลาดรถยนต์ไฟฟ้าและเซิร์ฟเวอร์อุตสาหกรรมค่ะ ผลิตภัณฑ์มีความจำเป็นสูงและสัดส่วนหนี้สินต่ำมากค่ะ",
    PLAB: "Photronics ผลิตแผ่นโฟโตมาสก์ (Photomask) ซึ่งเป็นบล็อกแบบแม่พิมพ์ที่ใช้ในกระบวนการฉายแสงพิมพ์ลายบนแผ่นซิลิคอนชิปและจอแสดงผลค่ะ งบการเงินแข็งแกร่งระดับพรีเมียม (Quality 82) แต่ราคาหุ้นขยับค่อนข้างช้าค่ะ"
  },
  why: {
    AXTI: "ราคาพุ่งทะลุแนวต้านสำคัญพร้อมวอลุ่มหนาแน่น เนื่องจากความต้องการชิปออปติคอลลิงก์ความเร็วสูงในโครงข่ายซูเปอร์คอมพิวเตอร์ AI พุ่งขึ้นอย่างรวดเร็วค่ะ",
    TSSI: "วอลุ่มพุ่งทะยาน 7.9 เท่าเนื่องจากยอดสั่งจองจัดวางและประกอบแร็คเซิร์ฟเวอร์ระบายความร้อนด้วยน้ำสำหรับ GPU AI ขยายตัวอย่างมีนัยสำคัญ ส่งผลให้รายได้เติบโตถึง 42% ค๊า",
    SOUN: "ได้รับกระแสเชิงบวกต่อเนื่องจากการประกาศความร่วมมือขยายฟีเจอร์ AI แปลเสียงในเครือรถยนต์ค่ายใหญ่ยุโรป และแรงเก็งกำไรในฐานะหุ้นชิป AI ขนาดเล็กค่ะ",
    KOPN: "มีวอลุ่มไหลเข้าเก็งกำไรจากความคืบหน้าของยอดจัดส่งออเดอร์แว่นตาช่วยรบพิกเซลสูงในกลุ่มกลาโหมสหรัฐฯ ส่งผลให้ราคาเบรกทะลุกรอบสะสมตัวค่ะ",
    CRNT: "ยกฐานราคาสูงขึ้นอย่างมั่นคงจากการประกาศคว้าสัญญาติดตั้งระบบโครงข่ายสัญญาณ 5G ไร้สายในประเทศแถบละตินอเมริกาและเอเชียใต้ มูลค่ารวมหลายสิบล้านดอลลาร์ค่ะ",
    BBAI: "วอลุ่มพุ่งเก็งกำไรอย่างหนักหลังประกาศขยายสัญญาบริการตรวจค้นภาพจำลอง AI ร่วมกับกองทัพอากาศสหรัฐฯ มูลค่าสัญญายาว 5 ปีค่ะ",
    AEHR: "ฟื้นตัวหลังจากการพักฐานลึก เนื่องจากลูกค้ายักษ์ใหญ่ชิปรถยนต์ไฟฟ้าคอนเฟิร์มยอดสั่งซื้อตู้ทดสอบ SiC ล็อตใหม่ สะท้อนความต้องการตลาดยังไม่ลดลงค๊า",
    PLAB: "ราคาแกว่งในกรอบแคบและยกฐานยก RSI ชนะตลาดเล็กน้อยเนื่องจากงบการเงินไตรมาสล่าสุดกำไรเติบโตอย่างมั่นคงตามเป้าหมายของบริษัทค่ะ"
  }
};

let typingTimer = null;
function typeMascotText(text) {
  if (typingTimer) clearInterval(typingTimer);
  els.mascotBubbleText.innerHTML = "";
  let i = 0;
  
  const mascotAvatar = document.querySelector(".mascot-avatar");
  if (text.includes("ขาดทุน") || text.includes("ระวัง") || text.includes("หนี้สินสูง")) {
    mascotAvatar.textContent = "😰";
  } else if (text.includes("ทะลุ") || text.includes("พุ่ง") || text.includes("แกร่ง")) {
    mascotAvatar.textContent = "🦊🔥";
  } else {
    mascotAvatar.textContent = "🦊";
  }
  
  typingTimer = setInterval(() => {
    if (i < text.length) {
      if (text.substring(i, i + 4) === "<br>") {
        els.mascotBubbleText.innerHTML += "<br>";
        i += 4;
      } else if (text.substring(i, i + 8) === "<strong>") {
        const closeIdx = text.indexOf("</strong>", i);
        if (closeIdx !== -1) {
          els.mascotBubbleText.innerHTML += text.substring(i, closeIdx + 9);
          i = closeIdx + 9;
        } else {
          els.mascotBubbleText.innerHTML += text[i++];
        }
      } else {
        els.mascotBubbleText.innerHTML += text[i];
        i++;
      }
    } else {
      clearInterval(typingTimer);
    }
  }, 12);
}

function askMascot(topic) {
  const stock = stocksDB.find(s => s.ticker === state.selectedTicker);
  if (!stock) {
    typeMascotText("กรุณาเลือกหุ้นจากตารางแสกนด้านซ้ายก่อนนะคะ โฮชิเซ็นจะได้ช่วยวิเคราะห์ถูกตัวค๊า! 😊");
    return;
  }
  
  let response = "";
  
  if (topic === "business") {
    response = mascotDialogues.business[stock.ticker] || 
      `บริษัท <strong>${stock.name}</strong> ดำเนินธุรกิจหลักในกลุ่มอุตสาหกรรมเทคโนโลยี ${stock.sector} ค่ะ มีมูลค่าหลักทรัพย์ตามราคาตลาดประมาณ ${formatMarketCap(stock.marketCapM)} ข้อมูลจริงส่งตรงจากตลาดสหรัฐฯ เลยค๊า!`;
  } else if (topic === "why") {
    response = mascotDialogues.why[stock.ticker] || 
      `สำหรับ <strong>${stock.ticker}</strong> ล่าสุดมีอัตรา Volume Surge แข็งแกร่งถึง ${stock.volumeSurge}x เท่า และมีสัญญาณ RSI(14) อยู่ที่ ${calculateRSI(stock.prices)} ซึ่งแสดงโมเมนตัมแนวโน้มระยะสั้นที่น่าจับตามากค่ะ`;
  } else if (topic === "financial") {
    response = `รายงานงบการเงินย่อยของ <strong>${stock.ticker}</strong>:<br>` +
      `• ดัชนีคุณภาพเรดาร์: <strong>${stock.quality}/100</strong><br>` +
      `• ยอดการเติบโตเฉลี่ย: <strong>+${stock.revenueGrowth}% YoY</strong><br>` +
      `• ระดับความเสี่ยงเบื้องต้น: <strong>${stock.risk.toUpperCase()} BETA</strong><br>` +
      `สัดส่วนหนี้สินและโครงสร้างกระแสเงินสดถือว่าผ่านเกณฑ์การทดสอบระบบเรดาร์ในหมวดนี้ค๊า 📊`;
  } else if (topic === "news") {
    response = `สรุปข่าวสาร <strong>${stock.ticker}</strong>:<br>` +
      `1. ขยายแผนความร่วมมือการลงทุน AI Infrastructure ในสหรัฐฯ และพันธมิตรยุโรป<br>` +
      `2. ประกาศสัญญายอดสั่งซื้อความจำเป็นของเซกเตอร์ ${stock.sector} เพิ่มเติม<br>` +
      `3. นักวิเคราะห์เริ่มส่งสัญญาณเก็บหุ้นและให้เป้าหมายราคาเฉลี่ยเชิงบวกค๊า 📰`;
  }
  
  typeMascotText(response);
  updateMascotExpression();
}

function handleMascotChat(text) {
  const stock = stocksDB.find(s => s.ticker === state.selectedTicker);
  let reply = "";
  const q = text.toLowerCase().trim();
  
  if (q.includes("แนะนำ") || q.includes("ตัวไหนดี") || q.includes("แนะนำหุ้น")) {
    const highQuality = [...stocksDB].filter(s => s.quality >= 70).sort((a,b) => calculateRadarScore(b) - calculateRadarScore(a));
    if (highQuality.length > 0) {
      reply = `หนูแนะนำหุ้นงบแกร่งสัญญาณเด่นอย่าง <strong>${highQuality[0].ticker}</strong> (${highQuality[0].name}) ค๊า! ดัชนีเรดาร์รวมสูงถึง ${calculateRadarScore(highQuality[0])} คะแนน คุณภาพ ${highQuality[0].quality} ลองคลิกดูประวัติกราฟนะค๊า! 🦊🔥`;
    } else {
      reply = `ช่วงนี้ตลาดตึงตัว แนะนำมองหาจังหวะช้อนตัวที่ RSI ต่ำ หรือกดอัพเดทข่าวสารก่อนค๊า!`;
    }
  } else if (q.includes("rsi")) {
    if (!stock) {
      reply = `กรุณาเลือกหุ้นในตารางก่อนถามข้อมูล RSI นะคะ!`;
    } else {
      const rsi = calculateRSI(stock.prices);
      const cond = rsi >= 70 ? "Overbought (ซื้อมากเกินไป ระวังแรงขายทำกำไรดิ่งปรับฐานค่ะ 😰)" : rsi <= 35 ? "Oversold (ขายมากเกินไป มีโอกาสเด้งตัวรีบาวด์สูง น่าช้อนซื้อค๊า! 🦊🔥)" : "ปกติสะสมพลัง (Sideway)";
      reply = `หุ้น <strong>${stock.ticker}</strong> มีสัญญาณ RSI(14) อยู่ที่ <strong>${rsi}</strong> จัดอยู่ในหมวด: ${cond}`;
    }
  } else if (q.includes("ma") || q.includes("เฉลี่ย") || q.includes("เส้น")) {
    if (!stock) {
      reply = `กรุณาเลือกหุ้นจากตารางแสกนก่อนถามเรื่องเส้นค่าเฉลี่ยนะคะ!`;
    } else {
      const prices = stock.prices;
      const ma20 = calculateSMA(prices, 20);
      const lastMA20 = ma20[ma20.length - 1];
      if (lastMA20) {
        const trend = stock.price > lastMA20 ? "ขาขึ้นยกตัวสวยงาม (ยืนเหนือเส้น MA20 ได้ค๊า! 🚀)" : "ขาลงพักฐาน (ราคาหลุดต่ำกว่าเส้น MA20 ต้องรอฐานก่อนช้อนค๊า 😰)";
        reply = `ราคาปิดปัจจุบันของ <strong>${stock.ticker}</strong> ($${stock.price.toFixed(2)}) เปรียบเทียบกับเส้นเฉลี่ย MA20 ($${lastMA20.toFixed(2)}) จัดว่าอยู่ในช่วง ${trend}`;
      } else {
        reply = `ประวัติราคาของหุ้นสัญญานี้มีจำนวนวันไม่เพียงพอสำหรับการคำนวณเส้นค่าเฉลี่ยค่ะ`;
      }
    }
  } else if (q.includes("ราคา") || q.includes("กี่บาท") || q.includes("กี่ดอล")) {
    if (!stock) {
      reply = `กรุณาคลิกเลือกหุ้นที่หน้าตารางด้านซ้ายก่อนนะคะ หนูถึงจะแจ้งราคาล่าสุดถูกตัวค๊า! 😊`;
    } else {
      reply = `ราคาล่าสุดของหุ้น <strong>${stock.ticker}</strong> ในกระดาษเรดาร์ตอนนี้อยู่ที่ <strong>$${stock.price.toFixed(2)} USD</strong> ค๊า!`;
    }
  } else if (q.includes("ซื้อ") || q.includes("ขาย") || q.includes("เทรด")) {
    reply = `คุณสามารถเทรดจำลองได้ง่ายๆ โดยการกดปุ่ม <strong>Buy Stock</strong> (ซื้อ) หรือ <strong>Sell Stock</strong> (ขาย) ด้านบนกล่องแชทโฮชิเซ็นทางขวาเลยค๊า!`;
  } else if (q.includes("สวัสดี") || q.includes("hi") || q.includes("hello") || q.includes("ดีจ้า") || q.includes("ทักทาย")) {
    reply = `สวัสดีค๊า! หนูโฮชิเซ็นพร้อมช่วยสแกนหาจุดกลับตัวและจุดเข้าช้อนซื้อขายหุ้นยอดฮิตแล้วค๊า มีคำถามอะไรพิมพ์ถามได้เลยน๊า 🦊✨`;
  } else if (q.includes("รัก") || q.includes("น่ารัก") || q.includes("ชอบ")) {
    reply = `เขินจังค๊า! ขอบคุณมากๆ นะคะ หนูโฮชิเซ็นจะสแกนหาตัวจี๊ดๆ แนะนำให้อีกบ่อยๆ ค๊า! 🦊💖`;
  } else {
    if (stock) {
      reply = `วิเคราะห์ด่วนสำหรับ <strong>${stock.ticker}</strong>: คุณภาพงบ ${stock.quality}/100, RSI อยู่ที่ ${calculateRSI(stock.prices)}, ระดับความเสี่ยง ${stock.risk.toUpperCase()}<br>ลองพิมพ์คำเฉพาะ เช่น "แนะนำหุ้น", "RSI", "เส้นเฉลี่ย" หรือทักทายทั่วไปดูนะคะ!`;
    } else {
      reply = `หนูโฮชิเซ็นพร้อมวิเคราะห์ค่ะ! ลองเลือกหุ้นจากตารางสแกน หรือพิมพ์คำเหล่านี้คุยกับหนูดูนะคะ: "แนะนำหุ้น", "RSI", "เส้นเฉลี่ย", "วิธีซื้อขาย" 🦊`;
    }
  }
  
  typeMascotText(reply);
  updateMascotExpression();
}

function updateMascotExpression() {
  const mascotAvatar = document.querySelector(".mascot-avatar");
  if (!mascotAvatar) return;
  
  const stock = stocksDB.find(s => s.ticker === state.selectedTicker);
  
  let holdingsValue = 0;
  Object.keys(userPortfolio.holdings).forEach(ticker => {
    const s = stocksDB.find(st => st.ticker === ticker);
    const price = s ? s.price : 0;
    holdingsValue += userPortfolio.holdings[ticker].shares * price;
  });
  const totalVal = userPortfolio.cashUSD + holdingsValue;
  const startUSD = parseFloat(localStorage.getItem("cozy_starting_cash_usd")) || 100000.00;
  const pnlPct = ((totalVal - startUSD) / startUSD) * 100;
  
  if (pnlPct >= 12) {
    mascotAvatar.textContent = "🦊👑"; // Wealthy/King
  } else if (pnlPct <= -12) {
    mascotAvatar.textContent = "😰💧"; // Panicked/Losing
  } else if (stock) {
    const score = calculateRadarScore(stock);
    if (score > 76) {
      mascotAvatar.textContent = "🦊🔥"; // Bullish/Excited
    } else if (stock.risk === "high") {
      mascotAvatar.textContent = "😰"; // Risky alert
    } else {
      mascotAvatar.textContent = "🦊";
    }
  } else {
    mascotAvatar.textContent = "🦊";
  }
}

// --------------------------------------------------------------------------
// Achievements Stamp Validation & Actions
// --------------------------------------------------------------------------
function checkQuests() {
  let changed = false;
  if (!userPortfolio.quests) {
    userPortfolio.quests = { apprentice: false, deepValue: false, volumeRaider: false, folderCollector: false };
  }
  
  const q = userPortfolio.quests;
  
  // 1. Apprentice: profit >= 10%
  let holdingsValue = 0;
  Object.keys(userPortfolio.holdings).forEach(t => {
    const s = stocksDB.find(st => st.ticker === t);
    holdingsValue += userPortfolio.holdings[t].shares * (s ? s.price : 0);
  });
  const totalVal = userPortfolio.cashUSD + holdingsValue;
  const startUSD = parseFloat(localStorage.getItem("cozy_starting_cash_usd")) || 100000.00;
  const profitPct = ((totalVal - startUSD) / startUSD) * 100;
  
  if (profitPct >= 10 && !q.apprentice) {
    q.apprentice = true;
    changed = true;
    triggerQuestUnlock("questApprentice", "stampApprenticeInk", "🏆 ปลดล็อคความสำเร็จ: หมาป่าฝึกหัด! (พอร์ตสะสมจำลองกำไรเกิน 10% สำเร็จ)");
  }
  
  // 2. Folder Collector: >= 5 unique watchlists items
  const wlTickers = new Set();
  Object.keys(userPortfolio.watchlists).forEach(group => {
    userPortfolio.watchlists[group].forEach(t => wlTickers.add(t));
  });
  
  if (wlTickers.size >= 5 && !q.folderCollector) {
    q.folderCollector = true;
    changed = true;
    triggerQuestUnlock("questFolderCollector", "stampFolderInk", "🏆 ปลดล็อคความสำเร็จ: นักสะสมแฟ้ม! (มีหุ้นใน Watchlist กลุ่มรวมเกิน 5 ตัวสำเร็จ)");
  }
  
  if (changed) {
    savePortfolio();
    renderSecondaryViews();
  }
}

function triggerQuestUnlock(slotId, inkId, message) {
  showToast(message);
  
  setTimeout(() => {
    const ink = document.getElementById(inkId);
    if (ink) {
      ink.classList.remove("locked");
      ink.classList.add("unlocked-anim");
    }
  }, 100);
}

function renderQuests() {
  if (!userPortfolio.quests) {
    userPortfolio.quests = { apprentice: false, deepValue: false, volumeRaider: false, folderCollector: false };
  }
  
  const q = userPortfolio.quests;
  const slots = [
    { id: "stampApprenticeInk", active: q.apprentice },
    { id: "stampDeepValueInk", active: q.deepValue },
    { id: "stampVolumeInk", active: q.volumeRaider },
    { id: "stampFolderInk", active: q.folderCollector }
  ];
  
  slots.forEach(slot => {
    const el = document.getElementById(slot.id);
    if (el) {
      el.classList.toggle("locked", !slot.active);
      el.classList.toggle("unlocked-anim", slot.active);
    }
  });
}

// --------------------------------------------------------------------------
// Newspaper Daily News events configuration & generator
// --------------------------------------------------------------------------
const newsEvents = [
  {
    headline: "กระแสชิป AI ขาดแคลนพุ่งสู่ขั้นวิกฤต!",
    body: "ดาต้าเซ็นเตอร์ทั่วโลกแห่ขยายระบบสั่งประกอบแผงวงจรความเร็วสูง ดันดีมานด์ Semiconductor ทะยาน คาดราคาหุ้นชิปขยับบวกแรง",
    stamp: "HOT NEWS",
    modifiers: { AXTI: 1.15, AEHR: 1.12, NVDA: 1.10, AMD: 1.08 }
  },
  {
    headline: "สงครามการค้าด้านเทคโนโลยีส่อแววคลี่คลาย",
    body: "ผู้นำส่งสัญญาณลดเพดานภาษีศุลกากรนำเข้าเวเฟอร์และแม่พิมพ์ชิปเซ็ต หนุนกลุ่มผู้นำชิปเซมิคอนดักเตอร์พื้นฐานดีรีบาวด์ขึ้นอย่างรวดเร็ว",
    stamp: "STABLE",
    modifiers: { PLAB: 1.08, CRNT: 1.05, SOUN: 1.04 }
  },
  {
    headline: "สลัดอากาศไซเบอร์โจมตีโครงข่ายหน่วยงานรัฐ!",
    body: "หน่วยความมั่นคงสหรัฐฯ ออกรายงานฉุกเฉินด่วน กลุ่มสัญญารัฐและบริษัทวิเคราะห์ซอฟต์แวร์ทหารได้รับความสนใจเข้าเก็งกำไรทันที",
    stamp: "CRITICAL",
    modifiers: { BBAI: 1.18, SOUN: 1.06 }
  },
  {
    headline: "ธนาคารกลางประกาศปรับอัตราดอกเบี้ยนโยบายขึ้น 0.50%",
    body: "เงินเฟ้อขยับตัวทำสถิติ ส่งผลให้เกิดแรงเทขายสลัดสินทรัพย์เสี่ยง กลุ่มเก็งกำไรขนาดเล็กเผชิญหน้าความตึงเครียดด้านเงินทุนหมุนเวียน",
    stamp: "BEAR MARKET",
    modifiers: { SOUN: 0.88, BBAI: 0.84, TSSI: 0.90, KOPN: 0.92 }
  },
  {
    headline: "ยอดความต้องการรถยนต์ไฟฟ้า EV สหรัฐฯ ทรงตัวต่ำกว่าคาด",
    body: "โรงงานผู้รับชิปประหยัดพลังงาน Silicon Carbide ชะลอการสั่งมอบเครื่องจักร ดึงราคาอุปกรณ์ทดสอบชั่วคราว",
    stamp: "SLOWDOWN",
    modifiers: { AEHR: 0.85, TSLA: 0.88 }
  },
  {
    headline: "เม็ดเงินลงทุนวางเครือข่าย AI ดาต้าเซ็นเตอร์ล้นทะลัก",
    body: "คลาวด์คอร์ปอเรชันใหญ่ตกลงเพิ่มวงเงินขยายศูนย์จัดระบบการคำนวณและระบายน้ำเครื่อง หนุนกลุ่มวางระบบเซิร์ฟเวอร์ขนาดกลางเด่น",
    stamp: "BULLISH",
    modifiers: { TSSI: 1.20, AXTI: 1.06 }
  },
  {
    headline: "วิกฤตชายแดนหนุนอุตสาหกรรมโดรนสแกนทหารพุ่ง",
    body: "กลุ่มงบประมาณรัฐสัญญากองทัพประกาศอนุมัติจัดงบรับซอฟต์แวร์สนับสนุนวิเคราะห์ภาพจำลองแนวหน้า ส้มหล่นใส่กลุ่มความเสี่ยงสูงงบเติบโต",
    stamp: "MILITARY",
    modifiers: { BBAI: 1.16, CRNT: 1.07 }
  },
  {
    headline: "สภาวะตลาดการเงินเข้าสู่ช่วงเงียบเหงาปิดปีงบประมาณ",
    body: "ยอดการซื้อขายทรงตัว ตลาดไม่มีทิศทางชัดเจน อยู่ในช่วงแกว่งออกข้างเพื่อสะสมฐานแนวโน้มสำหรับรอบปฏิทินถัดไป",
    stamp: "SIDEWAY",
    modifiers: {} // No modification
  }
];

function triggerDailyNews() {
  const rand = seededRandom(Date.now());
  const idx = Math.floor(rand() * newsEvents.length);
  const active = newsEvents[idx];
  
  els.newsHeadline.textContent = active.headline;
  els.newsBody.textContent = active.body;
  els.newsStamp.textContent = active.stamp;
  
  // Set stamp colors matching context
  const stamp = els.newsStamp;
  if (active.stamp === "HOT NEWS" || active.stamp === "CRITICAL" || active.stamp === "MILITARY") {
    stamp.style.color = "var(--cherry)";
    stamp.style.borderColor = "var(--cherry)";
  } else if (active.stamp === "STABLE" || active.stamp === "BULLISH") {
    stamp.style.color = "var(--olive)";
    stamp.style.borderColor = "var(--olive)";
  } else {
    stamp.style.color = "var(--muted)";
    stamp.style.borderColor = "var(--muted)";
  }
  
  // Apply price multipliers to stocks in database
  if (active.modifiers) {
    Object.keys(active.modifiers).forEach(ticker => {
      const stock = stocksDB.find(s => s.ticker === ticker);
      if (stock) {
        const mult = active.modifiers[ticker];
        stock.price = Number((stock.price * mult).toFixed(2));
        stock.prices[stock.prices.length - 1] = stock.price;
        // Jitter prices array slightly to reflect trend
        for (let i = 20; i < stock.prices.length - 1; i++) {
          stock.prices[i] = Number((stock.prices[i] * (1 + (mult - 1) * 0.4)).toFixed(2));
        }
      }
    });
  }
}

// ==========================================================================
// 9. Simulated Currency Exchange Panel & Wallet
// ==========================================================================
function updateExchangeBalances() {
  els.exThbBalance.textContent = `฿${userPortfolio.cashTHB.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  els.exUsdBalance.textContent = `$${userPortfolio.cashUSD.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function calculateExchange() {
  const isThbToUsd = els.exPayCurr.textContent === "THB";
  const rate = 35.0;
  const payVal = parseFloat(els.exPayInput.value) || 0;
  
  if (isThbToUsd) {
    els.exReceiveInput.value = (payVal / rate).toFixed(2);
  } else {
    els.exReceiveInput.value = (payVal * rate).toFixed(2);
  }
}

function executeExchangeTransaction() {
  const isThbToUsd = els.exPayCurr.textContent === "THB";
  const rate = 35.0;
  const payVal = parseFloat(els.exPayInput.value) || 0;
  
  if (payVal <= 0) {
    showToast("❌ กรุณากรอกจำนวนเงินที่ถูกต้องเพื่อทำการแลกเปลี่ยน!");
    return;
  }
  
  if (isThbToUsd) {
    if (userPortfolio.cashTHB < payVal) {
      showToast("❌ ยอดเงินสด THB จำลองของคุณไม่เพียงพอสำหรับการแลกเปลี่ยน!");
      return;
    }
    const receiveVal = payVal / rate;
    userPortfolio.cashTHB -= payVal;
    userPortfolio.cashUSD += receiveVal;
    addTradeLog("EXCHANGE", "THB -> USD", payVal, 1/rate, receiveVal);
    showToast(`✅ แลกเปลี่ยนเงิน ฿${payVal.toLocaleString()} เป็น $${receiveVal.toLocaleString()} สำเร็จ!`);
  } else {
    if (userPortfolio.cashUSD < payVal) {
      showToast("❌ ยอดเงินสด USD ของคุณไม่เพียงพอสำหรับการแลกเปลี่ยน!");
      return;
    }
    const receiveVal = payVal * rate;
    userPortfolio.cashUSD -= payVal;
    userPortfolio.cashTHB += receiveVal;
    addTradeLog("EXCHANGE", "USD -> THB", payVal, rate, receiveVal);
    showToast(`✅ แลกเปลี่ยนเงิน $${payVal.toLocaleString()} เป็น ฿${receiveVal.toLocaleString()} สำเร็จ!`);
  }
  
  savePortfolio();
  updateExchangeBalances();
  els.exPayInput.value = "";
  els.exReceiveInput.value = "0.00";
}

// ==========================================================================
// 10. UI View Rendering & Screen Adapters
// ==========================================================================
function renderTopbarBalance() {
  let holdingsValue = 0;
  Object.keys(userPortfolio.holdings).forEach(ticker => {
    const stock = stocksDB.find(s => s.ticker === ticker);
    const price = stock ? stock.price : 0;
    holdingsValue += userPortfolio.holdings[ticker].shares * price;
  });
  
  const totalValue = userPortfolio.cashUSD + holdingsValue;
  els.userPortfolioVal.textContent = `$${totalValue.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  
  if (state.activeTab === "portfolio") {
    document.getElementById("portCashVal").textContent = `$${userPortfolio.cashUSD.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    document.getElementById("portStocksVal").textContent = `$${holdingsValue.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    document.getElementById("portTotalVal").textContent = `$${totalValue.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    
    // Calculate overall P/L based on custom starting cash (or default $100k)
    const startUSD = parseFloat(localStorage.getItem("cozy_starting_cash_usd")) || 100000.00;
    const pnl = totalValue - startUSD;
    const pnlPct = (pnl / startUSD) * 100;
    const sign = pnl >= 0 ? "+" : "";
    const color = pnl >= 0 ? "var(--olive)" : "var(--cherry)";
    
    const pnlEl = document.getElementById("portTotalPnl");
    pnlEl.textContent = `${sign}$${pnl.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} (${sign}${pnlPct.toFixed(2)}%)`;
    pnlEl.style.color = color;
  }
}

function renderTable() {
  const filtered = getFilteredStocks();
  const sorted = getSortedStocks(filtered);
  
  const cols = [
    { id: "thTicker", key: "ticker", label: "Ticker" },
    { id: "thMomentum", key: "change", label: "Momentum (1M)" },
    { id: "thVolSurge", key: "volume", label: "Volume Surge" },
    { id: "thQuality", key: "quality", label: "Quality" },
    { id: "thScore", key: "score", label: "Radar Score" },
    { id: "thPrice", key: "price", label: "ราคาล่าสุด" }
  ];
  
  cols.forEach(col => {
    const el = document.getElementById(col.id);
    if (el) {
      let arrow = " ⇅";
      if (state.sortBy === col.key) {
        arrow = state.sortDesc ? " ↓" : " ↑";
      }
      el.textContent = col.label + arrow;
    }
  });

  if (sorted.length === 0) {
    els.stockRows.innerHTML = `
      <tr class="empty-row">
        <td colspan="6" class="empty-state">
          <div class="empty-state-icon">🔍</div>
          <p>ไม่พบหุ้นตามเงื่อนไขตัวกรองเรดาร์ของคุณ</p>
          <p style="font-size: 11px; margin-top: 4px;">ลองปรับคะแนนเรดาร์ขั้นต่ำลง หรือพิมพ์ตัวอักษรค้นหาใหม่นะคะ</p>
        </td>
      </tr>
    `;
    return;
  }
  
  els.stockRows.innerHTML = sorted.map(stock => {
    const score = calculateRadarScore(stock);
    const changePct = getStockChangePercent(stock, 30);
    const badgeClass = stock.quality >= 75 ? "A" : stock.quality >= 55 ? "B" : "C";
    const isActive = stock.ticker === state.selectedTicker ? "class='active'" : "";
    const fireIcon = score > 80 ? "🚀 " : score > 65 ? "🔥 " : "";
    
    return `
      <tr ${isActive} data-ticker="${stock.ticker}">
        <td class="cell-ticker">${stock.ticker}<span class="cell-name">${stock.name}</span></td>
        <td class="cell-val cell-change ${changePct >= 0 ? "positive" : "negative"}">${changePct >= 0 ? "+" : ""}${changePct.toFixed(1)}%</td>
        <td class="cell-val">${stock.volumeSurge.toFixed(1)}x</td>
        <td><span class="cell-badge ${badgeClass}">${badgeClass} (${stock.quality})</span></td>
        <td class="cell-score">${fireIcon}${score}</td>
        <td class="cell-val">$${stock.price.toFixed(2)}</td>
      </tr>
    `;
  }).join("");
  
  els.stockRows.querySelectorAll("tr[data-ticker]").forEach(row => {
    row.addEventListener("click", () => {
      const ticker = row.dataset.ticker;
      selectStock(ticker);
      if (window.innerWidth <= 1024) {
        els.detailPanel.classList.add("active-drawer");
      }
    });
  });
  
  els.sumRadarCount.textContent = filtered.length;
  
  if (filtered.length > 0) {
    const avgQ = Math.round(filtered.reduce((sum, s) => sum + s.quality, 0) / filtered.length);
    els.sumAvgQuality.textContent = `${avgQ}/100`;
    
    const topVol = [...filtered].sort((a,b) => b.volumeSurge - a.volumeSurge)[0];
    els.sumTopVolume.textContent = `${topVol.ticker} (${topVol.volumeSurge.toFixed(1)}x)`;
    
    const topChg = [...filtered].sort((a,b) => getStockChangePercent(b, 30) - getStockChangePercent(a, 30))[0];
    const topChgPct = getStockChangePercent(topChg, 30);
    els.sumTopBreakout.textContent = `${topChg.ticker} (+${topChgPct.toFixed(0)}%)`;
  } else {
    els.sumAvgQuality.textContent = "-";
    els.sumTopVolume.textContent = "-";
    els.sumTopBreakout.textContent = "-";
  }
}

function selectStock(ticker) {
  state.selectedTicker = ticker;
  
  els.stockRows.querySelectorAll("tr").forEach(tr => {
    tr.classList.toggle("active", tr.dataset.ticker === ticker);
  });
  
  const stock = stocksDB.find(s => s.ticker === ticker);
  if (!stock) return;
  
  els.detTicker.textContent = stock.ticker;
  els.detName.textContent = stock.name;
  els.detSector.textContent = `เซกเตอร์: ${stock.sector}`;
  els.detPrice.textContent = `$${stock.price.toFixed(2)} USD`;
  
  const changePct = getStockChangePercent(stock, 30);
  els.detChange.textContent = `${changePct >= 0 ? "+" : ""}${changePct.toFixed(2)}% (1 เดือนที่ผ่านมา)`;
  els.detChange.className = `price-hero-change ${changePct >= 0 ? "positive" : "negative"}`;
  
  els.detMarketCap.textContent = formatMarketCap(stock.marketCapM);
  els.detRadarScore.textContent = calculateRadarScore(stock);
  els.detRsi.textContent = calculateRSI(stock.prices);
  els.detVolSurgeVal.textContent = `${stock.volumeSurge.toFixed(1)}x`;
  els.detGrowth.textContent = `${stock.revenueGrowth > 0 ? "+" : ""}${stock.revenueGrowth}% YoY`;
  els.detDebt.textContent = `${stock.debtRatio ?? 15}%`;
  els.detFloat.textContent = `${stock.floatM}M`;
  els.detRisk.textContent = stock.risk.toUpperCase();
  
  let isSavedInAny = false;
  Object.keys(userPortfolio.watchlists).forEach(group => {
    if (userPortfolio.watchlists[group].includes(ticker)) {
      isSavedInAny = true;
    }
  });
  els.btnToggleWatchlist.classList.toggle("is-saved", isSavedInAny);
  
  askMascot("business");
  updateMascotExpression();
  drawSketchyChart();
  updatePositionBox();
}

function updatePositionBox() {
  const ticker = state.selectedTicker;
  const stock = stocksDB.find(s => s.ticker === ticker);
  if (!stock) return;
  
  const h = userPortfolio.holdings[ticker];
  if (h && h.shares > 0) {
    const avgCost = h.totalCost / h.shares;
    const currentPrice = stock.price;
    const value = h.shares * currentPrice;
    const pnl = value - h.totalCost;
    const pnlPct = (pnl / h.totalCost) * 100;
    
    const sign = pnl >= 0 ? "+" : "";
    const color = pnl >= 0 ? "var(--olive)" : "var(--cherry)";
    
    els.trPositionShares.textContent = `${h.shares.toLocaleString()} Shares`;
    els.trPositionAvg.textContent = `AVG $${avgCost.toFixed(2)}`;
    els.trPositionPnl.textContent = `${sign}$${pnl.toFixed(2)} (${sign}${pnlPct.toFixed(2)}%)`;
    els.trPositionPnl.style.color = color;
  } else {
    els.trPositionShares.textContent = "ยังไม่มีหุ้นตัวนี้";
    els.trPositionAvg.textContent = "AVG —";
    els.trPositionPnl.textContent = "—";
    els.trPositionPnl.style.color = "var(--muted)";
  }
}

// Render Secondary View Content (Watchlist, Portfolio logs etc)
function renderSecondaryViews() {
  if (state.activeTab === "watchlist") {
    els.watchlistContainer.innerHTML = Object.keys(userPortfolio.watchlists).map(groupName => {
      const tickers = userPortfolio.watchlists[groupName];
      
      const rowsHtml = tickers.map(ticker => {
        const stock = stocksDB.find(s => s.ticker === ticker);
        if (!stock) return "";
        const score = calculateRadarScore(stock);
        const changePct = getStockChangePercent(stock, 30);
        return `
          <tr data-wl-ticker="${ticker}">
            <td class="cell-ticker">${stock.ticker}</td>
            <td class="cell-val cell-change ${changePct >= 0 ? "positive" : "negative"}">${changePct >= 0 ? "+" : ""}${changePct.toFixed(1)}%</td>
            <td class="cell-val">${stock.volumeSurge.toFixed(1)}x</td>
            <td class="cell-score">${score}</td>
            <td class="cell-val">$${stock.price.toFixed(2)}</td>
            <td style="text-align: center;">
              <button class="btn-extrude maple" data-remove-wl="${ticker}" data-group="${groupName}" style="padding: 4px 8px; font-size: 10px; border-radius: 6px !important;">ลบ</button>
            </td>
          </tr>
        `;
      }).join("");
      
      return `
        <div class="watchlist-group-card">
          <div class="watchlist-group-header">
            <h3 class="watchlist-group-title">📂 ${groupName}</h3>
            <span class="sync-meta-label">${tickers.length} หุ้นในกลุ่ม</span>
          </div>
          <div class="table-wrap">
            <table class="stock-table">
              <thead>
                <tr>
                  <th>Ticker</th>
                  <th>โมเมนตัม</th>
                  <th>Vol Surge</th>
                  <th>Score</th>
                  <th>ราคา</th>
                  <th style="width: 60px;">ลบออก</th>
                </tr>
              </thead>
              <tbody>
                ${rowsHtml || '<tr><td colspan="6" style="text-align: center; color: var(--muted); padding: 20px;">ไม่มีหุ้นในกลุ่มนี้</td></tr>'}
              </tbody>
            </table>
          </div>
        </div>
      `;
    }).join("");
    
    // Attach listeners for watchlists table clicking
    els.watchlistContainer.querySelectorAll("tr[data-wl-ticker]").forEach(row => {
      row.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") return;
        const ticker = row.dataset.wlTicker || row.getAttribute("data-wl-ticker");
        switchTab("scanner");
        selectStock(ticker);
      });
    });
    
    // Watchlist item remove triggers
    els.watchlistContainer.querySelectorAll("button[data-remove-wl]").forEach(btn => {
      btn.addEventListener("click", () => {
        const ticker = btn.dataset.removeWl;
        const group = btn.dataset.group;
        userPortfolio.watchlists[group] = userPortfolio.watchlists[group].filter(t => t !== ticker);
        savePortfolio();
        checkQuests();
        renderSecondaryViews();
        selectStock(state.selectedTicker); // refresh heart state
        showToast(`🗑️ ลบ ${ticker} ออกจากกลุ่ม ${group} เรียบร้อย!`);
      });
    });
  }
  
  if (state.activeTab === "portfolio") {
    // Render Owned Shares
    const ownedTickers = Object.keys(userPortfolio.holdings);
    
    if (ownedTickers.length === 0) {
      els.portfolioRows.innerHTML = `
        <tr>
          <td colspan="6" style="text-align: center; color: var(--muted); padding: 40px;">
            <div style="font-size: 24px; margin-bottom: 8px;">💼</div>
            คุณยังไม่มีหุ้นในพอร์ตโฟลิโอจำลองเลยค่ะ
            <p style="font-size: 11px; margin-top: 4px;">กลับไปที่ตารางแสกนเรดาร์ แล้วกด Buy Stock เพื่อเทรดได้นะคะ!</p>
          </td>
        </tr>
      `;
    } else {
      els.portfolioRows.innerHTML = ownedTickers.map(ticker => {
        const stock = stocksDB.find(s => s.ticker === ticker);
        if (!stock) return "";
        
        const h = userPortfolio.holdings[ticker];
        const currentPrice = stock.price;
        const avgCost = h.totalCost / h.shares;
        const value = h.shares * currentPrice;
        const pnl = value - h.totalCost;
        const pnlPct = (pnl / h.totalCost) * 100;
        const sign = pnl >= 0 ? "+" : "";
        const color = pnl >= 0 ? "positive" : "negative";
        
        return `
          <tr data-port-ticker="${ticker}">
            <td class="cell-ticker">${ticker}</td>
            <td class="cell-val">${h.shares.toLocaleString()}</td>
            <td class="cell-val">$${avgCost.toFixed(2)}</td>
            <td class="cell-val">$${currentPrice.toFixed(2)}</td>
            <td class="cell-val">$${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
            <td class="cell-val cell-change ${color}">${sign}$${pnl.toFixed(2)} (${sign}${pnlPct.toFixed(2)}%)</td>
          </tr>
        `;
      }).join("");
      
      els.portfolioRows.querySelectorAll("tr[data-port-ticker]").forEach(row => {
        row.addEventListener("click", () => {
          const ticker = row.dataset.portTicker;
          switchTab("scanner");
          selectStock(ticker);
        });
      });
    }
    
    // Render Order history logs
    if (userPortfolio.logs.length === 0) {
      els.tradeLogRows.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--muted); padding: 20px;">ไม่มีบันทึกประวัติธุรกรรม</td></tr>`;
    } else {
      els.tradeLogRows.innerHTML = userPortfolio.logs.map(log => {
        return `
          <tr>
            <td style="font-size: 11px; color: var(--muted);">${log.time}</td>
            <td class="cell-ticker">${log.ticker}</td>
            <td><span class="cell-badge ${log.action === "BUY" ? "A" : log.action === "SELL" ? "C" : "B"}">${log.action}</span></td>
            <td class="cell-val">${log.qty ? log.qty.toLocaleString() : "-"}</td>
            <td class="cell-val">${log.price ? `$${log.price.toFixed(2)}` : "-"}</td>
            <td class="cell-val">$${log.total.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
          </tr>
        `;
      }).join("");
    }
    renderQuests();
  }

  if (state.activeTab === "leaderboard") {
    const mockPlayers = [
      { name: "🐋 Whale_Watcher", value: 145200.00, avatar: "🐋" },
      { name: "⚡ HoshiSen_AI", value: 124500.00, avatar: "🦊" },
      { name: "👑 Paper_King", value: 108300.00, avatar: "👑" },
      { name: "🎮 Neet_Trader_99", value: 94800.00, avatar: "🎮" }
    ];
    
    let holdingsValue = 0;
    Object.keys(userPortfolio.holdings).forEach(t => {
      const s = stocksDB.find(stock => stock.ticker === t);
      holdingsValue += userPortfolio.holdings[t].shares * (s ? s.price : 0);
    });
    const userTotal = userPortfolio.cashUSD + holdingsValue;
    mockPlayers.push({ name: "⭐ คุณ (You)", value: userTotal, avatar: "👤", isUser: true });
    
    mockPlayers.sort((a,b) => b.value - a.value);
    
    els.leaderboardList.innerHTML = mockPlayers.map((player, index) => {
      const isUserClass = player.isUser ? "style='border: 2px solid var(--text); background: var(--bg-soft);'" : "";
      return `
        <div class="leaderboard-row rank-${index + 1}" ${isUserClass}>
          <span class="leaderboard-rank">${index + 1}</span>
          <div class="leaderboard-avatar">${player.avatar}</div>
          <span class="leaderboard-name">${player.name}</span>
          <span class="leaderboard-val">$${player.value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        </div>
      `;
    }).join("");
  }
}

function switchTab(tabId) {
  state.activeTab = tabId;
  
  const panels = ["Scanner", "Watchlists", "Portfolio", "Leaderboard", "Exchange"];
  panels.forEach(p => {
    const el = document.getElementById(`view${p}`);
    if (el) el.classList.toggle("active", p.toLowerCase() === tabId);
  });
  
  document.querySelectorAll(".bottom-nav-item").forEach(item => {
    item.classList.toggle("active", item.dataset.tab === tabId);
  });
  
  if (tabId === "scanner") {
    els.feedTitle.textContent = "เรดาร์สแกนหุ้นโมเมนตัม";
    els.feedSubtitle.textContent = "US Small-Cap & AI Momentum Screener";
  } else if (tabId === "watchlist") {
    els.feedTitle.textContent = "กลุ่ม Watchlist ของฉัน";
    els.feedSubtitle.textContent = "จัดกลุ่มบันทึกสังเกตการณ์หุ้นคนละเซกเตอร์";
  } else if (tabId === "portfolio") {
    els.feedTitle.textContent = "บัญชีพอร์ตโฟลิโอจำลอง";
    els.feedSubtitle.textContent = "สถิติการลงทุนและผลงาน P/L รวม";
  } else if (tabId === "leaderboard") {
    els.feedTitle.textContent = "อันดับยอดนักลงทุน";
    els.feedSubtitle.textContent = "ประชันมูลค่าพอร์ตสูงสุดระหว่างเทรดเดอร์ใน INVESTNEET";
  } else if (tabId === "exchange") {
    els.feedTitle.textContent = "ระบบแลกเปลี่ยนและตั้งค่า";
    els.feedSubtitle.textContent = "บริการเงินสดและตั้งค่าพอร์ตเริ่มต้นจำลอง";
  }
  
  renderSecondaryViews();
  renderTopbarBalance();
}

// ==========================================================================
// 11. Sync / Live Yahoo Finance Database Update
// ==========================================================================
function updateMockStock(stock) {
  const rand = seededRandom(stock.name.length + Date.now());
  const change = 0.985 + rand() * 0.03;
  stock.price = Number((stock.price * change).toFixed(2));
  stock.prices.push(stock.price);
  stock.prices.shift();
  
  if (stock.opens && stock.opens.length > 0) {
    const open = stock.price * (0.99 + rand() * 0.02);
    const high = Math.max(open, stock.price) * (1 + rand() * 0.015);
    const low = Math.min(open, stock.price) * (1 - rand() * 0.015);
    stock.opens.push(Number(open.toFixed(2)));
    stock.opens.shift();
    stock.highs.push(Number(high.toFixed(2)));
    stock.highs.shift();
    stock.lows.push(Number(low.toFixed(2)));
    stock.lows.shift();
  }
  
  if (stock.volumes && stock.volumes.length > 0) {
    const lastVol = stock.volumes[stock.volumes.length - 1] || 1.0;
    const vol = Math.max(0.1, lastVol * (0.8 + rand() * 0.4));
    stock.volumes.push(Number(vol.toFixed(2)));
    stock.volumes.shift();
  }
}

// ==========================================================================
// 11. Sync / Live Yahoo Finance Database Update
// ==========================================================================
async function simulateDatabaseUpdate() {
  if (state.syncing) return;
  state.syncing = true;
  
  els.btnUpdateData.disabled = true;
  els.btnUpdateData.textContent = "⏳ กำลังดึงราคาสด...";
  els.syncStatus.textContent = "กำลังเชื่อมต่อ API และสแกนข้อมูลจริงในตลาดแบบขนาน...";
  els.syncProgress.style.width = "30%";
  
  const total = stocksDB.length;
  const realStocks = stocksDB.filter(s => s.isReal);
  const mockStocks = stocksDB.filter(s => !s.isReal);
  
  // Update mock stocks instantly
  mockStocks.forEach(updateMockStock);
  
  let successCount = mockStocks.length;
  els.syncProgress.style.width = "65%";
  
  // Query Yahoo for all real stocks in parallel
  const fetchPromises = realStocks.map(async (stock) => {
    try {
      const updated = await queryStockFromYahoo(stock.ticker, "1y");
      Object.assign(stock, updated);
      successCount++;
    } catch (err) {
      console.warn(`Failed updating ${stock.ticker}`, err);
      updateMockStock(stock);
      successCount++;
    }
  });
  
  await Promise.allSettled(fetchPromises);
  
  els.syncProgress.style.width = "100%";
  state.syncing = false;
  els.btnUpdateData.disabled = false;
  els.btnUpdateData.textContent = "🔄 อัพเดทข้อมูลเรดาร์ (Yahoo)";
  els.syncStatus.textContent = `สแกนข้อมูลเสร็จเรียบร้อย! อัปเดตข้อมูลจริงและจำลองสำเร็จ ${successCount}/${total} หุ้น`;
  showToast(`⚡ อัปเดตข้อมูลราคาสดตลาดสหรัฐฯ สำเร็จเรียบร้อย!`);
  
  renderTable();
  selectStock(state.selectedTicker);
  renderTopbarBalance();
  triggerDailyNews();
  checkQuests();
}

// Show Toast alerts
let toastTimeout;
function showToast(message) {
  els.toastContainer.textContent = message;
  els.toastContainer.classList.add("show");
  
  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    els.toastContainer.classList.remove("show");
  }, 3500);
}

// ==========================================================================
// 12. Event Listener Setup
// ==========================================================================
function setupEventListeners() {
  // 1. Sidebar inputs
  els.searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    renderTable();
  });
  
  els.searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      searchAndAddStock(els.searchInput.value);
    }
  });
  
  // Segmented market cap buttons
  els.capFilters.querySelectorAll(".filter-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      els.capFilters.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      state.capFilter = btn.dataset.cap;
      renderTable();
    });
  });
  
  // Slider threshold
  els.scoreThreshold.addEventListener("input", (e) => {
    const val = parseInt(e.target.value);
    state.scoreThreshold = val;
    els.scoreThresholdVal.textContent = val;
    
    const pct = ((val - 10) / (95 - 10)) * 100;
    els.scoreThreshold.style.background = `linear-gradient(to right, var(--pink) ${pct}%, var(--line) ${pct}%)`;
    
    renderTable();
  });
  
  els.qualityOnly.addEventListener("change", (e) => {
    state.qualityOnly = e.target.checked;
    renderTable();
  });
  
  els.volumeSurgeFilter.addEventListener("change", (e) => {
    state.volumeSurgeOnly = e.target.checked;
    renderTable();
  });
  
  els.btnUpdateData.addEventListener("click", simulateDatabaseUpdate);
  
  // 2. Table Sorting click handlers
  document.getElementById("thTicker").addEventListener("click", () => toggleSort("ticker"));
  document.getElementById("thMomentum").addEventListener("click", () => toggleSort("change"));
  document.getElementById("thVolSurge").addEventListener("click", () => toggleSort("volume"));
  document.getElementById("thQuality").addEventListener("click", () => toggleSort("quality"));
  document.getElementById("thScore").addEventListener("click", () => toggleSort("score"));
  document.getElementById("thPrice").addEventListener("click", () => toggleSort("price"));
  
  function toggleSort(colKey) {
    if (state.sortBy === colKey) {
      state.sortDesc = !state.sortDesc;
    } else {
      state.sortBy = colKey;
      state.sortDesc = true;
    }
    renderTable();
  }

  // 3. Tab switching & Bottom Nav
  document.querySelectorAll(".bottom-nav-item").forEach(item => {
    item.addEventListener("click", () => {
      switchTab(item.dataset.tab);
    });
  });
  
  els.agendaNoteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    switchTab("portfolio");
  });
  
  // 4. Chart type & range tabs
  els.chartTypeTabs.querySelectorAll(".chart-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      els.chartTypeTabs.querySelectorAll(".chart-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      state.chartType = tab.dataset.type;
      drawSketchyChart();
    });
  });
  
  els.chartRangeTabs.querySelectorAll(".chart-range-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      els.chartRangeTabs.querySelectorAll(".chart-range-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.chartRange = btn.dataset.range;
      drawSketchyChart();
    });
  });
  
  // Indicators Checkboxes (MA20 / MA50)
  document.getElementById("toggleMA20")?.addEventListener("change", drawSketchyChart);
  document.getElementById("toggleMA50")?.addEventListener("change", drawSketchyChart);
  
  // 5. Watchlist Modal & picker
  els.btnToggleWatchlist.addEventListener("click", () => {
    const ticker = state.selectedTicker;
    els.wlModalTicker.textContent = ticker;
    
    els.watchlistChecklist.innerHTML = Object.keys(userPortfolio.watchlists).map(groupName => {
      const isChecked = userPortfolio.watchlists[groupName].includes(ticker) ? "checked" : "";
      return `
        <label class="checklist-row">
          <span class="name">${groupName}</span>
          <input type="checkbox" data-group="${groupName}" ${isChecked}>
        </label>
      `;
    }).join("");
    
    els.watchlistModal.classList.add("active");
  });
  
  els.btnWlCancel.addEventListener("click", () => {
    els.watchlistModal.classList.remove("active");
  });
  
  els.btnWlConfirm.addEventListener("click", () => {
    const ticker = state.selectedTicker;
    els.watchlistChecklist.querySelectorAll("input[type='checkbox']").forEach(chk => {
      const groupName = chk.dataset.group;
      const isChecked = chk.checked;
      const alreadyHas = userPortfolio.watchlists[groupName].includes(ticker);
      
      if (isChecked && !alreadyHas) {
        userPortfolio.watchlists[groupName].push(ticker);
      } else if (!isChecked && alreadyHas) {
        userPortfolio.watchlists[groupName] = userPortfolio.watchlists[groupName].filter(t => t !== ticker);
      }
    });
    
    savePortfolio();
    checkQuests();
    els.watchlistModal.classList.remove("active");
    selectStock(ticker);
    renderSecondaryViews();
  });
  
  // 6. Buying / Selling Order Modals
  els.btnOrderBuy.addEventListener("click", () => openOrderModal("BUY"));
  els.btnOrderSell.addEventListener("click", () => openOrderModal("SELL"));
  
  function openOrderModal(side) {
    const ticker = state.selectedTicker;
    const stock = stocksDB.find(s => s.ticker === ticker);
    if (!stock) return;
    
    els.ordModalTitle.textContent = side === "BUY" ? "ทำรายการสั่งซื้อหุ้น" : "ทำรายการสั่งขายหุ้น";
    els.ordModalTicker.textContent = ticker;
    els.ordModalPrice.textContent = `$${stock.price.toFixed(2)}`;
    els.ordModalCash.textContent = `$${userPortfolio.cashUSD.toLocaleString("en-US", { minimumFractionDigits: 2 })}`;
    
    els.ordQuantityInput.value = "100";
    calculateOrderTotal();
    
    els.btnOrdConfirm.dataset.side = side;
    els.btnOrdConfirm.textContent = side === "BUY" ? "ยืนยันส่งคำสั่งซื้อ" : "ยืนยันส่งคำสั่งขาย";
    els.orderModal.classList.add("active");
  }
  
  function calculateOrderTotal() {
    const qty = parseInt(els.ordQuantityInput.value) || 0;
    const ticker = state.selectedTicker;
    const stock = stocksDB.find(s => s.ticker === ticker);
    const price = stock ? stock.price : 0;
    
    els.ordModalTotal.textContent = `$${(qty * price).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
  
  els.ordQuantityInput.addEventListener("input", calculateOrderTotal);
  
  els.btnOrdCancel.addEventListener("click", () => {
    els.orderModal.classList.remove("active");
  });
  
  els.btnOrdConfirm.addEventListener("click", () => {
    const side = els.btnOrdConfirm.dataset.side;
    const ticker = state.selectedTicker;
    const stock = stocksDB.find(s => s.ticker === ticker);
    const price = stock ? stock.price : 0;
    const qty = parseInt(els.ordQuantityInput.value) || 0;
    
    if (qty <= 0) {
      showToast("❌ กรุณากรอกจำนวนหุ้นที่ถูกต้อง!");
      return;
    }
    
    let ok = false;
    if (side === "BUY") {
      ok = executeBuy(ticker, qty, price);
    } else {
      ok = executeSell(ticker, qty, price);
    }
    
    if (ok) {
      els.orderModal.classList.remove("active");
      updatePositionBox();
      renderTopbarBalance();
    }
  });
  
  // 7. AI Mascot ask buttons
  document.querySelectorAll(".mascot-ask-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const askTopic = btn.dataset.ask;
      askMascot(askTopic);
    });
  });
  
  // 8. Currency exchanger
  els.exPayInput.addEventListener("input", calculateExchange);
  els.btnSwapCurrency.addEventListener("click", () => {
    const payCurr = els.exPayCurr.textContent;
    const recCurr = els.exReceiveCurr.textContent;
    
    els.exPayCurr.textContent = recCurr;
    els.exReceiveCurr.textContent = payCurr;
    
    const isThbToUsd = recCurr === "THB";
    els.exchangeRateText.textContent = isThbToUsd
      ? "อัตราแลกเปลี่ยนปัจจุบัน: 1 USD ≈ 35.00 THB (ไม่มีค่าธรรมเนียม)"
      : "อัตราแลกเปลี่ยนปัจจุบัน: 35.00 THB ≈ 1 USD (ไม่มีค่าธรรมเนียม)";
      
    calculateExchange();
  });
  
  els.btnExecuteExchange.addEventListener("click", executeExchangeTransaction);
  
  els.btnClearHistory.addEventListener("click", () => {
    if (confirm("คุณแน่ใจหรือไม่ที่จะล้างประวัติธุรกรรมซื้อขายทั้งหมดจำลองของคุณ?")) {
      userPortfolio.logs = [];
      savePortfolio();
      renderSecondaryViews();
      showToast("🗑️ ล้างประวัติธุรกรรมเรียบร้อย!");
    }
  });
  
  // Settings Config Controls
  document.getElementById("btnApplySettings")?.addEventListener("click", () => {
    const cash = parseFloat(document.getElementById("settingsStartingCash").value) || 100000;
    localStorage.setItem("cozy_starting_cash_usd", cash.toString());
    userPortfolio.cashUSD = cash;
    savePortfolio();
    renderSecondaryViews();
    renderTopbarBalance();
    showToast(`⚙️ อัปเดตทุนเริ่มต้น USD เป็น $${cash.toLocaleString()} เรียบร้อย!`);
  });
  
  document.getElementById("btnResetAllData")?.addEventListener("click", () => {
    if (confirm("คุณแน่ใจที่จะล้างบัญชีและเริ่มเล่นใหม่? ประวัติและหุ้นที่ซื้อจะหายทั้งหมด!")) {
      const startUSD = parseFloat(document.getElementById("settingsStartingCash").value) || 100000;
      userPortfolio.cashUSD = startUSD;
      userPortfolio.cashTHB = 1000000.00;
      userPortfolio.holdings = {};
      userPortfolio.logs = [];
      savePortfolio();
      renderSecondaryViews();
      renderTopbarBalance();
      showToast("🗑️ ล้างข้อมูลเริ่มเล่นใหม่เรียบร้อย!");
    }
  });
  
  // 9. Mobile drawer triggers (Sidebar & details)
  els.brandLink.addEventListener("click", (e) => {
    e.preventDefault();
    if (window.innerWidth <= 768) {
      els.sidebarPanel.classList.toggle("active-drawer");
    } else {
      switchTab("scanner");
    }
  });
  
  els.detailPanel.addEventListener("click", (e) => {
    if (window.innerWidth <= 1024 && e.target.closest(".detail-header")) {
      els.detailPanel.classList.remove("active-drawer");
    }
  });

  // 10. Technical Presets Filters Click handler
  els.techFilters.querySelectorAll(".filter-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      els.techFilters.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      state.techFilter = btn.dataset.tech;
      renderTable();
    });
  });

  // 11. Mascot Chat Form Submit Handler
  els.mascotChatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = els.mascotChatInput.value.trim();
    if (!text) return;
    els.mascotChatInput.value = "";
    handleMascotChat(text);
  });

  // 12. Chart Drawing Toolbar listeners
  els.drawPenBtn.addEventListener("click", () => selectDrawMode("pen", els.drawPenBtn));
  els.drawMarkerBtn.addEventListener("click", () => selectDrawMode("marker", els.drawMarkerBtn));
  els.drawEraserBtn.addEventListener("click", () => selectDrawMode("eraser", els.drawEraserBtn));
  els.drawClearBtn.addEventListener("click", () => {
    if (confirm("คุณแน่ใจที่จะล้างภาพวาดโน้ตทั้งหมดบนหุ้นตัวนี้?")) {
      state.annotations[state.selectedTicker] = [];
      saveAnnotations();
      drawSketchyChart();
      showToast("🗑️ ล้างรูปวาดบนกราฟเรียบร้อย!");
    }
  });

  function selectDrawMode(mode, btn) {
    const canvas = els.chartCanvas;
    const isActive = btn.classList.contains("active");
    
    // Reset all buttons and canvas cursors
    els.drawPenBtn.classList.remove("active");
    els.drawMarkerBtn.classList.remove("active");
    els.drawEraserBtn.classList.remove("active");
    canvas.classList.remove("pen-active", "marker-active", "eraser-active");
    
    if (isActive) {
      state.drawMode = null;
    } else {
      state.drawMode = mode;
      btn.classList.add("active");
      canvas.classList.add(`${mode}-active`);
      showToast(`✍️ โหมดวาดโน้ต: ${mode === "pen" ? "ปากกาจดข้อมูล" : mode === "marker" ? "ไฮไลเตอร์เน้นสีเขียว" : "ยางลบสัมผัสลบเส้น"}`);
    }
  }
}

// ==========================================================================
// 12. Application Initialization
// ==========================================================================
async function init() {
  loadPortfolio();
  
  // Sync Custom Starting cash
  const startUSD = localStorage.getItem("cozy_starting_cash_usd");
  if (startUSD) {
    document.getElementById("settingsStartingCash").value = startUSD;
  }
  
  const slider = els.scoreThreshold;
  const fillPct = ((slider.value - 10) / (95 - 10)) * 100;
  slider.style.background = `linear-gradient(to right, var(--pink) ${fillPct}%, var(--line) ${fillPct}%)`;
  
  els.dbCountText.textContent = `${stocksDB.length} หุ้น`;
  
  setupEventListeners();
  setupChartHover();
  setupDrawingListeners();
  loadAnnotations();
  renderQuests();
  checkQuests();
  
  // Try to load real stock quote values for the base 8 stocks asynchronously
  setTimeout(async () => {
    const isLocalServer = window.location.origin.includes("localhost") || window.location.origin.includes("127.0.0.1") || window.location.port === "8000";
    if (isLocalServer) {
      els.marketPulseText.textContent = "เชื่อมต่อ Proxy ดึงราคาสดจาก Yahoo";
      els.marketDot.style.background = "var(--lime)";
    }
    
    // Load top real stocks on database init
    const initialRealTickers = ["AAPL", "NVDA", "TSLA", "AMD", "MSFT", "AMZN", "GOOGL", "NFLX"];
    
    // Swap mocks with real stock quotes
    for (let i = 0; i < Math.min(initialRealTickers.length, stocksDB.length); i++) {
      try {
        const realStock = await queryStockFromYahoo(initialRealTickers[i], "1y");
        realStock.isReal = true;
        stocksDB[i] = realStock;
      } catch (err) {
        console.warn(`Could not load real data for ${initialRealTickers[i]} on init`);
      }
    }
    
    renderTable();
    selectStock(state.selectedTicker);
  }, 100);
  
  renderTable();
  selectStock(state.selectedTicker);
  switchTab("scanner");
  updateExchangeBalances();
  
  const greetings = mascotDialogues.welcome;
  const welcomeText = greetings[Math.floor(Math.random() * greetings.length)];
  typeMascotText(welcomeText);
}

// Start App
window.addEventListener("DOMContentLoaded", init);
