import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Nani Receptjei",
  description: "Nani receptes oldala.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${poppins.className} h-screen`}>
      <Providers>
        <main>
          {children}
        </main>
      </Providers>
    </body>
  </html>
  );
}
