import { defineQuery } from "next-sanity";

export const teamQuery =
  defineQuery(`*[_type == "person"] {
  _id,
  "name": firstname + " " + lastname,
  title,
  "imageUrl": image.asset->url,
  slug
}`);
