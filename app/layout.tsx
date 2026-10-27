import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Curtain from "@/components/layout/Curtain";
import PageTransition from "@/components/layout/PageTransition";
import { BookingProvider } from "@/components/booking/BookingProvider";
import Overlay from "@/components/booking/Overlay";
import BookingDrawer from "@/components/booking/BookingDrawer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dmsans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "VARMA AURA — A place to belong",
    template: "%s — VARMA AURA",
  },
  description:
    "VARMA AURA is a 10-acre resort living destination near Bobbili, Andhra Pradesh — where nature, recreation and community come together.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="overflow-x-hidden bg-cream font-sans text-ink antialiased">
        <BookingProvider>
          {/* <Curtain /> */}
          <Navbar />
          <PageTransition>
            <main>{children}</main>
            <Footer />
          </PageTransition>
          <Overlay />
          <BookingDrawer />
        </BookingProvider>
      </body>
    </html>
  );
}
