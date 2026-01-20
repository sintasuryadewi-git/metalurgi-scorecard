'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import { 
  Activity, 
  ChevronRight, 
  FileSpreadsheet, 
  ArrowLeft, 
  Target, 
  BarChart4, 
  ShieldAlert,
  MessageSquare,
  ArrowRight,
  Info,
  UserCheck
} from 'lucide-react';

// =================================================================================
// VIEW 1: ONBOARDING MODE (PANDUAN & KONTEKS)
// =================================================================================
function OnboardingView() {
  const SHEET_URL = "https://docs.google.com/spreadsheets/d/15viCWSphO82p8FQxXR7goZ1D8EW5Mef1L1xJaMWgB1Q/edit?usp=sharing";
  const COPY_URL = SHEET_URL.replace('/edit?usp=sharing', '/copy');
  
  // WA Template untuk tanya cara diagnosa
  const WA_ASK_DIAGNOSIS = "https://wa.me/6282229335366?text=Halo%20Tim%20Metalurgi%2C%20saya%20tertarik%20coba%20Vitality%20Scorecard%20tapi%20bingung%20cara%20mulainya.%20Bisa%20dibantu%20panduannya%3F";

  return (
    <main className="min-h-screen bg-slate-900 text-white font-sans selection:bg-blue-500 selection:text-white pb-20">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md z-50 border-b border-slate-800 h-16 flex items-center px-6">
        <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold">Kembali ke Homepage</span>
        </Link>
      </nav>

      <div className="pt-24 px-6 md:px-12 max-w-7xl mx-auto space-y-20">
        
        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/50 border border-blue-500 text-blue-300 text-xs font-bold">
              <Activity className="w-3 h-3" />
              Langkah 1: Input Data
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Sehatkah Jantung <br/> <span className="text-blue-500">Bisnis Anda?</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Jangan menebak-nebak kondisi keuangan. Gunakan template Excel kami untuk input data operasional riil Anda. Sistem akan menganalisa "Runway" dan "Kebocoran" bisnis Anda dalam hitungan detik.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
               <a 
                href={COPY_URL} 
                target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg py-4 px-8 rounded-xl shadow-lg shadow-blue-900/20 transition-all transform hover:-translate-y-1"
              >
                <FileSpreadsheet className="w-5 h-5" />
                Mulai Diagnosa Sekarang
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href={WA_ASK_DIAGNOSIS} 
                target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-transparent border border-slate-600 hover:bg-slate-800 text-slate-300 font-bold text-lg py-4 px-6 rounded-xl transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                Tanya Tim Cara Diagnosa
              </a>
            </div>
            <p className="text-xs text-slate-500">
                *Butuh akun Google (Gmail) untuk akses Template.
            </p>
          </div>

          {/* VISUAL PREVIEW (Menggunakan Screenshot User) */}
          <div className="relative">
             <div className="absolute inset-0 bg-blue-500 blur-[80px] opacity-20 rounded-full"></div>
             <div className="relative group">
                {/* Frame Browser Mockup */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 shadow-2xl overflow-hidden transform group-hover:scale-[1.02] transition duration-500">
                    <div className="h-8 bg-slate-900 border-b border-slate-700 flex items-center px-4 gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    {/* GAMBAR SCREENSHOT ANDA DISINI */}
                    {/* Pastikan file 'preview-dashboard.png' ada di folder 'public' */}
                    <img 
                        src="/preview-dashboard.png" 
                        alt="Preview Hasil Diagnosa Metalurgi" 
                        className="w-full h-auto object-cover"
                    />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-slate-700 p-4 rounded-xl shadow-xl flex items-center gap-3">
                   <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                   </div>
                   <div>
                      <div className="text-xs text-slate-400 font-bold uppercase">Output Result</div>
                      <div className="font-bold text-sm text-white">Laporan PDF Ready</div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* SECTION: WHAT YOU GET */}
        <div className="border-t border-slate-800 pt-20">
           <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Apa yang Akan Anda Dapatkan?</h2>
              <p className="text-slate-400">
                Setelah mengisi data, sistem AI kami akan memberikan 3 indikator vital ini:
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700">
                 <div className="w-10 h-10 bg-red-900/50 text-red-400 rounded-lg flex items-center justify-center mb-4">
                    <Activity className="w-5 h-5" />
                 </div>
                 <h3 className="font-bold text-lg mb-2 text-white">1. Business Runway</h3>
                 <p className="text-sm text-slate-400">
                    Mengetahui berapa bulan persisnya bisnis Anda bisa bertahan jika penjualan berhenti hari ini.
                 </p>
              </div>
              {/* Feature 2 */}
              <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700">
                 <div className="w-10 h-10 bg-purple-900/50 text-purple-400 rounded-lg flex items-center justify-center mb-4">
                    <BarChart4 className="w-5 h-5" />
                 </div>
                 <h3 className="font-bold text-lg mb-2 text-white">2. Margin Health</h3>
                 <p className="text-sm text-slate-400">
                    Mendeteksi apakah profit Anda "Real" atau "Semu" karena kesalahan hitung HPP (Waste/Labor).
                 </p>
              </div>
              {/* Feature 3 */}
              <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700">
                 <div className="w-10 h-10 bg-orange-900/50 text-orange-400 rounded-lg flex items-center justify-center mb-4">
                    <ShieldAlert className="w-5 h-5" />
                 </div>
                 <h3 className="font-bold text-lg mb-2 text-white">3. Stock Audit</h3>
                 <p className="text-sm text-slate-400">
                    Menganalisa efisiensi gudang. Apakah uang Anda mati menjadi barang yang tidak laku?
                 </p>
              </div>
           </div>
        </div>

      </div>
    </main>
  );
}


// =================================================================================
// VIEW 2: DASHBOARD MODE (RESULT)
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

  // --- 3. SCORING & LOGIC DETAIL ---
  let score = 0;
  
  // Logic Runway Detail
  let runwayStatus = { label: "AMAN", color: "text-green-600", advice: "Pertahankan cash reserve ini." };
  if (runwayNum < 1) {
    runwayStatus = { label: "BAHAYA", color: "text-red-600", advice: "Stop pengeluaran Capex. Tagih piutang sekarang!" };
    score += 5;
  } else if (runwayNum < 3) {
    runwayStatus = { label: "WASPADA", color: "text-yellow-600", advice: "Cashflow ketat. Fokus genjot penjualan tunai." };
    score += 15;
  } else {
    score += 30;
  }

  // Logic Margin Detail
  let marginStatus = { label: "SEHAT", color: "text-green-600", advice: "Struktur biaya produksi efisien." };
  if (marginNum < 15) {
    marginStatus = { label: "KRITIS", color: "text-red-600", advice: "Cek HPP! Anda mungkin jual rugi tanpa sadar." };
    score += 10;
  } else if (marginNum < 30) {
    marginStatus = { label: "RENDAH", color: "text-yellow-600", advice: "Efisiensikan bahan baku & tenaga kerja." };
    score += 15;
  } else {
    score += 25;
  }

  // Logic Stok Detail
  let stockStatus = { label: "EFISIEN", color: "text-green-600", advice: "Perputaran barang sangat bagus." };
  if (stockMonthNum > 3) {
    stockStatus = { label: "MACET", color: "text-red-600", advice: "Uang mati di gudang. Lakukan cuci gudang segera." };
    score += 10;
  } else if (stockMonthNum > 1.5) {
    stockStatus = { label: "NORMAL", color: "text-yellow-600", advice: "Cukup oke, tapi bisa lebih cepat lagi." };
    score += 15;
  } else {
    score += 20;
  }

  // Score Tambahan
  if (piutang <= hutang) score += 15; else score += 5;
  if (pisahRekening) score += 5;
  if (validHpp) score += 5;

  // --- 4. DISPLAY STATUS ---
  let diagnosisTitle = "";
  let diagnosisText = [];
  let statusBg = "";

  if (score >= 80) {
     diagnosisTitle = "BISNIS SEHAT (PRIME) 🟢";
     statusBg = "bg-green-600";
  } else if (score >= 50) {
     diagnosisTitle = "WASPADA (WARNING) 🟡";
     statusBg = "bg-yellow-500";
  } else {
     diagnosisTitle = "KRITIS (ICU) 🔴";
     statusBg = "bg-red-700";
  }

  // Generate Diagnosis Points
  if (runwayNum < 1) diagnosisText.push("DARURAT KAS: Sisa napas bisnis kurang dari 1 bulan. Risiko gagal bayar tinggi.");
  if (!validHpp) diagnosisText.push("BLIND COSTING: HPP tidak valid (belum hitung Waste/Labor). Profit Anda kemungkinan semu.");
  if (stockMonthNum > 3) diagnosisText.push(`OBESITAS STOK: Uang macet di gudang selama ${stockMonth} bulan.`);
  if (!pisahRekening) diagnosisText.push("REKENING TERCAMPUR: Keuangan pribadi & bisnis harus dipisah segera.");
  if (diagnosisText.length === 0) diagnosisText.push("Secara umum indikator vital bisnis Anda terlihat sehat. Pertahankan kedisiplinan pencatatan ini.");

  const YOUTUBE_VIDEO_ID = "XXXXXXXX"; 
  
  // Link WA Expert
  const WA_EXPERT_CONSULT = `https://wa.me/6282229335366?text=Halo%20Expert%20Metalurgi%2C%20saya%20sudah%20dapat%20Vitality%20Score%3A%20${score}.%20Saya%20ingin%20diskusi%20solusi%20untuk%20perbaikan%20bisnis%20saya.`;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-20">
      
      {/* Tombol Back */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 pointer-events-none">
        <Link href="/" className="pointer-events-auto inline-flex items-center gap-2 bg-white/90 backdrop-blur shadow-sm px-4 py-2 rounded-full text-sm font-bold text-slate-600 hover:text-blue-600 transition border border-slate-200">
           <ArrowLeft className="w-4 h-4" /> Homepage
        </Link>
      </nav>

      {/* HEADER SCORE */}
      <div className={`${statusBg} text-white p-8 pt-24 md:p-12 text-center shadow-lg`}>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-extrabold uppercase tracking-wide mb-2">{diagnosisTitle}</h1>
          <div className="text-6xl md:text-7xl font-black my-4">{score}<span className="text-3xl font-medium opacity-70">/100</span></div>
          <p className="text-lg opacity-90 font-medium">Vitality Scorecard Result</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-6 space-y-8 -mt-8">
        
        {/* DETAILED METRICS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: Runway */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-blue-500 hover:shadow-xl transition">
            <div className="flex justify-between items-start mb-2">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Runway</p>
                <span className={`text-xs font-bold px-2 py-1 rounded ${runwayStatus.color} bg-slate-100`}>{runwayStatus.label}</span>
            </div>
            <p className={`text-3xl font-black text-slate-800`}>{runway} <span className="text-lg font-medium text-slate-500">Bulan</span></p>
            <div className="mt-4 pt-4 border-t border-slate-100 text-sm">
                <p className="font-bold text-slate-700 mb-1">Artinya:</p>
                <p className="text-slate-500 mb-2">Bisnis bertahan {runway} bulan tanpa omzet.</p>
                <p className="font-bold text-blue-600 text-xs">💡 Saran: {runwayStatus.advice}</p>
            </div>
          </div>

          {/* Card 2: Margin */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-purple-500 hover:shadow-xl transition">
            <div className="flex justify-between items-start mb-2">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Gross Margin</p>
                <span className={`text-xs font-bold px-2 py-1 rounded ${marginStatus.color} bg-slate-100`}>{marginStatus.label}</span>
            </div>
            <p className={`text-3xl font-black text-slate-800`}>{marginNum}%</p>
            <div className="mt-4 pt-4 border-t border-slate-100 text-sm">
                <p className="font-bold text-slate-700 mb-1">Artinya:</p>
                <p className="text-slate-500 mb-2">Sisa uang dari penjualan setelah potong HPP.</p>
                <p className="font-bold text-purple-600 text-xs">💡 Saran: {marginStatus.advice}</p>
            </div>
          </div>

          {/* Card 3: Stock */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-orange-500 hover:shadow-xl transition">
            <div className="flex justify-between items-start mb-2">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Umur Stok</p>
                <span className={`text-xs font-bold px-2 py-1 rounded ${stockStatus.color} bg-slate-100`}>{stockStatus.label}</span>
            </div>
            <p className={`text-3xl font-black text-slate-800`}>{stockMonth} <span className="text-lg font-medium text-slate-500">Bulan</span></p>
            <div className="mt-4 pt-4 border-t border-slate-100 text-sm">
                <p className="font-bold text-slate-700 mb-1">Artinya:</p>
                <p className="text-slate-500 mb-2">Lama barang mengendap sebelum laku terjual.</p>
                <p className="font-bold text-orange-600 text-xs">💡 Saran: {stockStatus.advice}</p>
            </div>
          </div>
        </div>

        {/* DIAGNOSIS TEXT */}
        <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <div className="flex items-center gap-3 mb-6">
            <Activity className="w-6 h-6 text-blue-600" />
            <h2 className="font-bold text-xl text-slate-800">Analisis Diagnostik</h2>
          </div>
          <div className="space-y-4">
            {diagnosisText.map((text, index) => (
              <div key={index} className="flex gap-3 bg-white p-4 rounded-lg shadow-sm border border-blue-100">
                 <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                 <p className="text-slate-700 font-medium">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-blue-200">
             <p className="text-sm text-blue-800 italic">
                "Skor ini adalah cerminan sistem operasional Anda saat ini. Angka tidak bisa berbohong."
             </p>
          </div>
        </div>

        {/* CTA: DISKUSI DENGAN EXPERT (BEFORE VIDEO) */}
        <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[80px] opacity-20 -mr-16 -mt-16"></div>
            
            <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Bingung Membaca Hasil Ini?</h3>
                <p className="text-slate-300 max-w-lg">
                    Jangan ambil keputusan sendiri. Bedah hasil diagnosa ini bersama Financial Expert Metalurgi untuk menyusun strategi perbaikan.
                </p>
            </div>
            <a 
                href={WA_EXPERT_CONSULT}
                target="_blank"
                className="relative z-10 flex-shrink-0 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition flex items-center gap-2 shadow-lg"
            >
                <UserCheck className="w-5 h-5" />
                Diskusikan Hasil Diagnosa (WA)
            </a>
        </div>

        {/* VIDEO SECTION */}
        <div className="bg-black rounded-2xl shadow-xl overflow-hidden aspect-video relative group">
           <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0`} title="Intro" allowFullScreen></iframe>
        </div>

        {/* BOTTOM CTA */}
        <div className="text-center pt-8">
            <p className="text-slate-500 mb-4 text-sm">Butuh solusi sistem untuk memperbaiki skor di atas?</p>
            <div className="flex justify-center gap-4">
                <Link href="/" className="text-blue-600 font-bold hover:underline">
                    Lihat Fitur Metalurgi App &rarr;
                </Link>
            </div>
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