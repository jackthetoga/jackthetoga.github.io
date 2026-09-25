import type { Metadata } from "next";
import {
  Anton,
  Archivo,
  IBM_Plex_Mono,
  Inter,
  Jost,
  Libre_Caslon_Text,
} from "next/font/google";
import localFont from "next/font/local";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { defaultDesign } from "@/lib/designs";
import { site } from "@/lib/site";
import "./globals.css";

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  preload: false,
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  preload: false,
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  style: ["normal", "italic"],
  preload: false,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  preload: false,
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  preload: false,
});

const caslon = Libre_Caslon_Text({
  variable: "--font-caslon",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  preload: false,
});

const cmu = localFont({
  variable: "--font-cmu",
  src: [
    {
      path: "./fonts/cmu-serif-500-roman.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/cmu-serif-500-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/cmu-serif-700-roman.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/cmu-serif-700-italic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  adjustFontFallback: "Times New Roman",
  preload: false,
});

const fontVariables = [plexMono, anton, archivo, inter, jost, caslon, cmu]
  .map((font) => font.variable)
  .join(" ");

export const metadata: Metadata = {
  metadataBase: new URL("https://jackthetoga.github.io"),
  title: {
    default: site.title,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.name, url: site.github }],
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    locale: "en_US",
    images: ["/images/jack-white.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/images/jack-white.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-design={defaultDesign}
      className={fontVariables}
    >
      <body>
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
