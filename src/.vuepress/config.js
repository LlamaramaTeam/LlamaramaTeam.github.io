const { description } = require('../../package')

module.exports = {
   theme: 'vuepress-theme-succinct',
   globalUIComponents: ['ThemeManager'],
   /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Llamarama Wiki',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'CurseForge',
        link: 'https://www.curseforge.com/minecraft/mc-mods/llamarama',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/LlamaramaTeam/Llamarama',
      }
    ],
    sidebar: {
      '/docs/': [
        {
          title: 'Getting Started',
          collapsable: false,
          children: [
            '',
          ]
        },
        {
          title: 'Mobs',
          collapsable: false,
          children: [
            'mobs/vanilla-llama',
            'mobs/woolly-llama',
            'mobs/mossy-llama',
            'mobs/bumble-llama',
            'mobs/caravan-trader'
          ]
        },
        {
          title: 'Items',
          collapsable: false,
          children: [
            'items/hay-on-a-stick',
            'items/llama-meat',
            'items/llama-wool',
            'items/llama-milk',
            'items/music-discs'
          ]
        },
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
