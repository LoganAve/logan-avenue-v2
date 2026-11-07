"use client";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-[0_4px_18px_rgba(80,55,45,0.08)] flex items-center justify-between px-8 py-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
        <Link href="/" className="flex h-12 items-center">
          <Image
            src="/images/logan-ave-horizontal-black-02.png"
            alt="Logan Avenue Creative Logo"
            width={300}
            height={100}
            className="h-auto w-[300px] object-contain"
            priority
          />
        </Link>

        {/* Mobile Menu */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="ml-auto flex items-center justify-center md:hidden"
        >
          <HiMenu size={26} />
        </button>

        {/* Desktop Menu */}
        <nav className="ml-auto hidden items-center gap-8 font-sans text-xs tracking-[0.18em] md:flex">
          <Link
            href="/work"
            className={`transition-colors duration-300 hover:text-clay ${
              pathname.startsWith("/work") ? "text-clay" : "text-black"
            }`}
          >
            WORK
          </Link>

          <Link
            href="/about"
            className={`transition-colors duration-300 hover:text-clay ${
              pathname === "/about" ? "text-clay" : "text-black"
            }`}
          >
            ABOUT
          </Link>
        </nav>

        <Link
          href="/contact"
          className="ml-4 hidden bg-clay px-5 py-3 text-cream md:block"
        >
          LET&apos;S WORK TOGETHER
        </Link>
      </header>
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[100] min-h-screen bg-white transition-transform duration-10 #00 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
          className="absolute left-[calc(100vw-3.75rem)] top-6 z-10 text-black"
        >
          <HiX size={28} />
        </button>
        <nav className="absolute left-0 top-40 flex w-screen flex-col items-center gap-8 text-center font-sans text-sm tracking-[0.16em]">
          <Link
            href="/work"
            onClick={() => setMenuOpen(false)}
            className={`w-full py-4 text-center transition-colors duration-300 hover:bg-rose/20 active:bg-rose/30 ${
              pathname === "/work" ? "text-clay" : "text-black"
            }`}
          >
            WORK
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className={`w-full py-4 text-center transition-colors duration-300 hover:bg-rose/20 active:bg-rose/30 ${
              pathname === "/about" ? "text-clay" : "text-black"
            }`}
          >
            ABOUT
          </Link>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className={`w-full py-4 text-center transition-colors duration-300 hover:bg-rose/20 active:bg-rose/30 ${
              pathname === "/contact" ? "text-clay" : "text-black"
            }`}
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </>
  );
}
