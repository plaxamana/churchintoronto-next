import { UserIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const personType = defineType({
  name: "person",
  title: "Team Member",
  type: "document",
  icon: UserIcon,
  fieldsets: [
    { name: "name", title: "Name", options: { columns: 2 } },
  ],
  fields: [
    defineField({
      name: "firstname",
      title: "First Name",
      type: "string",
      fieldset: "name",
    }),
    defineField({
      name: "lastname",
      title: "Last Name",
      type: "string",
      fieldset: "name",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: (doc) => `${doc.firstname}-${doc.lastname}`,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    }),
    defineField({
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "bio",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "firstname",
      subtitle: "lastname",
      media: "image",
    },
    prepare: ({ title, subtitle, media }) => {
      return {
        title: `${title} ${subtitle}`,
        media,
      };
    },
  },
});
