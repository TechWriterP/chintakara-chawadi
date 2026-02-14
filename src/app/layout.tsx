import type { Metadata } from "next";
import { Noto_Sans_Kannada } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const notoSans = Noto_Sans_Kannada({
  variable: "--font-noto-sans-kannada",
  subsets: ["kannada"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Kannada Author Website",
  description: "Showcasing poems, stories, and articles by the author.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kn" suppressHydrationWarning>
      <body
        className={`${notoSans.variable} antialiased font-sans bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 flex flex-col min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
