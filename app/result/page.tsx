'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import { 
  Activity, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  ChevronRight, 
  FileSpreadsheet, 
  ArrowLeft, 
  Search, 
  Target, 
  BarChart4, 
  ShieldAlert,
  HelpCircle,
  PlayCircle,
  MessageSquare,
  ArrowRight
} from 'lucide-react';

// =================================================================================
// VIEW 1: ONBOARDING MODE (PANDUAN & KONTEKS)
// Muncul jika user belum punya data (URL bersih)
// =================================================================================
function OnboardingView() {
  const SHEET_URL = "https://docs.google.com/spreadsheets/d/15viCWSphO82p8FQxXR7goZ1D8EW5Mef1L1xJaMWgB1Q/edit?usp=sharing";
  
  // Trik Google Sheets: Ganti /edit jadi /copy agar user dipaksa bikin copy-an
  const COPY_URL = SHEET_URL.replace('/edit?usp=sharing', '/copy');

  return (
    <main className="min-h-screen bg-slate-900 text-white font-sans selection:bg-blue-500 selection:text-white">
      
      {/* --- NAVBAR SEDERHANA --- */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md z-50 border-b border-slate-800 h-16 flex items-center px-6">
        <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold">Kembali ke Homepage</span>
        </Link>
      </nav>

      <div className="pt-24 pb-20 px-6 md:px-12 max-w-7xl mx-auto space-y-24">
        
        {/* --- SECTION 1: HERO & ACTION (THE 'HOW') --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/50 border border-blue-500 text-blue-300 text-xs font-bold">
              <Activity className="w-3 h-3" />
              Langkah 1: Input Data
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Sehatkah Jantung <br/> <span className="text-blue-500">Bisnis Anda?</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Jangan menebak-nebak kondisi keuangan. Sistem kami membutuhkan data operasional riil Anda untuk memberikan diagnosa akurat. Gunakan template Excel kami untuk input data yang cepat & aman.
            </p>
            
            {/* Steps Visual */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <div className="text-sm text-slate-300">Download Template Google Sheets</div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <div className="text-sm text-slate-300">Isi Kolom Kuning (Kas, HPP, Stok)</div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <div className="text-sm text-slate-300">Klik Tombol "Lihat Hasil" di Excel</div>
              </div>
            </div>

            <div className="pt-4">
               <a 
                href={COPY_URL} 
                target="_blank"
                className="inline-flex w-full md:w-auto items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg py-4 px-8 rounded-xl shadow-lg shadow-blue-900/20 transition-all transform hover:-translate-y-1"
              >
                <FileSpreadsheet className="w-6 h-6" />
                <span>Buka Template Scorecard</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-xs text-slate-500 mt-3 ml-1">
                *Membutuhkan akun Google (Gmail) untuk akses Sheets.
              </p>
            </div>
          </div>

          {/* Visual Illustration (Right Side) */}
          <div className="relative hidden lg:block">
             <div className="absolute inset-0 bg-blue-500 blur-[100px] opacity-20 rounded-full"></div>
             <div className="relative bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-2xl rotate-2 hover:rotate-0 transition duration-500">
                {/* Mockup Mini Dashboard */}
                <div className="flex justify-between items-center mb-6 border-b border-slate-700 pb-4">
                   <div className="text-sm font-bold text-slate-400">PREVIEW HASIL DIAGNOSA</div>
                   <div className="px-2 py-1 bg-red-500/20 text-red-400 text-xs font-bold rounded">STATUS: KRITIS</div>
                </div>
                <div className="space-y-4">
                   <div className="h-20 bg-slate-700/50 rounded-lg w-full animate-pulse"></div>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="h-32 bg-slate-700/50 rounded-lg animate-pulse"></div>
                      <div className="h-32 bg-slate-700/50 rounded-lg animate-pulse"></div>
                   </div>
                   <div className="h-40 bg-slate-700/50 rounded-lg animate-pulse"></div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-slate-900 border border-slate-700 p-4 rounded-xl shadow-xl flex items-center gap-3">
                   <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <Search className="w-5 h-5 text-white" />
                   </div>
                   <div>
                      <div className="text-xs text-slate-400">AI Analysis</div>
                      <div className="font-bold text-sm">Mendeteksi Kebocoran...</div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* --- SECTION 2: EDUKASI (THE 'WHY') --- */}
        <div className="border-t border-slate-800 pt-20">
           <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Kenapa Bisnis Saya Perlu Di-Diagnosa?</h2>
              <p className="text-slate-400 text-lg">
                Sama seperti cek lab medis, <span className="text-blue-400 font-bold">Vitality Scorecard</span> berfungsi untuk menemukan "penyakit dalam" yang tidak terlihat dari luar sebelum menjadi kanker yang mematikan.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition group">
                 <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition">
                    <ShieldAlert className="w-6 h-6 text-slate-300 group-hover:text-white" />
                 </div>
                 <h3 className="text-xl font-bold mb-3">Deteksi "Silent Killer"</h3>
                 <p className="text-slate-400 text-sm leading-relaxed">
                    Banyak bisnis bangkrut bukan karena tidak ada omzet, tapi karena kebocoran profit (HPP salah) dan cashflow macet (Runway pendek) yang tidak disadari Owner.
                 </p>
              </div>

              {/* Card 2 */}
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-green-500 transition group">
                 <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition">
                    <Target className="w-6 h-6 text-slate-300 group-hover:text-white" />
                 </div>
                 <h3 className="text-xl font-bold mb-3">Validasi Data Stok</h3>
                 <p className="text-slate-400 text-sm leading-relaxed">
                    Apakah stok di gudang sesuai dengan uang yang keluar? Scorecard mengukur efisiensi perputaran stok Anda (Inventory Turnover) untuk mencegah uang mati.
                 </p>
              </div>

              {/* Card 3 */}
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition group">
                 <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition">
                    <BarChart4 className="w-6 h-6 text-slate-300 group-hover:text-white" />
                 </div>
                 <h3 className="text-xl font-bold mb-3">Score & Action Plan</h3>
                 <p className="text-slate-400 text-sm leading-relaxed">
                    Anda tidak hanya dapat angka, tapi juga penjelasan naratif (Diagnosa) tentang apa yang harus diperbaiki pertama kali. Apakah HPP? Atau Piutang?
                 </p>
              </div>
           </div>
        </div>

        {/* --- SECTION 3: TARGET AUDIENCE (THE 'WHO') --- */}
        <div className="bg-gradient-to-r from-blue-900/20 to-slate-800/50 rounded-3xl p-8 md:p-12 border border-slate-700 text-center">
           <h3 className="text-2xl font-bold mb-6">Tools Ini Wajib Bagi Business Owner yang...</h3>
           <div className="flex flex-wrap justify-center gap-4">
              <span className="px-6 py-3 bg-slate-900 rounded-full border border-slate-600 text-slate-300 text-sm font-medium">
                 😓 Omzet naik tapi uang tidak pernah terkumpul
              </span>
              <span className="px-6 py-3 bg-slate-900 rounded-full border border-slate-600 text-slate-300 text-sm font-medium">
                 📦 Stok sering selisih atau hilang misterius
              </span>
              <span className="px-6 py-3 bg-slate-900 rounded-full border border-slate-600 text-slate-300 text-sm font-medium">
                 🤯 Pusing karena keuangan pribadi & bisnis tercampur
              </span>
              <span className="px-6 py-3 bg-slate-900 rounded-full border border-slate-600 text-slate-300 text-sm font-medium">
                 🚀 Berencana ekspansi tapi takut cashflow jebol
              </span>
           </div>
           <div className="mt-10">
              <p className="text-slate-400 text-sm mb-4">Siap mengetahui kebenaran bisnis Anda?</p>
              <a href={COPY_URL} target="_blank" className="text-blue-400 hover:text-white font-bold underline underline-offset-4 decoration-blue-500 decoration-2 transition">
                 Ya, Saya Mau Mulai Diagnosa Sekarang &rarr;
              </a>
           </div>
        </div>

      </div>
    </main>
  );
}


// =================================================================================
// VIEW 2: DASHBOARD MODE (RESULT)
// Muncul jika data tersedia di URL
// =================================================================================
function DashboardView({ searchParams }: { searchParams: URLSearchParams }) {
  
  // --- 1. PARSING DATA ---
  const kas = Number(searchParams.get('kas') || 0);
  const opex = Number(searchParams.get('opex') || 0);
  const pisahRekening = searchParams.get('pisah') === 'true';
  const omzet = Number(searchParams.get('omzet') || 0);
  const hpp = Number(searchParams.get('hpp') || 0);
  const validHpp = searchParams.get('validhpp') === 'true';
  const stok = Number(searchParams.get('stok') || 0);
  const piutang = Number(searchParams.get('piutang') || 0);
  const hutang = Number(searchParams.get('hutang') || 0);

  // --- 2. ENGINE PERHITUNGAN ---
  const monthlyBurn = opex; 
  const runway = monthlyBurn > 0 ? (kas / monthlyBurn).toFixed(1) : '0';
  const runwayNum = Number(runway);

  const grossProfit = omzet - hpp;
  const marginPersen = omzet > 0 ? ((grossProfit / omzet) * 100).toFixed(1) : '0';
  const marginNum = Number(marginPersen);

  const stockMonth = hpp > 0 ? (stok / hpp).toFixed(1) : '0';
  const stockMonthNum = Number(stockMonth);

  // --- 3. SCORING ---
  let score = 0;
  // Likuiditas (30%)
  if (runwayNum >= 6) score += 30; else if (runwayNum >= 3) score += 15; else if (runwayNum >= 1) score += 5;
  // Profitabilitas (25%)
  if (marginNum >= 30) score += 25; else if (marginNum >= 15) score += 10;
  // Efisiensi Stok (20%)
  if (stockMonthNum <= 1.5) score += 20; else if (stockMonthNum <= 3) score += 10; 
  // Kesehatan Cashflow (15%)
  if (piutang <= hutang) score += 15; else if (piutang < (hutang * 1.5)) score += 5;
  // Fundamental (10%)
  if (pisahRekening) score += 5;
  if (validHpp) score += 5;

  // --- 4. DIAGNOSIS TEXT ---
  let diagnosisTitle = "";
  let diagnosisText = [];
  let statusColor = "";
  let statusBg = "";

  if (score >= 80) {
     diagnosisTitle = "BISNIS SEHAT (PRIME) 🟢";
     statusColor = "text-green-700";
     statusBg = "bg-green-600";
  } else if (score >= 50) {
     diagnosisTitle = "WASPADA (WARNING) 🟡";
     statusColor = "text-yellow-700";
     statusBg = "bg-yellow-500";
  } else {
     diagnosisTitle = "KRITIS (ICU) 🔴";
     statusColor = "text-red-700";
     statusBg = "bg-red-700";
  }

  if (runwayNum < 1) diagnosisText.push("⚠️ DARURAT KAS: Sisa napas bisnis kurang dari 1 bulan. Risiko gagal bayar tinggi.");
  else if (runwayNum < 3) diagnosisText.push("⚠️ KAS TIPIS: Posisi kas rentan terhadap guncangan.");
  
  if (!validHpp) diagnosisText.push("❌ BLIND COSTING: HPP tidak valid (belum hitung Waste/Labor). Profit Anda kemungkinan semu.");
  else if (marginNum < 15) diagnosisText.push("📉 MARGIN TIPIS: Margin kotor < 15%. Indikasi inefisiensi produksi atau harga jual terlalu rendah.");
  
  if (stockMonthNum > 3) diagnosisText.push(`📦 OBESITAS STOK: Uang macet di gudang selama ${stockMonth} bulan.`);
  if (!pisahRekening) diagnosisText.push("🚫 REKENING TERCAMPUR: Keuangan pribadi & bisnis harus dipisah segera.");

  const YOUTUBE_VIDEO_ID = "XXXXXXXX"; 

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-20">
      
      {/* Tombol Back di Mode Dashboard */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 pointer-events-none">
        <Link href="/" className="pointer-events-auto inline-flex items-center gap-2 bg-white/90 backdrop-blur shadow-sm px-4 py-2 rounded-full text-sm font-bold text-slate-600 hover:text-blue-600 transition border border-slate-200">
           <ArrowLeft className="w-4 h-4" /> Homepage
        </Link>
      </nav>

      {/* HEADER SCORE */}
      <div className={`${statusBg} text-white p-8 pt-20 md:p-12 text-center`}>
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
          <Link href="/" className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold py-4 px-6 rounded-xl shadow-lg">
            <ChevronRight className="w-5 h-5" /> Kembali ke Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}


// --- MAIN ROUTER ---
function ScorecardRouter() {
  const searchParams = useSearchParams();
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