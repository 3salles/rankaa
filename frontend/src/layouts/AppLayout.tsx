import { ReactNode } from "react";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";

interface AppLayoutProps {
  children: ReactNode;
  isAdmin?: boolean;
}

export function AppLayout({ children, isAdmin }: AppLayoutProps) {
  return (
    <>
      <Header isAdmin={isAdmin} />
      {children}
      <Navbar isAdmin={isAdmin} />
    </>
  );
}
