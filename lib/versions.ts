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