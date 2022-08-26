import Image from "next/image";
import kvFront from "./img/spinecho_kv_front.png";
import kvBack from "./img/spinecho_kv_back.png";

const PageContent: React.FC = () => {
  return (
    <div>
      <h2>NxPC.Live vol.57 main visual</h2>
      <p>
        medium: poster, flyer, web
        <br />
        motivation: client work
        <br />
        client: NxPC.Lab
      </p>
      <div className="imgContainer">
        <Image src={kvFront} alt="key visual front" placeholder="blur" />
      </div>
      <div className="imgContainer">
        <Image src={kvBack} alt="key visual back" placeholder="blur" />
      </div>
      <style jsx>{`
        .imgContainer {
          position: relative;
          text-align: left;
          width: 50vw;
        }
        @media screen and (max-width: 600px) {
          .imgContainer {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default PageContent;
