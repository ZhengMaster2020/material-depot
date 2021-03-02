module.exports = {
  titil: 'FrontEnd Books',
  description: '这是一个关于前端书籍的website',
  base: '/',
  plugins: ['@vuepress/blog', '@vuepress/back-to-top'],

  pages: [
    {
      lastUpdated: 1524027677000,
      path: '/',
      title: 'VuePress',
      frontmatter: {},
    },
  ],

  themeComfig: {
    logo: '/assets/images/avatar.jpg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'ADS', link: '/projects/ads/' },
      { text: 'OMS', link: '/projects/oms/' },
      { text: 'PDA', link: '/' },
    ],
  },
}
