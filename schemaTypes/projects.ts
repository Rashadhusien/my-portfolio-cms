import {defineType, defineField} from 'sanity'

export const projects = defineType({
  name: 'projects',
  title: 'Projects Section',
  type: 'document',
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
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'githubLink',
      title: 'Github Link',
      type: 'url',
    }),
    defineField({
      name: 'liveLink',
      title: 'Live Link',
      type: 'url',
    }),
  ],
})
