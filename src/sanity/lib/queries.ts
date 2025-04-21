import { defineQuery } from "next-sanity";

export const teamQuery = defineQuery(`*[_type == "person"] {
  _id,
  "name": firstname + " " + lastname,
  title,
  "imageUrl": image.asset->url,
  slug
}`);

// lib/queries.ts
export const getPaginatedSermonsQuery = (start: number, end: number) =>
  defineQuery(`
  *[_type == "sermon"] | order(date desc) [${start}...${end}] {
    _id,
    title,
    preacher,
    date,
    "slug": slug.current
  }
`);

export const getSermonCountQuery = defineQuery(`
  count(*[_type == "sermon"])
`);