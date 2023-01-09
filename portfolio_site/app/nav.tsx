"use client";
import Link from "next/link";
import { useState } from "react";
import Menu from "./menu";

export default function Navigation() {
  7;
  console.log("hello from nav");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 w-screen grid grid-cols-3 h-18 bg-background text-secondaryText">
      <p className="text-xs">Alex Winters: junior developer</p>
      <Link href="/">Home</Link>
      <button
        className="text-sm"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        menu
      </button>
      {isOpen ? <Menu isOpen={isOpen} setIsOpen={setIsOpen} /> : null}
    </nav>
  );
}
