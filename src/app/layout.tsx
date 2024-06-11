import "./globals.scss";
import { Golos_Text } from "next/font/google";
import type { Metadata } from "next";
import { Navbar } from "../components/ui/navbar/Navbar";

const font = Golos_Text({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Main Page",
  description: "Main Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
