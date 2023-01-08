import { useState } from "react";
import Menu from "./menu";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-screen grid grid-cols-2 h-18 bg-background text-secondaryText">
      <p className="text-xs">Alex Winters: junior developer</p>
      <button className="text-sm">menu</button>
      <Menu />
    </nav>
  );
}
