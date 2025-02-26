"use client";

import "./globals.css";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Footer, Header } from "@/components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <NextUIProvider className="flex h-screen flex-col">
          <NextThemesProvider attribute="class" defaultTheme="dark">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </NextThemesProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
