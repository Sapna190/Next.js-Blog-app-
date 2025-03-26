import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeContextProvider } from "@/context/themeContext";
import ThemeProvider from "@/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Blog App",
  description: "The best Blog app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeContextProvider>
          <ThemeProvider>
        <div className="container">
          <div className="wrapper">
            <Navbar/>
            {children}
            <Footer/>
            </div>
          </div>
          </ThemeProvider>
          </ThemeContextProvider>
      </body>
    </html>
  );
}
