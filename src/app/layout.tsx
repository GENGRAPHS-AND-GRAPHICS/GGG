import type { Metadata } from "next";
import { Inter, Outfit, Geist, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const garamond = Cormorant_Garamond({ 
  subsets: ['latin'], 
  variable: '--font-serif',
  weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gengraphsandgraphics.com"),
  title: {
    default: "Gengraphs & Graphics | Premium Power BI & Graphic Design Services",
    template: "%s | Gengraphs & Graphics"
  },
  description: "High-end corporate Power BI templates, interactive executive dashboards, and professional graphic and UI/UX design solutions. Founded by Mohit Bhardwaj.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Gengraphs & Graphics | Premium Power BI & Graphic Design Services",
    description: "High-end corporate Power BI templates, interactive executive dashboards, and professional graphic and UI/UX design solutions. Founded by Mohit Bhardwaj.",
    url: "https://gengraphsandgraphics.com",
    siteName: "Gengraphs & Graphics",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gengraphs & Graphics | Premium Power BI & Graphic Design Services",
    description: "High-end corporate Power BI templates, interactive executive dashboards, and professional graphic and UI/UX design solutions. Founded by Mohit Bhardwaj.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { Navbar } from "@/components/Navbar";
import { Providers } from "@/components/Providers";
import { Footer } from "@/components/Footer";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full dark", "antialiased", inter.variable, geist.variable, outfit.variable, garamond.variable, "font-sans")}
    >
      <body className="min-h-full flex flex-col text-foreground font-sans overflow-x-hidden transition-colors duration-300">
        <ThemeProvider>
          <Providers>
            <Navbar />
            <div className="flex-grow flex flex-col">{children}</div>
            <Footer />
            <Toaster richColors closeButton position="top-right" theme="dark" />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
