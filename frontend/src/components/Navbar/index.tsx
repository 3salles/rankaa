import { ReducedNav } from "./ReducedNav";
import { Sidebar } from "./Sidebar";

interface NavbarProps {
  isAdmin?: boolean;
}

export function Navbar({ isAdmin }: NavbarProps) {
  return (
    <>
      <Sidebar />
      <ReducedNav isAdmin={isAdmin} />
    </>
  );
}
