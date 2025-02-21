"use client"; // Required for client-side effects

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import "./globals.css";
import { Inter } from "next/font/google";
import { metadata } from "./metadata"; // Import metadata separately

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "G-1NE5SV7M4V", {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return (
    <html lang="en">
      <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <style>
          {`
            /* Ensure smooth font loading with font-display: swap */
            @font-face {
              font-family: "Inter";
              font-display: swap;
            }
          `}
        </style>
      </head>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-1NE5SV7M4V"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1NE5SV7M4V', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
