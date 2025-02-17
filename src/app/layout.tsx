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
        <NextUIProvider className="flex min-h-screen flex-col">
          <NextThemesProvider attribute="class" defaultTheme="dark">
            <Header />
            <main className="grow">{children}</main>
            <Footer />
          </NextThemesProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
