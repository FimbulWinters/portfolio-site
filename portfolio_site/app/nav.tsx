"use client";
import Link from "next/link";
import { useState } from "react";
import Menu from "./menu";

export default function Navigation() {
  7;
  console.log("hello from nav");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 w-screen  h-22 bg-background text-secondaryText">
      <p className="text-xs my-3">Alex Winters: junior developer</p>
      <div className="flex flex-row justify-between mx-2 mb-3">
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
      </div>
    </nav>
  );
}
