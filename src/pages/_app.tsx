import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import Navbar from "@/components/navbar/Navbar";
import { LangProvider } from "@/context/LangContext";
import Footer from "@/components/footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <ThemeProvider>
        <LangProvider>
          <div>
            <Navbar />
            <div className="container">
              <Component {...pageProps} />
            </div>
            <Footer />
          </div>
        </LangProvider>
      </ThemeProvider>
    </ThemeContextProvider>
  );
}
