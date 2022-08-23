import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <header>
        <Link href="/">
          <a>
            Home
            <span className="memo">
              &lt;-
              これ_app.tsxにかかないでホームの時は表示させないようにハンドリング
            </span>
          </a>
        </Link>
      </header>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
