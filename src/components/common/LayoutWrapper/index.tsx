"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isStudio = pathname.startsWith("/admin");

  return (
    <>
      {!isStudio && <Navbar />}
      {children}
      {!isStudio && <Footer />}
    </>
  );
}
