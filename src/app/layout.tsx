import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Toaster } from "@/components/ui/toaster";
import { fonts } from "@/fonts";
import { SmoothScrollProvider } from "@/providers/smooth-scroll-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import type { Metadata } from "next";
import "./globals.css";
import MouseTrail from "@/components/mouse-trial";

export const metadata: Metadata = {
  title: {
    template: "%s | Portfolio",
    default: "Portfolio | Home",
  },
  description:
    "Hello there, my name is Ratul. I'm A full stack web developer, spacialize in React & Next.Js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fonts} flex flex-col pt-20 antialiased`}>
        <SmoothScrollProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <MouseTrail/>
            <Toaster />
          </ThemeProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
