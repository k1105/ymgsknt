type Props = {
  width: number;
  ratio: number;
  windowWidth: number;
};

export default function optimizedWidth({ width, ratio, windowWidth }: Props) {
  // windowWidth = 画面の横幅.
  if (ratio < 3 / 4) {
    return width;
  } else {
    const basisArea = (width * width * 5) / 16;
    if (windowWidth > 480) {
      //window.innerWidth;
      return Math.max(
        Math.min(Math.sqrt(basisArea / ratio), width),
        width * 0.5
      );
    } else {
      //スマホはこれでいい
      return Math.max(
        Math.min(Math.sqrt(basisArea / ratio), width),
        width * 0.9
      );
    }
  }
}
