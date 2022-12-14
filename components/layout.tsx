import React from "react";
import Head from "next/head";
type Props = {
  children?: React.ReactNode;
  ogp?: string;
  title?: string;
};

export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, ogp, title }: Props) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="description" content="Kanata Yamagishi, design engineer" />
        <meta
          name="og:description"
          content="Kanata Yamagishi, design engineer"
        />
        <meta property="og:image" content={ogp} />
        <meta name="og:title" content={`${title} | Kanata Yamagishi`} />
        <meta name="twitter:site" content="@ymgsknt" />
        <title>{title} | Kanata Yamagishi</title>
      </Head>
      {children}
    </div>
  );
}
