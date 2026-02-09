import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Desafio dos 21 dias",
  description: "Transforme sua saúde em três semanas",
  icons: {
    icon: "/cropped-Prancheta-1-copia-2-e1726079055115.png",
    apple: "/cropped-Prancheta-1-copia-2-e1726079055115.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="icon"
          href="/cropped-Prancheta-1-copia-2-e1726079055115.png"
          type="image/png"
        />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
