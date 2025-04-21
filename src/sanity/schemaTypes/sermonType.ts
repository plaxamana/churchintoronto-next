import { MicrophoneIcon } from "@sanity/icons";
import { defineType, defineField } from "sanity";

export const sermonType = defineType({
  name: "sermon",
  type: "document",
  title: "Sermon",
  icon: MicrophoneIcon,
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "preacher", type: "string" }),
    defineField({ name: "date", type: "datetime" }),
    defineField({ name: "audioUrl", type: "url" }),
    defineField({ name: "content", type: "blockContent" }),
  ],
});
