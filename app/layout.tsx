import type { Metadata } from "next";
import localFont from "next/font/local";
import { Schibsted_Grotesk, Playfair_Display } from 'next/font/google'
import "./globals.css";

const gerlomi = localFont({
  src: "./fonts/Gerlomi.ttf",
  variable: "--font-gerlomi",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  weight: ["400", "500", "700", "800", "900"],
})


const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted-grotesk",
  weight: [ "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Sam -  First Look",
  description: "Women Deserve Better",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
            <head>
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sam - First Look" />
        <meta property="og:description" content="Women Deserve Better" />
        <meta property="og:image" content="/images/Sam Logo - Blush.svg" />
        <meta property="og:url" content="/" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sam - First Look" />
        <meta name="twitter:description" content="Women Deserve Better" />
        <meta name="twitter:image" content="/images/Sam Logo - Blush.svg" />
      </head>
      <body
        className={`${playfair.variable} ${schibstedGrotesk.variable} ${gerlomi.className} antialiased`}
      >
        {children}
       
      </body>
    </html>
  );
}
