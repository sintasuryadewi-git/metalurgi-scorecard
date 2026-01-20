import { 
  ArrowRight, 
  BarChart3, 
  Database, 
  CheckCircle2, 
  XCircle, 
  Calculator, 
  Users, 
  Zap, 
  Layout, 
  MessageSquare,
  ShieldCheck,
  TrendingUp,
  BrainCircuit,
  Activity,
  ArrowDown
} from 'lucide-react';

export default function Home() {
  // --- KONFIGURASI LINK ---
  const LINK_LEAD_MAGNET = "/result"; // Masuk ke Funnel Scorecard
  const LINK_DEMO_APP = "https://metalurgi-erp.vercel.app"; // Link Demo App
  const LINK_BOOKING_WA = "https://wa.me/6281234567890?text=Halo%20Tim%20Metalurgi,%20saya%20tertarik%20diskusi%20soal%20Lifetime%20License."; 

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 scroll-smooth">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 font-black text-xl tracking-tighter text-slate-900">
            <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center text-white">
              <Database className="w-4 h-4" />
            </div>
            METALURGI
          </div>
          
          <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
            <a href="#bridge" className="hover:text-blue-700 transition">Diagnosa vs Solusi</a>
            <a href="#savings" className="hover:text-blue-700 transition">Hitung Hematnya</a>
            <a href="#addons" className="hover:text-blue-700 transition">Layanan Support</a>
          </div>

          <div className="flex gap-3">
             <a href={LINK_BOOKING_WA} target="_blank" className="hidden md:flex items-center gap-2 border border-slate-200 hover:border-blue-600 px-4 py-2 rounded-lg text-sm font-bold transition text-slate-700">
               <MessageSquare className="w-4 h-4" />
               Chat Tim
             </a>
             <a href={LINK_LEAD_MAGNET} className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg text-sm font-bold transition shadow-lg shadow-blue-200 animate-pulse-slow">
               Audit Bisnis Gratis
             </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-6 bg-slate-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>

        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-800 text-xs font-bold border border-green-200 mb-2">
            💰 STOP BAYAR SEWA SOFTWARE
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            Fitur Sekelas Enterprise. <br/>
            <span className="text-blue-700">Tanpa Biaya Langganan.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Miliki <strong>Business Operating System (BOS)</strong> Anda sendiri selamanya. 
            Jangan tebak-tebakan soal profit. Mulai dengan diagnosa kesehatan bisnis Anda hari ini.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <a 
              href={LINK_LEAD_MAGNET} 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-xl transition transform hover:-translate-y-1"
            >
              <Activity className="w-5 h-5" />
              Cek Kesehatan Bisnis Dulu
            </a>
            <a 
              href={LINK_DEMO_APP} 
              target="_blank" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-blue-500 text-slate-700 hover:text-blue-700 px-8 py-4 rounded-xl text-lg font-bold shadow-sm transition"
            >
              <Layout className="w-5 h-5" />
              Lihat Demo App
            </a>
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: THE DIAGNOSTIC BRIDGE (PENTING!) --- */}
      <section id="bridge" className="py-16 px-6 bg-white border-b border-slate-100 relative">
        <div className="max-w-6xl mx-auto">
           {/* Section Header */}
           <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Apa Hubungan <span className="text-blue-600">Scorecard</span> & <span className="text-slate-900">Metalurgi App</span>?
              </h2>
              <p className="text-slate-500 mt-2">
                Layaknya dokter, kami mendiagnosa penyakit Anda dulu (lewat Scorecard), <br/>baru memberikan resep obat yang tepat (lewat Metalurgi App).
              </p>
           </div>

           {/* The Bridge Visual */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              
              {/* KOLOM 1: GEJALA (SCORECARD) */}
              <div className="bg-red-50 p-6 rounded-2xl border border-red-100 relative">
                 <div className="absolute -top-4 left-6 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    DIAGNOSA (SCORECARD)
                 </div>
                 <h3 className="font-bold text-red-900 mb-4 mt-2">Jika Hasil Scorecard Anda:</h3>
                 <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                       <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"/>
                       <div className="text-sm text-red-800">
                          <strong>Runway &lt; 3 Bulan:</strong><br/>
                          Cashflow kritis, uang macet di piutang/stok.
                       </div>
                    </li>
                    <li className="flex items-start gap-3">
                       <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"/>
                       <div className="text-sm text-red-800">
                          <strong>Margin Tipis:</strong><br/>
                          Profit tergerus "biaya siluman" (Waste/Labor) yang tak terhitung.
                       </div>
                    </li>
                    <li className="flex items-start gap-3">
                       <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"/>
                       <div className="text-sm text-red-800">
                          <strong>Stok Selisih:</strong><br/>
                          Barang di gudang hilang atau rusak tanpa terlacak.
                       </div>
                    </li>
                 </ul>
              </div>

              {/* KOLOM 2: ARROW CONNECTION */}
              <div className="flex flex-col items-center justify-center text-slate-400 gap-2">
                 <div className="hidden md:block">
                    <ArrowRight className="w-12 h-12 text-slate-300 animate-pulse" />
                 </div>
                 <div className="md:hidden">
                    <ArrowDown className="w-12 h-12 text-slate-300 animate-pulse" />
                 </div>
                 <p className="text-xs font-bold text-center">SOLUSI METALURGI</p>
              </div>

              {/* KOLOM 3: OBAT (METALURGI APP) */}
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 relative">
                 <div className="absolute -top-4 left-6 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    SOLUSI (METALURGI APP)
                 </div>
                 <h3 className="font-bold text-blue-900 mb-4 mt-2">Maka Fitur Ini Obatnya:</h3>
                 <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                       <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"/>
                       <div className="text-sm text-blue-800">
                          <strong>Cashflow Monitor:</strong><br/>
                          Dashboard Runway real-time & Aging Piutang agar kas aman.
                       </div>
                    </li>
                    <li className="flex items-start gap-3">
                       <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"/>
                       <div className="text-sm text-blue-800">
                          <strong>Costing Intelligence:</strong><br/>
                          Hitung HPP presisi (termasuk Yield & Labor) agar margin sehat.
                       </div>
                    </li>
                    <li className="flex items-start gap-3">
                       <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"/>
                       <div className="text-sm text-blue-800">
                          <strong>Inventory Audit:</strong><br/>
                          Sistem Stock Opname digital & pelacakan stok real-time.
                       </div>
                    </li>
                 </ul>
              </div>

           </div>
           
           <div className="text-center mt-10">
              <p className="text-sm text-slate-500 mb-4">
                 Jangan beli "Obat" sebelum tahu "Penyakitnya". Lakukan check-up gratis sekarang.
              </p>
              <a href={LINK_LEAD_MAGNET} className="inline-flex items-center gap-2 text-blue-700 font-bold hover:text-blue-900 underline transition">
                 Mulai Diagnosa Bisnis Saya <ArrowRight className="w-4 h-4"/>
              </a>
           </div>
        </div>
      </section>

      {/* --- COST SAVING SECTION --- */}
      <section id="savings" className="py-24 bg-slate-50 px-6 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">Matematika Bisnis Sederhana</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Lihat berapa banyak uang yang Anda "bakar" hanya untuk menyewa software yang datanya bukan milik Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* KIRI: Tabel Perbandingan */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
               <h3 className="font-bold text-xl mb-6 flex items-center gap-2 text-slate-800">
                 <XCircle className="text-red-500"/> Biaya Software Langganan (SaaS)
               </h3>
               <div className="space-y-4">
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                     <span className="text-slate-500">Biaya per Bulan (Paket Enterprise)</span>
                     <span className="font-mono font-bold">Rp 750.000</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                     <span className="text-slate-500">Biaya Tambahan User (5 Staff)</span>
                     <span className="font-mono font-bold">+ Rp 250.000</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2 bg-red-50 p-2 rounded">
                     <span className="text-red-700 font-bold">Total Biaya 5 Tahun</span>
                     <span className="font-mono font-bold text-red-700">Rp 60.000.000+</span>
                  </div>
               </div>
               <p className="text-xs text-slate-400 mt-4 italic">
                 *Belum termasuk biaya training ulang jika ganti staff & risiko harga naik tiap tahun.
               </p>
            </div>

            {/* KANAN: Metalurgi Value */}
            <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-2xl relative overflow-hidden transform md:scale-105 border-4 border-white ring-1 ring-slate-200">
               <div className="absolute top-0 right-0 p-4 bg-green-500 text-xs font-bold rounded-bl-xl">
                 BEST VALUE
               </div>
               <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                 <CheckCircle2 className="text-green-400"/> Metalurgi Lifetime License
               </h3>
               <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-slate-700 pb-4">
                     <span className="text-slate-300">Biaya Bulanan</span>
                     <span className="font-mono font-bold text-2xl text-green-400">Rp 0</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-700 pb-4">
                     <span className="text-slate-300">Batasan User</span>
                     <span className="font-bold">UNLIMITED</span>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl text-center">
                     <p className="text-sm text-slate-300 mb-1">Anda Cukup Bayar Sekali</p>
                     <p className="text-3xl font-extrabold text-white">Investasi Aset</p>
                     <p className="text-xs text-slate-400 mt-2">(Harga setara sewa 1 tahun kompetitor)</p>
                  </div>
               </div>
               <div className="mt-8">
                 <a href={LINK_BOOKING_WA} target="_blank" className="block w-full text-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition">
                    Tanya Harga Lifetime Sekarang
                 </a>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ENTERPRISE FEATURES LIST --- */}
      <section id="features" className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900">Fitur Sekelas ERP Ratusan Juta</h2>
                <p className="text-slate-500">Kami tidak memangkas fitur, kami memangkas biayanya.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                    {title: "Costing Intelligence", desc: "Hitung HPP Manufaktur, Waste, Yield & Labor secara presisi."},
                    {title: "Hybrid Database", desc: "Input massal via Google Sheets, output via Web Dashboard."},
                    {title: "Inventory Control", desc: "Stock Card real-time, Stock Opname audit system."},
                    {title: "Investor View", desc: "Mode transparan untuk laporan ke investor/bank."},
                    {title: "POS System", desc: "Kasir digital terintegrasi langsung ke jurnal."},
                    {title: "Payroll Engine", desc: "Hitung gaji borongan/harian masuk ke HPP."},
                    {title: "Transaction Module", desc: "Catat hutang/piutang B2B dengan tempo."},
                    {title: "Auto Accounting", desc: "Jurnal & Laporan Keuangan terbentuk otomatis."},
                ].map((item, idx) => (
                    <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition hover:border-blue-200">
                        <CheckCircle2 className="w-8 h-8 text-blue-600 mb-3" />
                        <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- STRATEGIC ADD-ONS (THE SOUL) --- */}
      <section id="addons" className="py-24 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="text-blue-600 font-bold tracking-wide text-sm uppercase">Strategic Add-ons (A La Carte)</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
               Software itu "Fisik", Support itu "Nyawa".
            </h2>
            <p className="text-slate-500 max-w-2xl text-lg">
              Terkadang software saja tidak cukup. Maksimalkan transisi digital Anda dengan dukungan tenaga ahli kami (Opsional).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {/* Service 1 */}
             <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-300 transition group hover:shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition">
                   <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Executive Finance Coaching</h3>
                <p className="text-sm font-semibold text-blue-600 mb-4">Untuk Business Owner</p>
                <p className="text-slate-500 leading-relaxed">
                   Jangan hanya melihat angka, pahami ceritanya. Sesi privat khusus Owner (Non-Finance) untuk belajar membaca dashboard, memahami istilah vital, dan presentasi ke Investor dengan percaya diri.
                </p>
             </div>

             {/* Service 2 */}
             <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-purple-300 transition group hover:shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6 text-purple-700 group-hover:bg-purple-600 group-hover:text-white transition">
                   <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Extended Admin Support</h3>
                <p className="text-sm font-semibold text-purple-600 mb-4">Untuk Staff Operasional</p>
                <p className="text-slate-500 leading-relaxed">
                   Asuransi operasional Anda. Jika admin butuh waktu adaptasi lama, kami perpanjang masa pendampingan. Tim kami memonitor input harian via Group Chat untuk meminimalisir Human Error.
                </p>
             </div>

             {/* Service 3 */}
             <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-green-300 transition group hover:shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 text-green-700 group-hover:bg-green-600 group-hover:text-white transition">
                   <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Monthly Data Health Check</h3>
                <p className="text-sm font-semibold text-green-600 mb-4">Virtual Controller</p>
                <p className="text-slate-500 leading-relaxed">
                   Seperti memiliki Manager Finance pribadi. Akhir bulan, kami audit ringan (validasi data & rekonsiliasi) sebelum laporan dipublish. Data akurat, seimbang, dan bebas kesalahan memalukan.
                </p>
             </div>

             {/* Service 4 */}
             <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-orange-300 transition group hover:shadow-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6 text-orange-700 group-hover:bg-orange-600 group-hover:text-white transition">
                   <BrainCircuit className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Budgeting Workshop</h3>
                <p className="text-sm font-semibold text-orange-600 mb-4">Strategic Planning</p>
                <p className="text-slate-500 leading-relaxed">
                   Workshop khusus membantu manajemen menyusun target tahunan dan budget operasional yang realistis untuk dimasukkan ke dalam sistem monitoring Metalurgi.
                </p>
             </div>
          </div>
          
          <div className="mt-12 text-center">
             <a href={LINK_BOOKING_WA} target="_blank" className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-700 font-bold border-b-2 border-slate-200 hover:border-blue-600 pb-1 transition">
               Tanya Detail Paket Add-ons <ArrowRight className="w-4 h-4" />
             </a>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION (LEAD MAGNET) --- */}
      <section className="py-24 px-6 bg-blue-700 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Diagnosa Dulu, Beli Belakangan.
          </h2>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">
            Jangan biarkan bisnis Anda berjalan tanpa arah. Gunakan <strong>Vitality Scorecard</strong> untuk melihat kondisi finansial Anda yang sebenarnya.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
             <a 
               href={LINK_LEAD_MAGNET} 
               className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-xl text-lg font-bold shadow-xl transition transform hover:scale-105 flex items-center justify-center gap-2"
             >
               <Calculator className="w-5 h-5" />
               Download Vitality Scorecard (Gratis)
             </a>
             <a 
               href={LINK_BOOKING_WA} 
               target="_blank" 
               className="border-2 border-white/30 hover:bg-white/10 hover:border-white px-8 py-4 rounded-xl text-lg font-bold transition flex items-center justify-center gap-2"
             >
               <MessageSquare className="w-5 h-5" />
               Konsultasi via WhatsApp
             </a>
          </div>
          <p className="text-sm text-blue-200 mt-6 opacity-80">
            *Bergabunglah dengan 50+ Business Owner di Grup Mentoring Eksklusif setelah download.
          </p>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-white border-t border-slate-200 pt-16 pb-8 px-6 text-slate-500">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
           <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 font-black text-xl tracking-tighter text-slate-900 mb-4">
                <div className="w-6 h-6 bg-blue-700 rounded flex items-center justify-center text-white">
                  <Database className="w-3 h-3" />
                </div>
                METALURGI
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                Business Operating System (BOS) Hybrid untuk UMKM Indonesia. 
                Fokus pada Manufaktur, Trading, & Jasa. Tanpa biaya langganan.
              </p>
           </div>
           
           <div>
              <h4 className="font-bold text-slate-900 mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                 <li><a href={LINK_DEMO_APP} className="hover:text-blue-700">Live Demo</a></li>
                 <li><a href="#savings" className="hover:text-blue-700">Pricing Comparison</a></li>
                 <li><a href={LINK_LEAD_MAGNET} className="hover:text-blue-700">Vitality Scorecard</a></li>
              </ul>
           </div>
           
           <div>
              <h4 className="font-bold text-slate-900 mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                 <li><a href={LINK_BOOKING_WA} className="hover:text-blue-700">WhatsApp Support</a></li>
                 <li><a href="mailto:hello@metalurgi.id" className="hover:text-blue-700">Email Us</a></li>
              </ul>
           </div>
        </div>
        
        <div className="max-w-7xl mx-auto border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
           <div>© 2026 Metalurgi Ecosystem. All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}