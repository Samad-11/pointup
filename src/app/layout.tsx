import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";



const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ['latin', 'latin-ext'], weight: ['900', '800', "700", "500", "400", "200"], variable: "--font-poppins" })

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
      <body id="body" className={`${inter.className} ${poppins.variable}`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
