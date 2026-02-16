import { defineType, defineField } from "sanity";

export const hero = defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    // Image
    defineField({
      name: "image",
      title: "Profile Image",
      type: "image",
      options: { hotspot: true },
    }),

    // Small Text (Hi, I'm Rashad)
    defineField({
      name: "smallText",
      title: "Small Text",
      type: "string",
    }),

    // Main Title (Web Developer)
    defineField({
      name: "title",
      title: "Main Title",
      type: "string",
    }),

    // Looping Words Array
    defineField({
      name: "loopWords",
      title: "Looping Words",
      type: "array",
      of: [{ type: "string" }],
    }),

    // Social Links Array
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
            }),
            defineField({
              name: "buttonText",
              title: "Button Text",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
            }),
          ],
        },
      ],
    }),

    // Contact Button
    defineField({
      name: "contactButtonText",
      title: "Contact Button Text",
      type: "string",
    }),

    defineField({
      name: "contactButtonLink",
      title: "Contact Button Link",
      type: "string",
    }),
  ],
});
