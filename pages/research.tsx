import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Research: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Research</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul>
        <li>
          <a href="https://ripple-shock-17d.notion.site/eb8211c6a2cf46079634ca05bec04e8b">
            チームワーク虎の巻
          </a>
        </li>
        <li>
          <a href="https://ripple-shock-17d.notion.site/65d1a0a639a44f03b94fe6139ef1128d">
            創作のためのアーカイブを考える
          </a>
        </li>
        <li>
          <a href="https://ripple-shock-17d.notion.site/11a5fbf694f04106ae9c48e091134aa7">
            使われ方の生態系
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Research;
