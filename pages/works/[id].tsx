import Layout from "../../components/layout";
import { getAllWorkIds, getWorkData } from "../../lib/works";
import Image from "next/image";

type Params = {
  /* このへん動いてはいるものの、なんでこうしないとエラーを吐くのかわからない */
  /* paramsはgetStaticPropsの引数として任意に付けられる変数として扱いたいのだが...型の中でプロパティとして宣言しないと怒られる. */
  /* 「型の中でプロパティとして宣言しないと」と言ったが、より厳密にいうなら「そうしたら今の所うまくいった」だけ */
  params: {
    id: string;
  };
};

type WorkData = {
  workData: {
    title: string;
    id: string;
    date: string;
    kv: string;
    contentHtml: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const workData = await getWorkData(params.id);
  return {
    props: {
      workData,
    },
  };
}

export default function Work({ workData }: WorkData) {
  return (
    <Layout>
      {workData.title}
      <br />
      {workData.id}
      <br />
      {workData.date}
      <br />
      <div style={{ height: "500px", width: "100%" }}>
        {(() => {
          if (typeof workData.kv !== "undefined") {
            const img = workData.kv.split(","); //カンマ区切りで複数枚指定可能
            return (
              <Image
                src={img[0]}
                alt="keyVisual"
                layout="fill"
                objectFit="contain"
              />
            );
          }
        })()}
      </div>

      <div dangerouslySetInnerHTML={{ __html: workData.contentHtml }} />
    </Layout>
  );
}
export async function getStaticPaths() {
  const paths = getAllWorkIds();
  return {
    paths,
    fallback: false,
  };
}
