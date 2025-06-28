import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"

// Import components
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import {ThemeProvider} from "@/components/ThemeProvider"




const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
})


export const metadata: Metadata = {
  title: "Chrishna Photography",
  keywords: ["Photography", "Portfolio", "Gallery", "Contact"],
  authors: [{ name: "Chrishna" }],
  description: "Explore the stunning portfolio of Chrishna Photography, showcasing breathtaking images and professional photography services.",
  creator: "Wander De Los Santos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.variable} antialiased`}
      >
     <ThemeProvider attribute="class" defaultTheme="light">
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
      </body>
    </html>
  );
}
