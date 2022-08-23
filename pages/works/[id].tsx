import Layout from "../../components/layout";
import { getAllWorkIds } from "../../lib/works";

export default function Post() {
  return (
    <Layout>
      <div>aa</div>
      <div>aaa</div>
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
