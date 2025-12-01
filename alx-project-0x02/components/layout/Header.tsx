import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full p-4 bg-gray-100 flex gap-4">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </header>
  );
}
