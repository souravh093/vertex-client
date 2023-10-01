import { Providers } from "@/redux/providers";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Other/Container/Navbar/Navbar";
import Footer from "@/components/Other/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vertex | Home",
  description: "Tech base blog site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
