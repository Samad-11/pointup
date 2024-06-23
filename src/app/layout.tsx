import type { Metadata } from "next";
import { Cinzel, Fauna_One } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";

const cinzel = Cinzel({ subsets: ["latin"] });
const faunaOne = Fauna_One({ subsets: ["latin-ext"], weight: ["400"], variable: "--font-fauna-one" })

// const inter = Inter({ subsets: ["latin"] });
// const kalam = Kalam({ subsets: ['devanagari'], weight: ["300", "400", "700"], variable: "--font-kalam" })
// const kalam = Poppins({ subsets: ['latin', 'latin-ext'], weight: ['900', '800', "700", "500", "400", "200"], variable: "--font-kalam" })
// const kalam = Quicksand({ subsets: ['latin', 'latin-ext'], weight: ["700", "500", "400"], variable: "--font-kalam" })
// const kalam = Quattrocento({ subsets: ['latin', 'latin-ext'], weight: ["700", "400"], variable: "--font-kalam" })

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
      <body className={`${cinzel.className} ${faunaOne.variable}`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
