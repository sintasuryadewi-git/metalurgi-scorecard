'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { Activity, AlertTriangle, CheckCircle, XCircle, ChevronRight } from 'lucide-react';

function ScorecardDashboard() {
  const searchParams = useSearchParams();

  // --- 1. TANGKAP DATA DARI URL GOOGLE SHEETS ---
  const kas = Number(searchParams.get('kas') || 0);
  const opex = Number(searchParams.get('opex') || 0);
  const hutang = Number(searchParams.get('hutang') || 0);
  
  // Konversi string "true"/"false" dari Excel kembali ke boolean
  const waste = searchParams.get('waste') === 'true';
  const labor = searchParams.get('labor') === 'true';
  const overhead = searchParams.get('overhead') === 'true';
  const stok = searchParams.get('stok') || '<90%'; 
  const entitas = searchParams.get('entitas') === 'true';

  // --- 2. LOGIKA PERHITUNGAN SKOR (ENGINE) ---
  const totalBurnRate = opex + hutang;
  // Mencegah pembagian dengan nol
  const runway = totalBurnRate > 0 ? (kas / totalBurnRate).toFixed(1) : '0';
  const runwayNum = Number(runway);

  let score = 0;

  // A. Likuiditas (Max 40 Poin)
  if (runwayNum >= 6) score += 40;
  else if (runwayNum >= 3) score += 25;
  else if (runwayNum >= 1) score += 10;

  // B. Kualitas HPP (Max 30 Poin)
  if (waste) score += 10;
  if (labor) score += 10;
  if (overhead) score += 10;

  // C. Kontrol Stok (Max 20 Poin)
  if (stok === '>98%') score += 20;
  else if (stok === '90-98%') score += 10;

  // D. Entitas (Max 10 Poin)
  if (entitas) score += 10;

  // --- 3. LOGIKA VISUAL (STATE UI) ---
  let status = {
    color: 'bg-red-600',
    icon: XCircle,
    title: 'KRITIS (ICU)',
    desc: 'BAHAYA! Risiko kebangkrutan tinggi. Stop pengeluaran non-esensial.',
    textColor: 'text-red-700',
    borderColor: 'border-red-500',
    bgColor: 'bg-red-50'
  };

  if (score >= 80) {
    status = {
      color: 'bg-green-600',
      icon: CheckCircle,
      title: 'SEHAT (PRIME)',
      desc: 'Sistem solid. Fundamental keuangan sehat. Siap scale-up.',
      textColor: 'text-green-700',
      borderColor: 'border-green-500',
      bgColor: 'bg-green-50'
    };
  } else if (score >= 41) {
    status = {
      color: 'bg-yellow-500',
      icon: AlertTriangle,
      title: 'WASPADA (WARNING)',
      desc: 'Bisnis jalan tapi rapuh. Ada kebocoran profit (HPP/Stok).',
      textColor: 'text-yellow-700',
      borderColor: 'border-yellow-500',
      bgColor: 'bg-yellow-50'
    };
  }

  // Format Rupiah (Opsional, untuk display angka jika perlu)
  const formatIDR = (num: number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 md:p-8 font-sans">
      
      {/* CONTAINER UTAMA */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
        
        {/* HEADER: STATUS BANNER */}
        <div className={`${status.color} p-8 text-center text-white relative overflow-hidden`}>
          <div className="relative z-10">
            <status.icon className="w-16 h-16 mx-auto mb-4 opacity-90" />
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">{status.title}</h1>
            <p className="text-xl font-medium opacity-90">Total Vitality Score: {score} / 100</p>
          </div>
        </div>

        {/* BODY: DIAGNOSA DETAIL */}
        <div className="p-6 md:p-8 space-y-8">
          
          {/* 1. RUNWAY CARD */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h2 className="text-slate-500 text-sm font-semibold uppercase tracking-wide">Sisa Napas Bisnis (Runway)</h2>
              <p className="text-xs text-slate-400 mt-1">Estimasi bertahan tanpa omzet</p>
            </div>
            <div className="text-center md:text-right">
              <div className={`text-4xl font-black ${runwayNum < 1 ? 'text-red-600' : 'text-slate-800'}`}>
                {runway} BULAN
              </div>
              {runwayNum < 1 && <span className="text-xs font-bold text-red-500 bg-red-100 px-2 py-1 rounded-full mt-2 inline-block">DANGER ZONE</span>}
            </div>
          </div>

          {/* 2. DIAGNOSA TEXT */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-600" />
              Diagnosa Dokter Bisnis:
            </h3>
            <div className={`p-4 rounded-lg border-l-4 ${status.bgColor} ${status.borderColor}`}>
              <p className={`text-lg font-medium leading-relaxed ${status.textColor}`}>
                "{status.desc}"
              </p>
              
              {/* List Masalah Spesifik */}
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {waste === false && <li className="flex gap-2 items-center"><XCircle className="w-4 h-4 text-red-500"/> HPP Anda belum menghitung Waste (Potensi Boncos).</li>}
                {stok === '<90%' && <li className="flex gap-2 items-center"><XCircle className="w-4 h-4 text-red-500"/> Akurasi stok rendah, rawan kecurangan.</li>}
                {entitas === false && <li className="flex gap-2 items-center"><XCircle className="w-4 h-4 text-red-500"/> Keuangan pribadi masih tercampur (Data bias).</li>}
                {score === 100 && <li className="flex gap-2 items-center"><CheckCircle className="w-4 h-4 text-green-500"/> Tidak ditemukan isu kritikal. Pertahankan!</li>}
              </ul>
            </div>
          </div>

          {/* 3. CTA BUTTON (LINK KE GRUP WA) */}
          <div className="pt-4 border-t border-slate-100">
            <a 
              href="https://chat.whatsapp.com/GANTI_DENGAN_LINK_GRUP_WA_ANDA" 
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full flex items-center justify-center gap-3 bg-blue-700 hover:bg-blue-800 text-white font-bold text-lg py-4 px-6 rounded-xl shadow-lg transition-all transform hover:scale-[1.02]"
            >
              <span>Bedah Solusi di Grup Mentoring (GRATIS)</span>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-center text-slate-400 text-xs mt-3">
              *Diskusi eksklusif bersama Praktisi & Business Owner
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}

// WAJIB: Bungkus dengan Suspense agar build aman
export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-slate-500">Sedang Menganalisa Data...</div>}>
      <ScorecardDashboard />
    </Suspense>
  );
}