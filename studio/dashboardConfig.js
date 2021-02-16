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
                  buildHookId: '602bfd07421e3871fae50b36',
                  title: 'Sanity Studio',
                  name: 'jameshowell-v-1-studio',
                  apiId: 'fbd8fe50-70a0-4aa0-90ea-efb170fa900b'
                },
                {
                  buildHookId: '602bfd072ab4316474484f43',
                  title: 'Blog Website',
                  name: 'jameshowell-v-1',
                  apiId: 'c1f276c4-2858-4a06-8122-f3ee30db121e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jameshowelldev/jameshowell-v1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://jameshowell-v-1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
