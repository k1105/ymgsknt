import React from "react";
import Head from "next/head";
type Props = {
  children?: React.ReactNode;
  color?: string;
};

export const siteTitle = "Next.js Sample Website";

export default function Tag({ children, color }: Props) {
  return (
    <div
      style={{
        margin: "10px 5px 0 0",
        display: "inline-block",
        background: color ? color : "#bbb",
        padding: "5px",
        color: "black",
        fontSize: "0.8rem",
      }}
    >
      {children}
    </div>
  );
}
