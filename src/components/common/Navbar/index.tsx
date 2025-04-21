"use client";

import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/globals";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-colors duration-300",
        "bg-slate-800 text-white shadow"
      )}
    >
      <div className="flex items-center justify-between p-4 mx-auto max-w-7xl">
        <Link href="/" className="text-xl font-bold">
          Churchintoronto
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white sm:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className="hidden gap-6 font-medium text-white sm:flex">
          {navLinks.map(({ href, label }) => (
            <li key={label}>
              <Link
                href={href}
                className="transition-colors duration-200 hover:text-blue-300"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-4 pt-2 pb-4 font-medium text-white bg-slate-800">
          {navLinks.map(({ href, label }) => (
            <li key={label}>
              <Link
                href={href}
                className="block transition-colors duration-200 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
