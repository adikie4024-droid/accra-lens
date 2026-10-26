import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Accra Lens — Ghana’s modern news magazine",
    template: "%s — Accra Lens",
  },
  description:
    "Accra Lens is a Ghanaian online magazine covering business, technology, lifestyle and politics from Accra.",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const today = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Africa/Accra",
  }).format(new Date());

  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-black focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to stories
        </a>
        <Header today={today} />
        <main id="content" className="mx-auto max-w-6xl px-5 py-8 sm:py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
