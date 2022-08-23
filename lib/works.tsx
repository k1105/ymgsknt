import fs, { PathLike } from "fs";
import path from "path";

const worksDirectory: PathLike = path.join(process.cwd(), "works");

export function getAllWorkIds() {
  const fileNames: String[] = fs.readdirSync(worksDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}
