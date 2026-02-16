
import { defineType, defineField } from "sanity";

export const skills = defineType({
  name: "skills",
  title: "Skills Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
        options: {
            list: [
            { title: "Languages & Tools", value: "main" },
            { title: "Frameworks & Libraries", value: "framework" },
            { title: "Tools & Platforms", value: "tool" },
            { title: "Databases", value: "database" },
            ],
        },
    }),
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Name",
              type: "string",
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            }),
          ],
        },
      ],
    }),
  ],
});
