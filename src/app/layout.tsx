import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import LeftMenu from "@/components/leftMenu/LeftMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BELONE AI social media app",
  description: "Social media app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="flex ">
            <div className="fixed z-50 bottom-0 left-0 xl:fixed  xl:w-max xl:left-0 xl:top-0 w-full">
              <LeftMenu type="home" />
            </div>
            <div className="w-full ">
              <div className="w-full bg-white md:px-8 lg:px-16 xl:px-32 2xl:px-64">
                <Navbar />
              </div>
              <div className="relative bg-white min-h-screen   md:px-8 lg:px-16 xl:px-32 2xl:px-64">
                {children}
              </div>
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
