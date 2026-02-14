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
  metadataBase: new URL("https://TechWriterP.github.io/chintakara-chawadi/"),
  title: "ಚಿಂತಕರ ಚಾವಡಿ - ಸೋಮಶೇಖರ ಇಟಗಿ",
  description: "ಕನ್ನಡ ಸಾಹಿತ್ಯ ಲೋಕದಲ್ಲಿ ಕವನಗಳು, ಕಥೆಗಳು ಮತ್ತು ಲೇಖನಗಳ ಸಂಗ್ರಹ. ಸೋಮಶೇಖರ ಇಟಗಿ ಅವರ ಅಧಿಕೃತ ಜಾಲತಾಣ.",
  openGraph: {
    title: "ಚಿಂತಕರ ಚಾವಡಿ - ಸೋಮಶೇಖರ ಇಟಗಿ",
    description: "ಕನ್ನಡ ಕವನಗಳು, ಸುಂದರ ಕಥೆಗಳು ಮತ್ತು ವಿಚಾರಪೂರ್ಣ ಲೇಖನಗಳ ಸಂಗ್ರಹ.",
    url: "https://TechWriterP.github.io/chintakara-chawadi/",
    siteName: "ಚಿಂತಕರ ಚಾವಡಿ",
    locale: "kn_IN",
    type: "website",
    images: [
      {
        url: "/author.jpg",
        width: 800,
        height: 800,
        alt: "ಸೋಮಶೇಖರ ಇಟಗಿ",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kn" suppressHydrationWarning>
      <body
        suppressHydrationWarning
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
