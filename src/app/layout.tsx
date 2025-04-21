import type { Metadata } from "next";
import "./globals.css";
import LayoutWrapper from "@/components/common/LayoutWrapper";

export const metadata: Metadata = {
  title: "Church in Toronto | Home",
  description:
    "Church in Toronto's mission is to lead people into a life-changing relationship with Jesus. We have services on Sunday at 10:00am. Come join us.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
