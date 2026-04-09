import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Move Academia — Salto, SP",
  description:
    "Academia Move em Salto/SP. Musculação, Bike Indoor, Cross Training, Pilates, Fisioterapia e muito mais. 4 unidades para você treinar onde quiser.",
  keywords: "academia, salto, musculação, crossfit, bike indoor, pilates, fisioterapia",
  openGraph: {
    title: "Move Academia — Salto, SP",
    description: "Uma nova experiência em academia. 4 unidades em Salto/SP.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="antialiased font-sans">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
