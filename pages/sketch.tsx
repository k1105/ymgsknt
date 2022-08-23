import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Sketch: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sketch</title>
        <meta name="description" content="Sketch" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul>
        <li>
          <a href="https://k1105.github.io/eee_openhouse_2022/">
            Digitalize(IAMAS OpenHouse2022)
          </a>
        </li>
        <li>
          <a href="https://k1105.github.io/0605_eee_prototype/">
            Tiny Interaction
          </a>
        </li>
        <li>
          <a href="https://www.pinterest.jp/pin/701576448218364635/">
            パン屋へ行脚
          </a>
        </li>
      </ul>
      <div className="memo">
        <h3>About This Page</h3>
        <p>
          過去の独立した個人制作や実験として簡易的に実装したプロトタイプなどをまとめておく場所。北千住デザインさんのホームページにあるSketchと同様の位置付け。
        </p>
        <h3>Concern</h3>
        <ul>
          <li>
            画像一枚の作品をどのように見せるか？個人制作と実験をそもそも並列に扱っていいのか？でもページ数が増えていくことは避けたい。
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sketch;
