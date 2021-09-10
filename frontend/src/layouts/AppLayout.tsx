import { ReactNode } from "react";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Navbar />
    </>
  );
}
