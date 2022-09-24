import React from "react";
import Link from "next/link";
export const siteTitle = "Next.js Sample Website";

export default function Header() {
  return (
    <header>
      <p>KANATA YAMAGISHI</p>

      <Link href="/">
        <a>Database, </a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </header>
  );
}
