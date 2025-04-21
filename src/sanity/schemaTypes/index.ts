import { type SchemaTypeDefinition } from "sanity";
import { personType } from "./personType";
import { sermonType } from "./sermonType";
import { blockContent } from "./blockContent";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [personType, blockContent, sermonType],
};
