import type { Metadata } from "next";
import { Inter, Redressed } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import { Providers } from "./providers/providers";

const inter = Inter({ subsets: ["latin"] });
const redressed = Redressed({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyFiancee",
  description: "budgeting tool specially for you",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} `}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow ml-6 mr-6">{children}</div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
