import { ArrowRight, BarChart3, Database, Lock, CheckCircle2, XCircle, Calculator } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  // GANTI LINK INI DENGAN LINK FORM TALLY/GOOGLE FORM ANDA
  const LINK_LEAD_MAGNET = "/result"; // Contoh, ganti punya Anda
  const LINK_WA_CONSULT = "https://wa.me/6281234567890"; // Ganti No WA

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-black text-xl tracking-tighter text-blue-900">
            <Database className="w-6 h-6 text-blue-600" />
            METALURGI
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
            <a href="#problem" className="hover:text-blue-600 transition">Masalah</a>
            <a href="#solution" className="hover:text-blue-600 transition">Solusi Hybrid</a>
            <a href="#pricing" className="hover:text-blue-600 transition">Harga</a>
          </div>
          <a href={LINK_LEAD_MAGNET} target="_blank" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-bold transition">
            Audit Bisnis Gratis
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100 mb-4">
            🚀 New Approach: The Hybrid ERP System
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Ubah <span className="text-green-600">Google Sheets</span> Menjadi <br/>
            <span className="text-blue-600">ERP Dashboard</span> Canggih
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Tanpa biaya langganan bulanan. Tanpa migrasi data yang ribet. 
            Admin tetap kerja cepat di Excel, Owner pantau profit real-time di Dashboard.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
            <a href={LINK_LEAD_MAGNET} target="_blank" className="w-full md:w-auto flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg shadow-blue-200 transition transform hover:-translate-y-1">
              <Calculator className="w-5 h-5" />
              Cek Kesehatan Bisnis (Gratis)
            </a>
            <a href="#solution" className="w-full md:w-auto px-8 py-4 rounded-xl text-lg font-semibold text-slate-600 hover:bg-slate-50 border border-slate-200 transition">
              Pelajari Cara Kerjanya
            </a>
          </div>
          <p className="text-xs text-slate-400 mt-4">
            *Tools audit ini telah digunakan oleh 50+ Business Owner bulan ini.
          </p>
        </div>
      </section>

      {/* --- PROBLEM SECTION (AGITATION) --- */}
      <section id="problem" className="py-20 bg-slate-50 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Kenapa Software Lama Gagal?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Google Sheets Chaos</h3>
              <p className="text-slate-500">
                Excel itu fleksibel, tapi rawan error. Rumus terhapus, data tertimpa, dan tidak bisa menghasilkan laporan keuangan standar yang dipercaya Bank/Investor.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Lock className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Jebakan Langganan SaaS</h3>
              <p className="text-slate-500">
                Software akuntansi cloud memaksa Anda bayar bulanan seumur hidup. Jika berhenti bayar, data hilang. Fiturnya kaku dan sulit dikustomisasi.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Buta Data Produksi</h3>
              <p className="text-slate-500">
                Kebanyakan software cuma catat uang masuk/keluar. Tidak bisa hitung HPP Manufaktur (Waste, Yield, Labor) secara detail. Akhirnya profit semu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SOLUTION SECTION (HYBRID) --- */}
      <section id="solution" className="py-20 px-6 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              The Best of Both Worlds. <br/>
              <span className="text-blue-400">Hybrid System.</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Metalurgi menggabungkan kecepatan input Google Sheets dengan kecerdasan visualisasi Web Dashboard.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-green-400" />
                <span>Admin input massal di Google Sheets (Copy-Paste friendly).</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-green-400" />
                <span>Owner pantau Dashboard di HP secara Real-time.</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-green-400" />
                <span>Lifetime License. Sekali bayar, milik Anda selamanya.</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
             {/* Mockup Visual Sederhana */}
             <div className="bg-white rounded-lg p-4 shadow-2xl">
                <div className="flex gap-2 mb-4 border-b pb-2">
                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-3">
                   <div className="h-20 bg-blue-50 rounded w-full flex items-center justify-center text-blue-800 font-bold text-xs">VISUALISASI DASHBOARD</div>
                   <div className="grid grid-cols-2 gap-2">
                      <div className="h-12 bg-slate-100 rounded"></div>
                      <div className="h-12 bg-slate-100 rounded"></div>
                   </div>
                   <div className="h-8 bg-slate-100 rounded w-2/3"></div>
                </div>
             </div>
             <p className="text-center text-xs text-slate-400 mt-4">Database: Spreadsheet Anda Sendiri</p>
          </div>
        </div>
      </section>

      {/* --- LEAD MAGNET SECTION (CTA UTAMA) --- */}
      <section className="py-24 px-6 bg-blue-600 text-white text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-extrabold">Jangan Beli Software Dulu Sebelum Audit.</h2>
          <p className="text-blue-100 text-lg">
            Gunakan tools "Vitality Scorecard" kami untuk mendiagnosa kebocoran profit, runway cashflow, dan efisiensi stok Anda. Gratis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a href={LINK_LEAD_MAGNET} target="_blank" className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-xl text-lg font-bold shadow-xl transition transform hover:scale-105 flex items-center justify-center gap-2">
               <Calculator className="w-5 h-5" />
               Download Scorecard Sekarang
             </a>
             <a href={LINK_WA_CONSULT} target="_blank" className="border border-white/30 hover:bg-white/10 px-8 py-4 rounded-xl text-lg font-bold transition flex items-center justify-center gap-2">
               Chat Tim Metalurgi
             </a>
          </div>
          <p className="text-sm text-blue-200 mt-6">
            *Dapatkan juga akses ke Grup Mentoring Bisnis Eksklusif setelah download.
          </p>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-bold text-white">
            <Database className="w-5 h-5 text-blue-500" />
            METALURGI
          </div>
          <div className="text-sm">
            © 2026 Metalurgi Ecosystem. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}