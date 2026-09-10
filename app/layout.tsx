import type { Metadata } from "next";
import "./globals.css";

import { Montserrat } from "next/font/google";
import WelcomePageNavbar from "./components/WelcomePageNavbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Prossfora",
  description: "App in progress",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        {children}
        <div>
          <p>Footer</p>
        </div>
      </body>
    </html>
  );
}
