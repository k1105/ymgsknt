import fs from "fs";
import path from "path";

export const fetchSourceSlugs = () =>
  fs.promises.readdir(path.join(process.cwd(), "sources"));
