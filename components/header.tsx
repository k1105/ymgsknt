import React from "react";
import Link from "next/link";
export const siteTitle = "Next.js Sample Website";

export default function Header() {
  return (
    <header style={{ marginBottom: "100px" }}>
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "90vw",
            margin: "0 auto",
          }}
        >
          <p>KANATA YAMAGISHI (((UnderConstruction)))</p>

          <div className="router">
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
        .container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          z-index: 99;
          background: white;
        }

        .router {
          display: flex;
          width: 150px;
          justify-content: space-between;
        }

        @media (prefers-color-scheme: dark) {
          .container {
            background: black;
          }
        }
      `}</style>
    </header>
  );
}
