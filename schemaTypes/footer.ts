import {defineType, defineField} from 'sanity'

export const footer = defineType({
  name: 'footer',
  title: 'Footer Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
})
