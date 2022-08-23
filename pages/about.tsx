import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>おれは山岸　岐阜に住んでる</p>
      <p>
        notionとかにちょっとずつ書き込んでいって歩きながらとか書き進めていきます
      </p>
      <a href="https://ripple-shock-17d.notion.site/About-088f2c6e41184775b02a3c6f49c5ced8">
        &gt; notion &lt;
      </a>
    </div>
  );
};

export default About;
