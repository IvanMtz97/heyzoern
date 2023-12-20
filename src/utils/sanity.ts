import { SANITY_PROJECT_ID, SANITY_DATASET } from "@env";

export function getSanityImageUrl(name: string) {
  return `https://cdn.sanity.io/images/${SANITY_PROJECT_ID}/${SANITY_DATASET}/${name}`;
}
