import {defineType, defineField} from 'sanity'

export const experinces = defineType({
  name: 'experinces',
  title: 'Experinces Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'experinces',
      title: 'Experinces',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
            defineField({
              name: 'sectionColor',
              title: 'Section Color',
              type: 'string',
            }),
            defineField({
              name: 'cardText',
              title: 'Card Text',
              type: 'string',
            }),
            defineField({
              name: 'cardColor',
              title: 'Card Color',
              type: 'string',
            }),
          ],
        },
      ],
    }),
  ],
})
