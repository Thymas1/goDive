export default {
  name: 'main',
  type: 'document',
  title: 'Main',
  fields: [
    {
      name: 'title',
      type: 'string',
      description: 'Title for the main element'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'some frontends need the slug to show the post',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image'
    },
    {
      name: 'mainBody',
      type: 'bodyPortableText',
      title: 'Body'
    }
  ]
}
