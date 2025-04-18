"use client";

import Link from "next/link";
import { Facebook, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-6 py-12 text-gray-400 bg-slate-800">
      <div className="grid items-center max-w-6xl gap-8 mx-auto md:grid-cols-2">
        {/* Left: Logo & Links */}
        <div className="space-y-4">
          <Link href="/" className="block text-xl font-bold text-white">
            churchintoronto
          </Link>

          <nav className="flex flex-wrap gap-4 text-sm">
            <Link href="/about" className="transition hover:text-white">
              About Us
            </Link>
            <Link href="/sermons" className="transition hover:text-white">
              Sermons
            </Link>
            <Link href="/contact" className="transition hover:text-white">
              Contact
            </Link>
            <Link href="/give" className="transition hover:text-white">
              Give
            </Link>
          </nav>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center justify-start gap-4 md:justify-end">
          <Link
            href="https://facebook.com/churchintoronto"
            target="_blank"
            aria-label="Facebook"
            className="transition hover:text-white"
          >
            <Facebook className="w-5 h-5" />
          </Link>
          <Link
            href="https://instagram.com/churchintoronto"
            target="_blank"
            aria-label="Instagram"
            className="transition hover:text-white"
          >
            <Instagram className="w-5 h-5" />
          </Link>
          <Link
            href="mailto:info@churchintoronto.com"
            aria-label="Email"
            className="transition hover:text-white"
          >
            <Mail className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Bottom line */}
      <div className="pt-6 mt-10 text-sm text-center border-t border-slate-700">
        © {new Date().getFullYear()} Church in Toronto. All rights reserved.
      </div>
    </footer>
  );
}
