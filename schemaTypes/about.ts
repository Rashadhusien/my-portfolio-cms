import { defineType, defineField } from "sanity";

export const about = defineType({
  name: "about",
  title: "About Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "firstDescription",
      title: "First Description",
      type: "text",
    }),
    defineField({
      name: "secondDescription",
      title: "Second Description",
      type: "text",
    }),

  ],
});
