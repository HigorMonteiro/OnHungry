import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";


const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hungry? Find the best restaurants in your city!",
  description: "Find the best restaurants in your city with Front on Food!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={open_sans.className}>{children}</body>

    </html>
  );
}
