import { ReactNode } from "react";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";

interface AppLayoutProps {
  children: ReactNode;
  role: 'user' | 'admin'
}

export function AppLayout({ children, role }: AppLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Navbar role={role} />
    </>
  );
}
