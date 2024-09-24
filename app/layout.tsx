import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const manrope = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Podcastr",
  description: "Generate your podcasts using AI",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">  
          <body className={`${manrope.className}`}>
              {children}
          </body>
      </html>
  );
}