import React from "react";
type Props = {
  url: string;
};

export default function Youtube({ url }: Props) {
  return (
    <div>
      <iframe
        src={url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="youtube"
      ></iframe>
      <style jsx>{`
        .youtube {
          width: 100%;
          aspect-ratio: 16 / 9;
        }
        .youtube iframe {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
}
