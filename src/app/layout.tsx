import { Header } from "@/components/header";
import type { Metadata } from "next";
import "./globals.css";
import { fonts } from "@/fonts";
import { Footer } from "@/components/footer";
import { SmoothScrollProvider } from "@/providers/smooth-scroll-provider";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/providers/theme-provider";

export const metadata: Metadata = {
  title: {
    template: "%s | Portfolio",
    default: "Portfolio | Ratul",
  },
  description: "Hello there, welcome to  my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body className={`${fonts} antialiased`}>
        <SmoothScrollProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
            <Footer />
            <Toaster />
          </ThemeProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
