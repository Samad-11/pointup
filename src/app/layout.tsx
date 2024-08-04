import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";



const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ['latin', 'latin-ext'], weight: ['900', '800', "700", "500", "400", "200"], variable: "--font-poppins" })

export const metadata: Metadata = {
  title: {
    default: "Point Up - Earn while Spending",
    template: "%s | Point Up - Earn While Spending",
  },
  description: "Unlock the Benefits You Deserve with Point Up - Stop missing out on valuable rewards. We help you maximize your credit card points and book amazing travel experiences.",
  applicationName: "Point Up",
  creator: "Abdus Samad",
  openGraph: {
    title: "Point Up",
    description: "Unlock the Benefits You Deserve with Point Up - Stop missing out on valuable rewards. We help you maximize your credit card points and book amazing travel experiences.",
    url: process.env.BASE_URL || "https://pointup.vercel.app",
    siteName: "Point Up",
    type: "website",
    images: [
      {
        width: 1200,
        height: 630,
        url: `${process.env.BASE_URL}/images/opengraph.png`
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="mytheme" className="no-scrollbar bg-black">
      <body id="body" className={`${inter.className} ${poppins.variable} `}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
