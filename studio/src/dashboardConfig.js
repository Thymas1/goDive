export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e8a66382b46a42db7afb506',
                  title: 'Sanity Studio',
                  name: 'goDive-studio',
                  apiId: 'f3d9fbf3-4df6-4b40-8dd5-e8d4b21c7bdb'
                },
                {
                  buildHookId: '5e8a66381d29989029470de6',
                  title: 'goDive',
                  name: 'goDive',
                  apiId: '013ca1ba-2e6c-4245-83fb-6922b5b48a7a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Thymas1/goDive',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://goDive.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
