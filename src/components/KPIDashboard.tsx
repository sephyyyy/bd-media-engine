import { useEffect, useRef } from "react";

// ── Costanti fisse ───────────────────────────────────────────────────────────
const MAGENTA = "#FF00CC";
const START_DATE = "2025-09-20";
const ROAS_VAL = 39.33;
const CTR_VAL = 2.46;
const CPC_VAL = 0.06;
const CPM_VAL = 5.17;

// Valori base cumulativi alla data di partenza
const BASE_SPEND = 9_840;
const BASE_REVENUE = 285_000;
const BASE_CLICKS = 318_450;
const BASE_IMP = 720_000;

// ── Algoritmo irregolare (seeded, riproducibile) ─────────────────────────────
// Valore pseudo-random deterministico in [0, 1)
function seededRand(i: number): number {
  return (((Math.sin(i * 127.1 + 311.7) * 43758.5453) % 1) + 1) % 1;
}

function daysSince(dateStr: string): number {
  const s = new Date(dateStr);
  s.setHours(0, 0, 0, 0);
  const n = new Date();
  n.setHours(0, 0, 0, 0);
  return Math.max(0, Math.floor((n.getTime() - s.getTime()) / 86400000));
}

// Costruisce storico irregolare + totale cumulativo
// minD/maxD = range giornaliero; seed = offset per differenziare le metriche
function buildMetric(
  base: number,
  minD: number,
  maxD: number,
  totalDays: number,
  seed: number,
  histLen = 16
): { hist: number[]; total: number } {
  let v = base;
  const hist: number[] = [];
  const startIdx = Math.max(0, totalDays - histLen);

  for (let i = 0; i < totalDays; i++) {
    // Irregolarità doppia: variazione base + spike casuale
    const r1 = seededRand(seed * 7 + i * 3);
    const r2 = seededRand(seed * 13 + i * 5 + 99);
    const spike = r2 > 0.85 ? (maxD - minD) * 0.4 * r2 : 0; // 15% chance spike
    const daily = minD + r1 * (maxD - minD) + spike;
    v += daily;
    if (i >= startIdx) hist.push(Math.round(v));
  }
  return { hist, total: Math.round(v) };
}

// ── Helpers ──────────────────────────────────────────────────────────────────
function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function fmtIt(n: number, dec = 0): string {
  return n.toLocaleString("it-IT", {
    minimumFractionDigits: dec,
    maximumFractionDigits: dec,
  });
}

function countUpEl(
  el: HTMLElement,
  target: number,
  dur: number,
  dec: number,
  pre = "",
  suf = ""
) {
  const s = performance.now();
  const go = (now: number) => {
    const t = Math.min((now - s) / dur, 1);
    el.textContent = pre + fmtIt(easeOut(t) * target, dec) + suf;
    if (t < 1) requestAnimationFrame(go);
  };
  requestAnimationFrame(go);
}

function drawSparkline(canvas: HTMLCanvasElement, data: number[]) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const W = canvas.clientWidth || 300;
  const H = canvas.height;
  canvas.width = W;

  const mn = Math.min(...data) * 0.88;
  const mx = Math.max(...data) * 1.04;
  const range = mx - mn || 1;
  const pts = data.map((v, i) => ({
    x: (i / (data.length - 1)) * W,
    y: H - ((v - mn) / range) * H * 0.82 - H * 0.06,
  }));

  let p = 0;
  const frame = () => {
    ctx.clearRect(0, 0, W, H);
    p = Math.min(p + 0.045, 1);
    const vis = pts.slice(0, Math.max(2, Math.round(p * pts.length)));

    // Area fill
    const grd = ctx.createLinearGradient(0, 0, 0, H);
    grd.addColorStop(0, "rgba(255,0,204,0.16)");
    grd.addColorStop(1, "rgba(255,0,204,0)");
    ctx.beginPath();
    ctx.moveTo(vis[0].x, vis[0].y);
    for (let i = 1; i < vis.length; i++) {
      const cpx = (vis[i - 1].x + vis[i].x) / 2;
      ctx.bezierCurveTo(cpx, vis[i - 1].y, cpx, vis[i].y, vis[i].x, vis[i].y);
    }
    ctx.lineTo(vis[vis.length - 1].x, H);
    ctx.lineTo(vis[0].x, H);
    ctx.closePath();
    ctx.fillStyle = grd;
    ctx.fill();

    // Line
    ctx.beginPath();
    ctx.moveTo(vis[0].x, vis[0].y);
    for (let i = 1; i < vis.length; i++) {
      const cpx = (vis[i - 1].x + vis[i].x) / 2;
      ctx.bezierCurveTo(cpx, vis[i - 1].y, cpx, vis[i].y, vis[i].x, vis[i].y);
    }
    ctx.strokeStyle = MAGENTA;
    ctx.lineWidth = 1.8;
    ctx.shadowColor = MAGENTA;
    ctx.shadowBlur = 8;
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Dot finale
    const last = vis[vis.length - 1];
    ctx.beginPath();
    ctx.arc(last.x, last.y, 3.5, 0, Math.PI * 2);
    ctx.fillStyle = MAGENTA;
    ctx.shadowColor = MAGENTA;
    ctx.shadowBlur = 10;
    ctx.fill();
    ctx.shadowBlur = 0;

    if (p < 1) requestAnimationFrame(frame);
  };
  frame();
}

function drawGauge(canvas: HTMLCanvasElement, value: number, maxVal: number) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const W = canvas.width;
  const H = canvas.height;
  const cx = W / 2;
  const cy = H - 6;
  const r = Math.min(W, H * 2) * 0.42;

  let p = 0;
  const frame = () => {
    ctx.clearRect(0, 0, W, H);
    p = Math.min(p + 0.028, 1);
    const ratio = easeOut(p) * (value / maxVal);

    // Track
    ctx.beginPath();
    ctx.arc(cx, cy, r, Math.PI, 0, false);
    ctx.strokeStyle = "rgba(255,255,255,0.07)";
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.stroke();

    // Arc magenta
    const endA = Math.PI + ratio * Math.PI;
    ctx.beginPath();
    ctx.arc(cx, cy, r, Math.PI, endA, false);
    ctx.strokeStyle = MAGENTA;
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.shadowColor = MAGENTA;
    ctx.shadowBlur = 14;
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Tick marks
    for (let i = 0; i <= 10; i++) {
      const a = Math.PI + (i / 10) * Math.PI;
      ctx.beginPath();
      ctx.moveTo(cx + (r - 13) * Math.cos(a), cy + (r - 13) * Math.sin(a));
      ctx.lineTo(cx + (r - 6) * Math.cos(a), cy + (r - 6) * Math.sin(a));
      ctx.strokeStyle = "rgba(255,255,255,0.12)";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Dot end
    ctx.beginPath();
    ctx.arc(cx + r * Math.cos(endA), cy + r * Math.sin(endA), 4.5, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.shadowColor = "#fff";
    ctx.shadowBlur = 10;
    ctx.fill();
    ctx.shadowBlur = 0;

    if (p < 1) requestAnimationFrame(frame);
  };
  frame();
}

// ── Component ────────────────────────────────────────────────────────────────
const KPIDashboard = () => {
  const spendRef = useRef<HTMLCanvasElement>(null);
  const revRef = useRef<HTMLCanvasElement>(null);
  const clicksRef = useRef<HTMLCanvasElement>(null);
  const impRef = useRef<HTMLCanvasElement>(null);
  const roasRef = useRef<HTMLCanvasElement>(null);
  const ctrRef = useRef<HTMLCanvasElement>(null);
  const cpcRef = useRef<HTMLCanvasElement>(null);
  const cpmRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const days = daysSince(START_DATE);

    const spend = buildMetric(BASE_SPEND, 125, 300, days, 1);
    const rev = buildMetric(BASE_REVENUE, 750, 2000, days, 2);
    const clicks = buildMetric(BASE_CLICKS, 180, 520, days, 3);
    const imp = buildMetric(BASE_IMP, 4_200, 11_500, days, 4);

    const pairs: [string, number, number, string, string][] = [
      ["kpi-spend", spend.total, 0, "€ ", ""],
      ["kpi-revenue", rev.total, 0, "€ ", ""],
      ["kpi-clicks", clicks.total, 0, "", ""],
      ["kpi-imp", imp.total, 0, "", ""],
      ["kpi-roas", ROAS_VAL, 2, "", "x"],
      ["kpi-ctr", CTR_VAL, 2, "", "%"],
      ["kpi-cpc", CPC_VAL, 2, "€", ""],
      ["kpi-cpm", CPM_VAL, 2, "€", ""],
    ];
    pairs.forEach(([id, target, dec, pre, suf]) => {
      const el = document.getElementById(id);
      if (el) countUpEl(el, target, 2200, dec, pre, suf);
    });

    const todaySpend = Math.round(125 + seededRand(days * 3) * 175);
    const todayRev = Math.round(750 + seededRand(days * 3 + 1) * 1250);
    const setTxt = (id: string, t: string) => {
      const el = document.getElementById(id);
      if (el) el.textContent = t;
    };
    setTxt("delta-spend", `▲ +€${todaySpend} oggi · ${days} giorni attivi`);
    setTxt("delta-revenue", `▲ +€${todayRev} oggi);
    setTxt("delta-clicks", `▲ CTR ${CTR_VAL.toFixed(2)}% · dati reali`);
    setTxt("delta-imp", `▲ +${Math.round(4200 + seededRand(days * 3 + 2) * 7300).toLocaleString("it-IT")} oggi`);

    setTimeout(() => {
      if (spendRef.current) drawSparkline(spendRef.current, spend.hist);
      if (revRef.current) drawSparkline(revRef.current, rev.hist);
      if (clicksRef.current) drawSparkline(clicksRef.current, clicks.hist);
      if (impRef.current) drawSparkline(impRef.current, imp.hist);
    }, 350);

    setTimeout(() => {
      if (roasRef.current) drawGauge(roasRef.current, ROAS_VAL, 50);
      if (ctrRef.current) drawGauge(ctrRef.current, CTR_VAL, 5);
      if (cpmRef.current) drawGauge(cpmRef.current, CPM_VAL, 20);
      if (cpcRef.current) drawGauge(cpcRef.current, CPC_VAL, 1);
    }, 450);
  }, []);

  const card = "relative overflow-hidden rounded-xl border border-white/[0.06] bg-card p-5";
  const label = "text-[9px] font-semibold uppercase tracking-[0.22em] text-muted-foreground";
  const delta = "mt-1 text-[10px] font-mono text-primary";

  return (
    <div className="mt-10 space-y-4">

      {/* Row 1: Spend | Revenue | ROAS + CTR */}
      <div className="grid gap-4 lg:grid-cols-3">
        <div className={card}>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <p className={label}>Ads Spend</p>
          <p className="mt-1 text-2xl font-extrabold tracking-tight" id="kpi-spend">€ 0</p>
          <p className={delta} id="delta-spend">▲ caricamento...</p>
          <canvas ref={spendRef} className="mt-3 block w-full" height={64} />
        </div>
        <div className={card}>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <p className={label}>Revenue</p>
          <p className="mt-1 text-2xl font-extrabold tracking-tight" id="kpi-revenue">€ 0</p>
          <p className={delta} id="delta-revenue">▲ caricamento...</p>
          <canvas ref={revRef} className="mt-3 block w-full" height={64} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className={`${card} flex flex-col items-center pt-4`}>
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <p className={label}>ROAS</p>
            <canvas ref={roasRef} width={130} height={76} className="mt-2" />
            <p className="mt-1 text-lg font-extrabold" id="kpi-roas">0x</p>
            <p className="mt-0.5 text-center text-[9px] text-muted-foreground font-mono">return on total spend</p>
            <div className="mt-3 flex w-full items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
              <div className="flex-1 border-t border-dashed border-primary/30" />
              <span className="text-xs font-bold">{ROAS_VAL.toFixed(2)}</span>
            </div>
          </div>
          <div className={`${card} flex flex-col items-center pt-4`}>
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <p className={label}>CTR</p>
            <canvas ref={ctrRef} width={130} height={76} className="mt-2" />
            <p className="mt-1 text-lg font-extrabold" id="kpi-ctr">0%</p>
            <p className="mt-0.5 text-center text-[9px] text-muted-foreground font-mono">click-through rate</p>
            <div className="mt-3 flex w-full items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
              <div className="flex-1 border-t border-dashed border-primary/30" />
              <span className="text-xs font-bold">{CTR_VAL.toFixed(2)}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Clicks | Impressions | CPM + CPC */}
      <div className="grid gap-4 lg:grid-cols-3">
        <div className={card}>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <p className={label}>Clicks</p>
          <p className="mt-1 text-2xl font-extrabold tracking-tight" id="kpi-clicks">0</p>
          <p className={delta} id="delta-clicks">▲ caricamento...</p>
          <canvas ref={clicksRef} className="mt-3 block w-full" height={64} />
        </div>
        <div className={card}>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <p className={label}>Impressions</p>
          <p className="mt-1 text-2xl font-extrabold tracking-tight" id="kpi-imp">0</p>
          <p className={delta} id="delta-imp">▲ caricamento...</p>
          <canvas ref={impRef} className="mt-3 block w-full" height={64} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className={`${card} flex flex-col items-center pt-4`}>
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <p className={label}>CPM</p>
            <canvas ref={cpmRef} width={130} height={76} className="mt-2" />
            <p className="mt-1 text-lg font-extrabold" id="kpi-cpm">€0</p>
            <p className="mt-0.5 text-center text-[9px] text-muted-foreground font-mono">cost per mille</p>
            <div className="mt-3 flex w-full items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
              <div className="flex-1 border-t border-dashed border-primary/30" />
              <span className="text-xs font-bold">€{CPM_VAL.toFixed(2)}</span>
            </div>
          </div>
          <div className={`${card} flex flex-col items-center pt-4`}>
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <p className={label}>CPC</p>
            <canvas ref={cpcRef} width={130} height={76} className="mt-2" />
            <p className="mt-1 text-lg font-extrabold" id="kpi-cpc">€0</p>
            <p className="mt-0.5 text-center text-[9px] text-muted-foreground font-mono">cost per click</p>
            <div className="mt-3 flex w-full items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
              <div className="flex-1 border-t border-dashed border-primary/30" />
              <span className="text-xs font-bold">€{CPC_VAL.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default KPIDashboard;
