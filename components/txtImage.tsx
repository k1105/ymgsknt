import React from "react";
import Image, { StaticImageData } from "next/image";
import GetWindowSize from "../lib/getWindowSize";
import optimizedWidth from "../lib/optimizedWidth";
type Props = {
  img: StaticImageData;
  caption?: string;
  alt?: string;
};

export default function TxtImage({ img, alt, caption }: Props) {
  const { width } = GetWindowSize();

  let basis = 0;
  if (width > 960) {
    basis = 840;
  } else {
    basis = width * 0.9;
  }

  let innerWidth = width;
  if (width > basis) {
    innerWidth = basis;
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
        <Image src={img} alt={alt} placeholder="blur" />
        <small>{caption}</small>
      </div>

      <style jsx>{`
        .imageContainer {
          width: ${imageWidth}px;
          margin: 0 auto;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
}
