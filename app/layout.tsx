import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Combly - AI-Powered Workflow Automation",
  description:
    "Build intelligent automation workflows with visual selectors, AI assistance, and cross-website execution.",
  openGraph: {
    title: "Combly - AI-Powered Workflow Automation",
    description:
      "Build intelligent automation workflows with visual selectors, AI assistance, and cross-website execution.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
