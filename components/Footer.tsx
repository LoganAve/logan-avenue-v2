import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white text-black shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
      <div className="px-11 py-8">
        {/* Top */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between md:gap-0">
          {/* Brand */}

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

          {/* Navigation */}
          <nav className="hidden items-center gap-8 font-sans text-[10px] tracking-[0.18em] md:flex">
            <Link href="/work">WORK</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/contact">CONTACT</Link>
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-7 grid grid-cols-1 gap-5 border-t border-black/10 pt-5 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-0">
          {/* Copyright */}
          <p className="text-center font-sans text-[10px] text-black/50 md:text-left">
            © 2026 Logan Avenue. All rights reserved.
          </p>

          {/* Social */}
          <div className="flex items-center justify-center gap-6 border-0 px-0 md:border-x md:border-black/15 md:px-8">
            <a href="#" aria-label="Instagram">
              <FaInstagram size={16} />
            </a>

            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn size={16} />
            </a>
          </div>

          {/* Tagline */}
          <p className="justify-self-center font-serif text-sm italic text-black/60 md:justify-self-end">
            Designing what&apos;s next.
          </p>
        </div>
      </div>
    </footer>
  );
}
