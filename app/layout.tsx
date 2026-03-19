import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Guia de Casinos Online Licenciados em Portugal 2026",
  description: "Plataforma informativa independente para análise e comparação de casinos online autorizados pelo SRIJ em Portugal. Avaliações, bónus e jogo responsável.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
