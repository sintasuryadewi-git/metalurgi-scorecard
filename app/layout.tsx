import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// --- METADATA UNTUK WHATSAPP & SEO ---
export const metadata: Metadata = {
  title: "Metalurgi | Cek Kesehatan Bisnis Gratis",
  description: "Diagnosa kebocoran profit & cashflow bisnis Anda dalam 5 menit. Tools audit gratis untuk Business Owner Manufaktur & Trading.",
  openGraph: {
    title: "⚠️ Sehatkah Jantung Bisnis Anda?",
    description: "Cek 'Vitality Score' bisnis Anda sekarang. Jangan biarkan kebocoran profit membunuh bisnis Anda pelan-pelan. Klik untuk diagnosa GRATIS.",
    url: "https://metalurgi-scorecard.vercel.app",
    siteName: "Metalurgi Ecosystem",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  );
}