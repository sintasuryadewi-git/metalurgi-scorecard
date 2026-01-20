'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { Activity, AlertTriangle, CheckCircle, XCircle, ChevronRight, FileSpreadsheet, Copy, ArrowRight, PlayCircle, MessageSquare } from 'lucide-react';

// --- KOMPONEN 1: PANDUAN PENGISIAN (ONBOARDING MODE) ---
// Muncul jika user belum punya data (klik dari Homepage)
function OnboardingView() {
  const SHEET_URL = "https://docs.google.com/spreadsheets/d/15viCWSphO82p8FQxXR7goZ1D8EW5Mef1L1xJaMWgB1Q/edit?usp=sharing";
  
  // Trik Google Sheets: Ganti /edit jadi /copy agar user dipaksa bikin copy-an
  const COPY_URL = SHEET_URL.replace('/edit?usp=sharing', '/copy');

  return (
    <main className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 md:p-12 font-sans">
      <div className="max-w-3xl w-full space-y-8 text-center">
        
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/50 border border-blue-500 text-blue-300 text-sm font-bold">
            <Activity className="w-4 h-4" />
            Langkah 1 dari 2: Input Data
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Diagnosa Bisnis Anda <br/> <span className="text-blue-500">Dimulai Dari Sini.</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Sistem kami membutuhkan data keuangan & operasional riil Anda untuk memberikan diagnosa akurat. Kami menggunakan <strong>Google Sheets</strong> agar Anda bisa input data dengan cepat & aman.
          </p>
        </div>

        {/* Card Steps */}
        <div className="bg-white text-slate-900 rounded-2xl p-8 shadow-2xl text-left space-y-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-green-500"></div>
          
          <h3 className="text-xl font-bold border-b pb-4 mb-4">Ikuti 3 Langkah Mudah Ini:</h3>

          {/* Step 1 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">1</div>
            <div>
              <h4 className="font-bold text-lg">Buka Template Scorecard</h4>
              <p className="text-slate-600 text-sm mt-1">
                Klik tombol di bawah untuk membuka file Google Sheets Master kami.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4">
             <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">2</div>
            <div>
              <h4 className="font-bold text-lg">Buat Salinan (Make a Copy)</h4>
              <p className="text-slate-600 text-sm mt-1">
                File tersebut "View Only". Anda harus menyalinnya ke Google Drive Anda sendiri agar bisa diedit.
                <br/><span className="italic text-slate-500">(Menu: File &rarr; Make a copy)</span>
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-4">
             <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">3</div>
            <div>
              <h4 className="font-bold text-lg">Isi Data & Klik "Magic Button"</h4>
              <p className="text-slate-600 text-sm mt-1">
                Isi kolom berwarna KUNING. Setelah selesai, klik tombol biru besar di dalam Excel tersebut untuk kembali ke sini dan melihat hasil diagnosa Anda.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <a 
              href={COPY_URL} // Mengarahkan langsung ke Copy mode
              target="_blank"
              className="group w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl py-5 px-6 rounded-xl shadow-lg transition-all transform hover:scale-[1.02]"
            >
              <FileSpreadsheet className="w-6 h-6" />
              <span>Buka Google Sheets Template</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-center text-xs text-slate-400 mt-3">
              *Tips: Gunakan Laptop/PC untuk kenyamanan pengisian data.
            </p>
          </div>

        </div>

        {/* Footer Link */}
        <p className="text-sm text-slate-500">
            Sudah mengisi tapi lupa klik tombol? <br/>
            Buka kembali file Google Sheets di Drive Anda dan cari tombol "Lihat Hasil Diagnosa".
        </p>

      </div>
    </main>
  );
}


// --- KOMPONEN 2: DASHBOARD DIAGNOSA (RESULT MODE) ---
// Muncul jika data tersedia di URL
function DashboardView({ searchParams }: { searchParams: URLSearchParams }) {
  
  // 1. TANGKAP DATA (PARSING)
  const kas = Number(searchParams.get('kas') || 0);
  const opex = Number(searchParams.get('opex') || 0);
  const pisahRekening = searchParams.get('pisah') === 'true';
  
  const omzet = Number(searchParams.get('omzet') || 0);
  const hpp = Number(searchParams.get('hpp') || 0);
  const validHpp = searchParams.get('validhpp') === 'true';
  
  const stok = Number(searchParams.get('stok') || 0);
  const piutang = Number(searchParams.get('piutang') || 0);
  const hutang = Number(searchParams.get('hutang') || 0);

  // 2. THE CFO CALCULATION ENGINE
  
  // A. Burn Rate & Runway
  const monthlyBurn = opex; 
  const runway = monthlyBurn > 0 ? (kas / monthlyBurn).toFixed(1) : '0';
  const runwayNum = Number(runway);

  // B. Gross Margin
  const grossProfit = omzet - hpp;
  const marginPersen = omzet > 0 ? ((grossProfit / omzet) * 100).toFixed(1) : '0';
  const marginNum = Number(marginPersen);

  // C. Inventory Turnover (Estimasi Bulan)
  const stockMonth = hpp > 0 ? (stok / hpp).toFixed(1) : '0';
  const stockMonthNum = Number(stockMonth);

  // 3. SCORING ALGORITHM
  let score = 0;

  // Likuiditas (30%)
  if (runwayNum >= 6) score += 30;
  else if (runwayNum >= 3) score += 15;
  else if (runwayNum >= 1) score += 5;

  // Profitabilitas (25%)
  if (marginNum >= 30) score += 25; 
  else if (marginNum >= 15) score += 10;
  
  // Efisiensi Stok (20%)
  if (stockMonthNum <= 1.5) score += 20; 
  else if (stockMonthNum <= 3) score += 10; 

  // Kesehatan Cashflow (15%)
  if (piutang <= hutang) score += 15; 
  else if (piutang < (hutang * 1.5)) score += 5;

  // Fundamental (10%)
  if (pisahRekening) score += 5;
  if (validHpp) score += 5;

  // 4. AI DIAGNOSIS
  let diagnosisTitle = "";
  let diagnosisText = [];

  if (score >= 80) diagnosisTitle = "BISNIS SEHAT (PRIME) 🟢";
  else if (score >= 50) diagnosisTitle = "WASPADA (WARNING) 🟡";
  else diagnosisTitle = "KRITIS (ICU) 🔴";

  if (runwayNum < 1) diagnosisText.push("⚠️ DARURAT KAS: Sisa napas bisnis kurang dari 1 bulan. Risiko gagal bayar tinggi.");
  else if (runwayNum < 3) diagnosisText.push("⚠️ KAS TIPIS: Posisi kas rentan terhadap guncangan.");
  
  if (!validHpp) diagnosisText.push("❌ BLIND COSTING: HPP tidak valid (belum hitung Waste/Labor). Profit Anda kemungkinan semu.");
  else if (marginNum < 15) diagnosisText.push("📉 MARGIN TIPIS: Margin kotor < 15%. Indikasi inefisiensi produksi atau harga jual terlalu rendah.");
  
  if (stockMonthNum > 3) diagnosisText.push(`📦 OBESITAS STOK: Uang macet di gudang selama ${stockMonth} bulan.`);
  if (!pisahRekening) diagnosisText.push("🚫 REKENING TERCAMPUR: Keuangan pribadi & bisnis harus dipisah segera.");

  const YOUTUBE_VIDEO_ID = "XXXXXXXX"; 

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-20">
      {/* HEADER SCORE */}
      <div className={`${score < 50 ? 'bg-red-700' : score < 80 ? 'bg-yellow-500' : 'bg-green-600'} text-white p-8 md:p-12 text-center`}>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-extrabold uppercase tracking-wide mb-2">{diagnosisTitle}</h1>
          <div className="text-6xl md:text-7xl font-black my-4">{score}<span className="text-3xl font-medium opacity-70">/100</span></div>
          <p className="text-lg opacity-90 font-medium">Vitality Scorecard Result</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6 space-y-8 -mt-8">
        {/* METRICS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-blue-500">
            <p className="text-xs font-bold text-slate-400 uppercase">Runway</p>
            <p className={`text-3xl font-black ${runwayNum < 3 ? 'text-red-600' : 'text-slate-800'}`}>{runway} Bulan</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-purple-500">
            <p className="text-xs font-bold text-slate-400 uppercase">Margin</p>
            <p className={`text-3xl font-black ${marginNum < 15 ? 'text-red-600' : 'text-slate-800'}`}>{marginNum}%</p>
          </div>
           <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-orange-500">
            <p className="text-xs font-bold text-slate-400 uppercase">Umur Stok</p>
            <p className={`text-3xl font-black ${stockMonthNum > 3 ? 'text-red-600' : 'text-slate-800'}`}>{stockMonth} Bln</p>
          </div>
        </div>

        {/* DIAGNOSIS */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
          <div className="bg-slate-100 p-4 border-b border-slate-200 flex items-center gap-3">
            <Activity className="w-5 h-5 text-blue-600" />
            <h2 className="font-bold text-slate-700">Analisis Diagnostik</h2>
          </div>
          <div className="p-6 md:p-8 space-y-4">
            {diagnosisText.map((text, index) => (
              <p key={index} className="text-lg leading-relaxed border-l-4 border-slate-300 pl-4 py-1">{text}</p>
            ))}
            <div className="mt-8 bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h3 className="font-bold text-blue-800 mb-2">Saran Metalurgi:</h3>
              <p className="text-blue-900">
                Skor ini menunjukkan Anda butuh <strong>Business Operating System (BOS)</strong>.
                Jangan biarkan kebocoran ini membesar.
              </p>
            </div>
          </div>
        </div>

        {/* VIDEO & CTA */}
        <div className="bg-black rounded-2xl shadow-xl overflow-hidden aspect-video relative">
           <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0`} title="Intro" allowFullScreen></iframe>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="https://wa.me/6281234567890" target="_blank" className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg">
            <MessageSquare className="w-5 h-5" /> Konsultasi Gratis via WA
          </a>
          <a href="/" className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold py-4 px-6 rounded-xl shadow-lg">
            <ChevronRight className="w-5 h-5" /> Kembali ke Homepage
          </a>
        </div>
      </div>
    </div>
  );
}


// --- MAIN PAGE WRAPPER ---
function ScorecardRouter() {
  const searchParams = useSearchParams();
  
  // CEK LOGIKA UTAMA: Apakah ada data 'kas' atau 'omzet' di URL?
  // Jika ada, berarti user datang dari Excel -> Tampilkan Dashboard
  // Jika tidak ada, berarti user dari Homepage -> Tampilkan Panduan
  const hasData = searchParams.has('kas') || searchParams.has('omzet');

  if (hasData) {
    return <DashboardView searchParams={searchParams} />;
  } else {
    return <OnboardingView />;
  }
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">Loading...</div>}>
      <ScorecardRouter />
    </Suspense>
  );
}