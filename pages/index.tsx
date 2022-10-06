import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { fetchSourceSlugs } from "../lib/fetchSourceSlugs";
import Image, { StaticImageData } from "next/image";
import Tag from "../components/tag";
import noImage from "../public/img/noimage.jpeg";

type MetaData = {
  title?: string;
  kv: StaticImageData;
  date?: string;
  tag?: string;
  id: string;
};

export async function getStaticProps() {
  const slugs = await fetchSourceSlugs();
  const targets = ["rhizome-cycling", "nxpc_vol57", "nxpc_vol56"];

  const allMetaData = targets.map((slug) => {
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
        <meta name="description" content="Design Engineer, Graphic Designer" />
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
                            src={metadata.kv ? metadata.kv : noImage}
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
