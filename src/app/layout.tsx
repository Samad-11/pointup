import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import { GoogleAnalytics } from "@next/third-parties/google"



const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ['latin', 'latin-ext'], weight: ['900', '800', "700", "500", "400", "200"], variable: "--font-poppins" })

export const metadata: Metadata = {
  title: {
    default: "Point Up - Earn while Spending - Credit card rewards",
    template: "%s | Point Up-Earn While Spending-Credit card rewards",
  },
  description: "Unlock the Benefits You Deserve with Point Up. We help you maximize your credit card points and book amazing travel experiences. | Point Up-Credit Card rewards",
  applicationName: "Point Up",
  creator: "Abdus Samad",
  openGraph: {
    title: "Point Up",
    description: "Unlock the Benefits You Deserve with Point Up. We help you maximize your credit card points and book amazing travel experiences.",
    url: process.env.BASE_URL || "https://pointup.co.in",
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
      <GoogleAnalytics gaId="G-HT4XZXY74C" />
    </html>
  );
}
