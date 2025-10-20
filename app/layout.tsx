import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// 👇 import animation wrapper
import { ClientLayout } from "@/components/animations";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Court Click - Web App",
  description: "Court Click Website and Web Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* 👇 Wrap everything in ClientLayout for smooth page transitions */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
