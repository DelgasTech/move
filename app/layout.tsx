import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatBot from "@/components/ChatBot";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Academia Move - Salto, SP",
  description:
    "Academia Move em Salto/SP. Musculação, bike indoor, cross training, pilates, fisioterapia e muito mais. 4 unidades para você treinar onde quiser.",
  keywords: "academia, salto, musculação, cross training, hyrox, bike indoor, pilates, fisioterapia",
  openGraph: {
    title: "Academia Move - Salto, SP",
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
        <ChatBot />
      </body>
    </html>
  );
}
