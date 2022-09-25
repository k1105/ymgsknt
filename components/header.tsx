import React from "react";
import Link from "next/link";
export const siteTitle = "Next.js Sample Website";

export default function Header() {
  return (
    <header style={{ marginBottom: "50px" }}>
      <div className="header-container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "90vw",
            margin: "0 auto",
          }}
        >
          <p>KANATA YAMAGISHI (((UnderConstruction)))</p>

          <div>
            <Link href="/">
              <p>Database</p>
            </Link>
            <Link href="/about">
              <p>About</p>
            </Link>
          </div>
        </div>
        <hr style={{ margin: "0" }} />
      </div>
      <style jsx>{`
        .header-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          z-index: 99;
          background: white;
        }
        @media (prefers-color-scheme: dark) {
          .header-container {
            background: black;
          }
        }
      `}</style>
    </header>
  );
}
