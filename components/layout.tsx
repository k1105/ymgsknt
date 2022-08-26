import React from "react";
import Head from "next/head";
type Props = {
  children?: React.ReactNode;
  ogp?: string;
};

export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, ogp }: Props) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta property="og:image" content={ogp} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {children}
    </div>
  );
}
