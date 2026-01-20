'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { Activity, AlertTriangle, CheckCircle, XCircle, PlayCircle, MessageSquare, ChevronRight } from 'lucide-react';

function ScorecardDashboard() {
  const searchParams = useSearchParams();

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
  // Rumus: Stok dibagi HPP bulanan. Kalau hasil 2 bulan, artinya barang ngendap 2 bulan.
  const stockMonth = hpp > 0 ? (stok / hpp).toFixed(1) : '0';
  const stockMonthNum = Number(stockMonth);

  // 3. SCORING ALGORITHM (Weighted)
  let score = 0;

  // Likuiditas (30%)
  if (runwayNum >= 6) score += 30;
  else if (runwayNum >= 3) score += 15;
  else if (runwayNum >= 1) score += 5;

  // Profitabilitas (25%)
  if (marginNum >= 30) score += 25; // Benchmark Manufaktur/Umum
  else if (marginNum >= 15) score += 10;
  
  // Efisiensi Stok (20%)
  if (stockMonthNum <= 1.5) score += 20; // Stok < 1.5 bulan HPP (Cepat)
  else if (stockMonthNum <= 3) score += 10; // Stok < 3 bulan

  // Kesehatan Cashflow (Piutang vs Hutang) (15%)
  if (piutang <= hutang) score += 15; // Bagus (Pakai uang supplier)
  else if (piutang < (hutang * 1.5)) score += 5;

  // Fundamental (10%)
  if (pisahRekening) score += 5;
  if (validHpp) score += 5;


  // 4. "AI" DIAGNOSIS GENERATOR (Rule-Based Text)
  let diagnosisTitle = "";
  let diagnosisText = [];

  // Logic Judul Utama
  if (score >= 80) diagnosisTitle = "BISNIS SEHAT (PRIME CONDITION) 🟢";
  else if (score >= 50) diagnosisTitle = "WASPADA (NEEDS OPTIMIZATION) 🟡";
  else diagnosisTitle = "KRITIS (FINANCIAL DISTRESS) 🔴";

  // Logic Paragraf 1: Likuiditas
  if (runwayNum < 1) {
    diagnosisText.push("⚠️ DARURAT KAS: Sisa napas bisnis Anda kurang dari 1 bulan. Ini adalah prioritas #1. Anda berisiko gagal bayar gaji/supplier bulan depan.");
  } else if (runwayNum < 3) {
    diagnosisText.push("⚠️ KAS TIPIS: Posisi kas Anda rentan. Satu guncangan penjualan bisa membuat cashflow macet.");
  } else {
    diagnosisText.push("✅ LIKUIDITAS AMAN: Anda memiliki cadangan kas yang cukup kuat untuk operasional.");
  }

  // Logic Paragraf 2: Profit & HPP
  if (!validHpp) {
    diagnosisText.push("❌ BLIND COSTING: Perhitungan margin Anda TIDAK VALID karena belum menghitung Waste/Labor. Kemungkinan besar profit Anda saat ini adalah 'Phantom Profit' (Laba Semu).");
  } else if (marginNum < 15) {
    diagnosisText.push("📉 MARGIN TIPIS: Margin kotor Anda di bawah 15%. Anda bekerja keras tapi hasilnya dimakan biaya produksi. Perlu audit efisiensi bahan baku segera.");
  }

  // Logic Paragraf 3: Masalah Stok (Dead Stock)
  if (stockMonthNum > 3) {
    diagnosisText.push(`📦 OBESITAS STOK: Uang Anda macet di gudang! Rata-rata barang mengendap selama ${stockMonth} bulan sebelum laku. Ini mematikan cashflow.`);
  }

  // Logic Paragraf 4: Entity
  if (!pisahRekening) {
    diagnosisText.push("🚫 TERCAMPUR: Keuangan pribadi & bisnis masih satu kantong. Selama ini belum dibereskan, bisnis Anda tidak akan pernah bisa 'Scale-Up' dengan benar.");
  }

  // 5. HELPER FORMAT
  const formatIDR = (num: number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);

  // VIDEO ID YOUTUBE (Ganti dengan ID Video Branding Metalurgi nanti)
  // Contoh: https://www.youtube.com/watch?v=dQw4w9WgXcQ -> ID nya "dQw4w9WgXcQ"
  const YOUTUBE_VIDEO_ID = "XXXXXXXX"; // Placeholder

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* SECTION 1: HEADER SCORE */}
      <div className={`${score < 50 ? 'bg-red-700' : score < 80 ? 'bg-yellow-500' : 'bg-green-600'} text-white p-8 md:p-12 text-center`}>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-extrabold uppercase tracking-wide mb-2">{diagnosisTitle}</h1>
          <div className="text-6xl md:text-7xl font-black my-4">{score}<span className="text-3xl font-medium opacity-70">/100</span></div>
          <p className="text-lg opacity-90 font-medium">Vitality Scorecard Result</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6 space-y-8 -mt-8">
        
        {/* SECTION 2: KEY METRICS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card Runway */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-blue-500">
            <p className="text-xs font-bold text-slate-400 uppercase">Sisa Napas (Runway)</p>
            <p className={`text-3xl font-black ${runwayNum < 3 ? 'text-red-600' : 'text-slate-800'}`}>{runway} Bulan</p>
            <p className="text-xs text-slate-500 mt-2">Target Aman: &gt; 6 Bulan</p>
          </div>
          {/* Card Margin */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-purple-500">
            <p className="text-xs font-bold text-slate-400 uppercase">Gross Margin</p>
            <p className={`text-3xl font-black ${marginNum < 15 ? 'text-red-600' : 'text-slate-800'}`}>{marginNum}%</p>
            <p className="text-xs text-slate-500 mt-2">Target: &gt; 30%</p>
          </div>
           {/* Card Stok Age */}
           <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-orange-500">
            <p className="text-xs font-bold text-slate-400 uppercase">Umur Stok</p>
            <p className={`text-3xl font-black ${stockMonthNum > 3 ? 'text-red-600' : 'text-slate-800'}`}>{stockMonth} Bulan</p>
            <p className="text-xs text-slate-500 mt-2">Target: &lt; 1.5 Bulan</p>
          </div>
        </div>

        {/* SECTION 3: AI DIAGNOSIS (THE BRAIN) */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
          <div className="bg-slate-100 p-4 border-b border-slate-200 flex items-center gap-3">
            <Activity className="w-5 h-5 text-blue-600" />
            <h2 className="font-bold text-slate-700">Analisis Diagnostik (AI Logic)</h2>
          </div>
          <div className="p-6 md:p-8 space-y-4">
            {diagnosisText.map((text, index) => (
              <p key={index} className="text-lg leading-relaxed border-l-4 border-slate-300 pl-4 py-1">
                {text}
              </p>
            ))}
            
            <div className="mt-8 bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h3 className="font-bold text-blue-800 mb-2">Kesimpulan Dokter Bisnis:</h3>
              <p className="text-blue-900">
                Skor Anda menunjukkan adanya {score < 50 ? "KEBOCORAN KRITIKAL" : "INEFISIENSI"} pada sistem operasional. 
                Software akuntansi biasa tidak akan mendeteksi ini karena hanya mencatat, tidak menganalisa. 
                Anda membutuhkan <strong>Business Operating System (BOS)</strong> yang mengintegrasikan HPP, Stok, dan Keuangan.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 4: VIDEO BRANDING (THE BODY) */}
        <div className="bg-black rounded-2xl shadow-xl overflow-hidden aspect-video relative group cursor-pointer">
           {/* Placeholder untuk Youtube Embed */}
           <iframe 
             className="w-full h-full"
             src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0`} 
             title="Metalurgi App Introduction"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
             allowFullScreen
           ></iframe>
        </div>

        {/* SECTION 5: CALL TO ACTION (THE SOUL) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a 
            href="https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20sudah%20dapat%20skor%20bisnis%20saya.%20Mau%20konsultasi%20solusinya."
            target="_blank"
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg"
          >
            <MessageSquare className="w-5 h-5" />
            Konsultasi Gratis via WA
          </a>
          <a 
            href="https://metalurgi.id/join-waitlist" // Ganti Link
            target="_blank"
            className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
            Lihat Fitur Metalurgi App
          </a>
        </div>

        <p className="text-center text-slate-400 text-xs py-4">
          Metalurgi Ecosystem © 2026. Data Anda tidak disimpan di server kami.
        </p>

      </div>
    </main>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Sedang Menganalisa Data...</div>}>
      <ScorecardDashboard />
    </Suspense>
  );
}