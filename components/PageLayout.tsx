"use client";

import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface PageLayoutProps {
  children: ReactNode;
  hero?: ReactNode;
  showHero?: boolean;
}

export default function PageLayout({ 
  children, 
  hero, 
  showHero = true 
}: PageLayoutProps) {
  return (
    <>
      <Header />
      {showHero && hero}
      <main>{children}</main>
      <Footer />
    </>
  );
}