import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kanata Yamagishi Works</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Kanata Yamagishi&apos;s Excellent(しなさい) Portfolio</h1>
      <main className={styles.main}>
        <div className={styles.item}>
          <h2>はじめに</h2>
          <p className={styles.paragraph}>
            半年くらい前からポートフォリオを作成したいという気持ちが湧き上がってはいたものの、なかなか手が出せずにいた。
            <br />
            誰がみるのか、どのように閲覧するのか、どんなコンテンツが入るのか、今この瞬間だけではなく今後も耐えうるテンプレートは如何様に用意するべきか...{" "}
            <br />
            一方が立っても一方が立たない状態が続く中で、どうやらこれは頭で考えるにはあまりに複雑な問題構造だぞという結論に至ったのがつい先日のこと。
            <br />
            そこでもうwebページとして立ち上げてしまい、少しずつ書き換えていくというスタイルで問題を解きほぐしながら作成していくことに決めた。
            <br />
            また、その制作過程からデプロイしてしまい、移動中やふとした時に閲覧し、ああこれはひどいwebサイトだ、ということを日々意識しながら生活することにした。
          </p>
          <p>
            見てて気になるな〜とかある人はここから -&gt;{" "}
            <a href="https://github.com/k1105/ymgsknt">github</a>
          </p>
        </div>
        <div className={styles.item}>
          <h2>Pages</h2>

          <ul>
            <li>
              <Link href="/research">Research</Link>
            </li>
            <li>
              {" "}
              Works
              <span className="memo">
                (mdファイルからデコードする機能を実装中)
              </span>
              <ul>
                <li>
                  <Link href="/works/nxpc-vol55-main-visual">
                    NxPC.Live vol.55 メインビジュアル制作
                  </Link>
                </li>
                <li>NxPC.Live vol.56 メインビジュアル制作</li>
                <li>NxPC.Live vol.57 メインビジュアル制作</li>
                <li>School For Regenerative Design 展示物制作</li>
                <li>個人制作: ChiritsumoChallenge</li>
              </ul>
            </li>
            <li>
              <Link href="/sketch">Sketch</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>

        <div className={styles.item}>
          <h2>Work in Progress</h2>
          <p>ポートフォリオ制作に関連したnotionリンクはこちら</p>
          <ul>
            <li>
              <a href="https://ripple-shock-17d.notion.site/Subject-9817da8d5fe44b81b969fe904d30e77c">
                Subject
              </a>
            </li>
            <li>
              <a href="https://ripple-shock-17d.notion.site/Style-1570bc84ac004e57a6b53dfdedebb0cf">
                Style
              </a>
            </li>
            <li>
              <a href="https://ripple-shock-17d.notion.site/Tech-1ec6fdea3e5e4e5cb06d6158fd1bf0de">
                Tech
              </a>
            </li>
            <li>
              <a href="https://ripple-shock-17d.notion.site/Contents-e241f7816bbe4118bc55cb32f5e2c84e">
                Contents
              </a>
            </li>
            <li>
              <a href="https://ripple-shock-17d.notion.site/Memo-7aebaf03fa57416f91ea5749e35adfd3">
                Memo
              </a>
            </li>
            <li>
              <a href="https://ripple-shock-17d.notion.site/References-81f416bbc11a4c6a80f0e4c1552af734">
                References
              </a>
            </li>
          </ul>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
