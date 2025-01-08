import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppHeader } from "@/components/blocks/AppHeader";
import "@/assets/styles/_index.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ivan Ontiveros - Software Engineer",
  description:
    "Showcasing the portfolio and projects of Ivan Ontiveros, a skilled software engineer specializing in web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased appContainer`}
      >
        <AppHeader />
        <main>
          <div className="containerContent">{children}</div>
        </main>
        <footer>
          <div className="containerContent">
            &copy; 2024-2025 Ivan Ontiveros. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
