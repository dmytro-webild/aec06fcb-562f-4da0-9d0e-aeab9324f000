import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Playfair_Display } from "next/font/google";
import { Lato } from "next/font/google";



export const metadata: Metadata = {
  title: 'Aureus | Strategic Insights & Consulting',
  description: 'Premium thought leadership, strategic consulting, and digital products for enterprise leaders. Transform strategy into impact.',
};

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const lato = Lato({
  variable: "--font-lato",  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${playfairDisplay.variable} ${lato.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
          }}
        />
        </body>
      </ServiceWrapper>
    </html>
  );
}
