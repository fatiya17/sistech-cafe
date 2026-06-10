import { Bricolage_Grotesque, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const fontBricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const fontBeVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Sistech Cafe | Every cup, brewed with heart.",
  description: "Sistech Cafe website is a warm digital portal that invites every visitor to discover, explore, and fall in love with Sistech Cafe.",
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fontBricolage.variable} ${fontBeVietnam.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow pt-14 md:pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
