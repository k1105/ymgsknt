import React from "react";
import Image, { StaticImageData } from "next/image";
import noImage from "../public/img/vol56_Asize.jpg";
import GetWindowSize from "../lib/getWindowSize";
import optimizedWidth from "../lib/optimizedWidth";
type Props = {
  img?: StaticImageData;
  alt: string;
  basis: number;
};

export const siteTitle = "Next.js Sample Website";

export default function KvImage({ img, alt, basis }: Props) {
  const { width } = GetWindowSize();

  let innerWidth = width;
  if (width > basis) {
    innerWidth = basis;
  }
  if (typeof img === "undefined") {
    img = noImage;
  }
  const ratio = img.height / img.width;
  let imageWidth = optimizedWidth({
    width: innerWidth,
    ratio: ratio,
    windowWidth: width,
  });

  return (
    <div>
      <div className="imageContainer">
        <Image src={img} alt={alt} placeholder="blur"></Image>
      </div>
      <style jsx>{`
        .imageContainer {
          margin: 0 auto;
          width: ${imageWidth}px;
        }
      `}</style>
    </div>
  );
}
