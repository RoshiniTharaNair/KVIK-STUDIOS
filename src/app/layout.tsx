import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import Providers from "@/lib/providers";

// const inter = Inter({ subsets: ["latin"] });
const eb_garamond = EB_Garamond({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "KVIK STUDIOS",
  description: "Kvik Studios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={eb_garamond.className}>
        <Providers >
        <Nav />
        {children}
        <Footer />
        </Providers>
        </body>
    </html>
  );
}
