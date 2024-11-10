import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "American Election",
  description: "Follow the 2024 American election results",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
