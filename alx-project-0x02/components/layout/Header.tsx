import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">SoloForge</h2>

        <div className="flex gap-6">
          <Link href="/" className="text-gray-700 hover:text-black">
            Home
          </Link>

          <Link href="/home" className="text-gray-700 hover:text-black">
            App Home
          </Link>

          <Link href="/about" className="text-gray-700 hover:text-black">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
