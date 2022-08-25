import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import kvFront from "./img/spinecho/spinecho_kv_front.png";
import kvBack from "./img/spinecho/spinecho_kv_back.png";

const PageContent: React.FC = () => {
  return (
    <div>
      <h2>NxPC.Live vol.57 mail visual</h2>
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
      {/* <div className="imgContainer">
        <Image src={kvBack} alt="key visual back" placeholder="blur" />
      </div> */}
      <style jsx>{`
        .imgContainer {
          position: relative;
          text-align: left;
          width: 50vw;
          background: #000;
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
