import { compare as semverCompare } from "semver";
import versions from "../versions.json" with { type: "json" };
import { URL } from "./env";

export type Version = {
  version: string;
  url: string;
};

export const sortedVersions = (versions as Version[]).sort((a, b) =>
  semverCompare(b.version, a.version)
);

export const latestVersion = sortedVersions.at(0);

export const currentVersion = sortedVersions.find(
  (version) => version.url.includes(URL)
) || { version: "Canary", url: "/" };

const getRemoteVersions = async () => {
  const response = await fetch(
    "https://jj-vcs-demo-site.vercel.app/versions.json"
  );
  const data = await response.json();
  return data as Version[];
};

export const remoteVersions = getRemoteVersions();