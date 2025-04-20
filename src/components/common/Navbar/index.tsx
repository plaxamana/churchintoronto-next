"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/globals";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-md">
      <div className="flex items-center justify-between p-4 mx-auto max-w-7xl">
        <Link href="/" className="text-xl font-bold">
          Churchintoronto
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 sm:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className="hidden gap-6 font-medium text-gray-800 sm:flex">
          {navLinks.map(({ href, label }) => (
            <li key={label}>
              <Link
                href={href}
                className="transition-colors duration-200 hover:text-blue-600"
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
        <ul className="flex flex-col gap-4 px-4 pt-2 pb-4 font-medium text-gray-800 bg-white">
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
