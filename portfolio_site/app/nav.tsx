"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
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
    </nav>
  );
}