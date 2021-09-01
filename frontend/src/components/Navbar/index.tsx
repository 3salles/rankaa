import { ReducedNav } from "./ReducedNav";
import { Sidebar } from "./Sidebar";

interface NavbarProps {
  role: 'user' | 'admin'
}

export function Navbar({role}: NavbarProps) {
  return (
    <>
    <Sidebar />
    <ReducedNav role={role}/>
    </>
  )
}
