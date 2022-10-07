import { fetchSourceSlugs } from "../../lib/fetchSourceSlugs";
import dynamic from "next/dynamic";
import Head from "next/head";
import { StaticImageData } from "next/image";
import KvImage from "../../components/kvImage";
import GetWindowSize from "../../lib/getWindowSize";
import Layout from "../../components/layout";

type PostProps = {
  slug: string;
  metadata: {
    title?: string;
    date?: string;
    kv?: StaticImageData;
  };
};

type CtxProps = {
  params?: {
    slug: string;
  };
};

export default function Post({ slug, metadata }: PostProps) {
  const Mdx = dynamic(() => import(`../../sources/${slug}/index.mdx`));
  let kvBasis = 0;
  const { width } = GetWindowSize();
  if (width < 960) {
    kvBasis = width;
  } else {
    kvBasis = 960;
  }
  return (
    <>
      <Layout title={metadata.title} ogp={metadata.kv?.src}>
        <div className="headingContainer">
          <h1>{metadata.title}</h1>
          <small>{metadata.date}</small>
        </div>
        <div>
          <KvImage img={metadata.kv} alt="hogehoge" basis={kvBasis} />
        </div>
        <article className="articleContainer">
          <Mdx />
        </article>
      </Layout>
      <style jsx>
        {`
            .headingContainer {
             width: 960px;
             text-align: center;
             margin: 10px auto;   
            }
        
          .articleContainer {
            width: 840px;
            margin: 0 auto;
            font-size: 14px;
            line-height: 22px;
          }

        @media screen and (max-width: 960px) {
            .headingContainer {
                width: 90vw;
            }
          .articleContainer {
            width: 90vw;
          }
        `}
      </style>
    </>
  );
}

export async function getStaticPaths() {
  const slugs = await fetchSourceSlugs();

  return {
    paths: slugs?.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export const getStaticProps = (ctx: CtxProps) => {
  const slug = ctx.params?.slug;

  return {
    props: {
      slug,
      metadata: require(`../../sources/${slug}/index.mdx`).metadata,
    },
  };
};
