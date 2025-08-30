import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";
import { sortedVersions } from "./lib/versions";

const withMDX = createMDX();

console.log(process.env);

const config: NextConfig = {
  output: "export",
  reactStrictMode: true,
  // rewrites: async () => {
  //   return {
  //     beforeFiles: [
  //       {
  //         source: "/prerelease/:path*",
  //         destination: "/:path*",
  //       },
  //       ...sortedVersions.map((version) => ({
  //         source: `/${version.version}/:path*`,
  //         destination: `${version.url}/:path*`,
  //       })),
  //     ],
  //   };
  // },
};

export default withMDX(config);
