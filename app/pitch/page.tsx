'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
// PERBAIKAN: Menambahkan 'Activity' dan 'Layout' ke dalam import
import { Database, AlertTriangle, TrendingDown, BarChart4, CheckCircle2, ArrowDown, Activity, Layout } from 'lucide-react';
import Link from 'next/link';

// --- KOMPONEN SLIDE ---
function Slide({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <section className={`h-screen w-full snap-start flex flex-col items-center justify-center p-8 relative overflow-hidden ${className}`}>
      {children}
      {/* Indikator Scroll */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 text-slate-400/50"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}

// --- MAIN PAGE ---
export default function PitchDeck() {
  const containerRef = useRef(null);
  
  return (
    <main ref={containerRef} className="h-screen w-full overflow-y-scroll snap-y snap-mandatory bg-slate-900 text-white font-sans scroll-smooth">
      
      {/* NAVBAR MINI */}
      <div className="fixed top-0 left-0 p-6 z-50 flex items-center gap-2 font-black text-xl tracking-tighter text-white mix-blend-difference">
        <Database className="w-6 h-6 text-blue-500" />
        METALURGI PITCH
      </div>

      {/* SLIDE 1: THE HOOK (PARADOX) */}
      <Slide className="bg-gradient-to-br from-slate-900 to-blue-900">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="max-w-4xl text-center space-y-6"
        >
            <span className="inline-block px-4 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-bold border border-blue-500/30">
                THE PROFIT PARADOX
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                Punya Omzet <span className="text-green-400">1 Milyar</span>,<br/>
                Tapi Saldo Rekening <span className="text-red-400">Kosong</span>?
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Anda tidak sendirian. Ini adalah penyakit paling umum di bisnis Manufaktur & Trading yang sedang bertumbuh.
            </p>
        </motion.div>
      </Slide>

      {/* SLIDE 2: THE PROBLEM (PROFIT SEMU) */}
      <Slide className="bg-slate-900">
         <motion.div 
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
            <div>
                <AlertTriangle className="w-16 h-16 text-yellow-500 mb-6" />
                <h2 className="text-4xl font-bold mb-4">Jebakan "Profit Semu" di Laporan Keuangan.</h2>
                <p className="text-lg text-slate-400 leading-relaxed">
                    Di atas kertas (Laba Rugi), bisnis Anda terlihat untung besar. Tapi di lapangan, Anda "berdarah-darah" mencari cash untuk bayar supplier dan gaji.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed mt-4 font-bold">
                    Kenapa? Karena software akuntansi biasa hanya MENCATAT sejarah, tidak MENDIAGNOSA masalah.
                </p>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700/50 relative">
                {/* Visualisasi Laporan Palsu */}
                <div className="space-y-4 opacity-50 blur-[1px]">
                    <div className="h-6 bg-slate-700 rounded w-1/3"></div>
                    <div className="h-10 bg-green-900/30 border border-green-500/30 rounded flex items-center px-4 text-green-400 font-bold">LABA BERSIH: Rp 250.000.000</div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-red-600 text-white px-6 py-3 font-black text-2xl rotate-12 border-4 border-white shadow-2xl">
                        KENYATAAN: CASH MINUS
                    </div>
                </div>
            </div>
         </motion.div>
      </Slide>

      {/* SLIDE 3: THE 3 KILLERS */}
      <Slide className="bg-gradient-to-tl from-slate-900 to-slate-800">
         <div className="max-w-6xl w-full">
            <motion.h2 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="text-4xl font-bold text-center mb-16"
            >
                3 "Silent Killer" yang Tidak Terdeteksi:
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {icon: TrendingDown, color:"red", title: "1. Blind Costing (HPP Buta)", desc: "HPP tidak menghitung Waste produksi & Gaji Borongan secara real-time. Akibatnya: Jual Rugi tanpa sadar."},
                    {icon: BarChart4, color:"orange", title: "2. Obesitas Stok", desc: "Modal kerja miliaran macet menjadi barang mati di gudang yang tidak berputar (Turnover rendah)."},
                    {icon: AlertTriangle, color:"yellow", title: "3. Cashflow Gap", desc: "Tempo bayar ke supplier lebih cepat daripada tempo customer bayar ke Anda. Anda menalangi customer."},
                ].map((item, idx) => (
                    <motion.div 
                       key={idx}
                       initial={{ opacity: 0, y: 50 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.5, delay: idx * 0.2 }}
                       className={`bg-slate-800/50 p-8 rounded-2xl border border-${item.color}-500/30 hover:border-${item.color}-500 transition`}
                    >
                        <item.icon className={`w-12 h-12 text-${item.color}-500 mb-4`} />
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-slate-400">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
         </div>
      </Slide>

       {/* SLIDE 4: THE SOLUTION (METALURGI WAY) */}
       <Slide className="bg-blue-900 relative overflow-hidden">
         {/* Background Abstract */}
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         
         <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8 }}
           className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10"
        >
            <div>
                <h2 className="text-4xl font-extrabold mb-6 leading-tight">
                    Berhenti Hanya Mencatat.<br/> Mulai <span className="text-blue-300">Mendiagnosa.</span>
                </h2>
                <p className="text-lg text-blue-100 leading-relaxed mb-8">
                    Metalurgi bukan sekadar software akuntansi. Ini adalah <strong>Business Operating System (BOS)</strong> Hybrid yang menggabungkan kemudahan input Google Sheets dengan kecerdasan Dashboard CFO.
                </p>
                <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-blue-200"><CheckCircle2 className="text-green-400"/> Admin tetap pakai Google Sheets (Zero Learning Curve).</li>
                    <li className="flex items-center gap-3 text-blue-200"><CheckCircle2 className="text-green-400"/> Owner dapat Dashboard Real-time di HP.</li>
                    <li className="flex items-center gap-3 text-blue-200 font-bold"><CheckCircle2 className="text-green-400"/> Lifetime License (Tanpa Biaya Bulanan).</li>
                </ul>
            </div>
            {/* Visual Mockup Hybrid */}
            <div className="relative">
                <div className="bg-white rounded-xl shadow-2xl p-4 transform rotate-3 border border-blue-400/50">
                    <div className="flex gap-4 items-center mb-4">
                        <Database className="text-green-600 w-8 h-8"/>
                        <div className="text-slate-800 font-bold">Google Sheets (Input)</div>
                    </div>
                    <div className="h-32 bg-slate-100 rounded border border-slate-200 mb-4 grid grid-cols-4 gap-1 p-1">
                        {[...Array(12)].map((_,i) => <div key={i} className="bg-white border border-slate-200"></div>)}
                    </div>
                </div>
                <div className="absolute top-1/2 -left-1/2 transform -translate-y-1/2 translate-x-1/4 z-10">
                    <ArrowDown className="w-12 h-12 text-blue-300 rotate-[-90deg] animate-pulse"/>
                </div>
                <div className="bg-slate-900 rounded-xl shadow-2xl p-4 transform -rotate-2 border border-blue-400/50 relative z-20 mt-[-50px] ml-[100px]">
                    <div className="flex gap-4 items-center mb-4">
                        <BarChart4 className="text-blue-400 w-8 h-8"/>
                        <div className="text-white font-bold">Web Dashboard (Output)</div>
                    </div>
                     <div className="grid grid-cols-2 gap-2">
                        <div className="h-20 bg-blue-800 rounded"></div>
                        <div className="h-20 bg-red-800 rounded"></div>
                    </div>
                </div>
            </div>
         </motion.div>
      </Slide>

      {/* SLIDE 5: CTA (THE NEXT STEP) */}
      <Slide className="bg-slate-950 text-center relative">
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="max-w-3xl space-y-8 relative z-10"
        >
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Jangan Percaya Klaim Kami.<br/> Percayai Data Anda Sendiri.
            </h2>
            <p className="text-xl text-slate-400">
                Sebelum bicara solusi, mari kita diagnosa dulu seberapa parah kebocoran bisnis Anda menggunakan <strong>Vitality Scorecard</strong> (Gratis).
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                <a 
                  href="/result" 
                  className="px-8 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-xl shadow-lg shadow-blue-900/30 transition transform hover:scale-105 flex items-center gap-3"
                >
                    <Activity className="w-6 h-6"/>
                    Cek Jantung Bisnis (5 Menit)
                </a>
                <a 
                  href="https://metalurgi-erp.vercel.app" target="_blank"
                  className="px-8 py-5 bg-transparent border-2 border-slate-700 hover:border-white text-white rounded-2xl font-bold text-xl transition flex items-center gap-3"
                >
                    <Layout className="w-6 h-6"/>
                    Lihat Demo Dashboard
                </a>
            </div>
        </motion.div>
        <p className="absolute bottom-4 text-sm text-slate-600">© 2026 Metalurgi Ecosystem.</p>
      </Slide>

    </main>
  );
}