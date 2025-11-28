import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// 1. 配置字体 (Next.js 会自动优化加载)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

// 2. 配置网页标题 (Metadata)
export const metadata: Metadata = {
  title: "AI Visual Design Master",
  description: "Create stunning AI visual prompts with precision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. 将字体变量注入到 body 中 */}
      <body
        className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} antialiased bg-[#050505]`}
      >
        {children}
      </body>
    </html>
  );
}