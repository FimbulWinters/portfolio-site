"use client";
import Link from "next/link";
import { GrFormClose } from "react-icons/gr";
interface MenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Menu({ isOpen, setIsOpen }: MenuProps) {
  return (
    <section className="flex">
      <div className="absolute top-0 right-0 h-screen w-32 flex flex-col bg-menuColour text-textColour shadow-lg">
        <div className="fixed top-4 right-4">
          <button
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <GrFormClose />
          </button>
        </div>
        <section className="flex flex-col space-y-8 mt-16 ml-4">
          <div>
            <button
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <Link href="/portfolio">Portfolio</Link>
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <Link href="/about">About me</Link>
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <Link href="/cv">CV</Link>
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <Link href="/contact">Contact</Link>
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}
