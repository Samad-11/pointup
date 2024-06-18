import type { Metadata } from "next";
import { Inter, Kalam, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
// const kalam = Kalam({ subsets: ['devanagari'], weight: ["300", "400", "700"], variable: "--font-kalam" })
const kalam = Poppins({ subsets: ['latin', 'latin-ext'], weight: ['900', '800', "700", "500", "400", "200"], variable: "--font-kalam" })

export const metadata: Metadata = {
  title: "Point Up",
  description: "Earn while spending",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="mytheme" className="no-scrollbar">
      <body className={`${inter.className} ${kalam.variable}`}>{children}</body>
    </html>
  );
}
