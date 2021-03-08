module.exports = {
  title: '资料库',
  description:
    '这是一个关于书籍的资料库， 前后端以及各种领域文学的知识、资料分享库',
  base: '/',
  plugins: ['@vuepress/blog', '@vuepress/back-to-top'],

  // 主题配置
  themeConfig: {
    // logo: '/assets/images/demos.png',
    repo: 'ZhengMaster2020/books',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    docsDir: 'docs',
    lastUpdated: 'Last Updated',

    displayAllHeaders: true,
    nav: [
      { text: '首页', link: '/' },
      { text: '书籍', link: '/pages/books/' },
      { text: '技术', link: '/pages/techolo/' },
      { text: '资料', link: '/pages/material/' },
      { text: '文档', link: '/pages/projects/personal/' },
      { text: '项目', link: '/pages/company/' },
    ],

    sidebar: {
      '/pages/books/': [
        {
          title: '经典书籍',
          collapsable: false,
          children: ['', 'getting-started'],
        },
      ],
    },
  },
}
