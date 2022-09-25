import type { NextPage } from "next"; //どう使う？
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { fetchSourceSlugs } from "../lib/fetchSourceSlugs";
import path from "path";
import Image, { StaticImageData } from "next/image";
import Tag from "../components/tag";

type MetaData = {
  title?: string;
  kv: StaticImageData;
  date?: string;
  tag?: string;
  id: string;
};

const sourcesDir = path.join(process.cwd(), "sources");

export async function getStaticProps() {
  const slugs = await fetchSourceSlugs();

  const allMetaData = slugs.map((slug) => {
    const metadata = require(`../sources/${slug}/index.mdx`).metadata;
    return {
      ...metadata,
      id: slug,
    };
  });
  return {
    props: {
      ...allMetaData,
    },
  };
}

export default function Home(allMetaData: Array<MetaData>) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kanata Yamagishi / 山岸 奏大</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.item}>
          <div>
            {((allMetaData: Array<MetaData>) => {
              const dom = [];
              for (let id in allMetaData) {
                const metadata = { ...allMetaData[id] };
                dom.push(
                  <Link href={`work/${metadata.id}`} key={metadata.id}>
                    <div style={{ marginBottom: "30px" }}>
                      <a className="thumbnailWrapper">
                        <p>{metadata.title}</p>
                        <div>
                          <Image
                            width="1000"
                            height="10px"
                            src={metadata.kv}
                            alt={metadata.title}
                            objectFit={"cover"}
                            placeholder="blur"
                          ></Image>
                        </div>
                        <div>
                          {(() => {
                            const tags = [];
                            const str = metadata.tag;
                            console.log(str);
                            if (typeof str == "string") {
                              for (let txt of str.split(",")) {
                                tags.push(<Tag>{txt}</Tag>);
                              }
                            }
                            return tags;
                          })()}
                        </div>
                      </a>
                      <hr />
                    </div>
                  </Link>
                );
              }
              return dom;
            })(allMetaData)}
          </div>
          <ul>
            <li>
              <Link href="/research">Research</Link>
            </li>
            <li>
              <Link href="/sketch">Sketch</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
      </main>

      <footer className={styles.footer}></footer>
      <style jsx>{`
        .thumbnailWrapper:hover {
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
}
