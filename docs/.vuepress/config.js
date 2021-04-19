/*
 * @Author: your name
 * @Date: 2021-03-02 11:01:28
 * @LastEditTime: 2021-03-11 08:42:13
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \ZhengMaster2020.github.io\docs\.vuepress\config.js
 */
module.exports = {
  title: '资料库',
  description:
    '这是一个关于书籍的资料库， 前后端以及各种领域文学的知识、资料分享库',
  base: '/',
  head: [['link', { rel: 'icon', href: '../assets/images/book-pro.png' }]],
  plugins: ['@vuepress/blog', '@vuepress/back-to-top'],

  // 主题配置
  themeConfig: {
    repo: 'ZhengMaster2020/material-depot',
    repoLabel: '查看源码',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    docsDir: 'docs',
    lastUpdated: 'Last Updated',
    smoothScroll: true,

    displayAllHeaders: true,
    nav: [
      { text: '首页', link: '/' },
      { text: '书籍', link: '/pages/books/' },
      { text: '技术', link: '/pages/techolo/' },
      { text: '资料', link: '/pages/material/' },
      { text: '项目', link: '/pages/projects/' },
    ],

    sidebar: {
      '/pages/books/': [
        {
          title: '经典书籍',
          collapsable: false,
          children: ['', 'backend', 'other', 'movie'],
        },
      ],
      '/pages/techolo/': [
        {
          title: '技术分享以及笔记',
          collapsable: false,
          children: [''],
        },
      ],
      '/pages/tematerial/': [
        {
          title: '前端面试知识点',
          collapsable: false,
          children: ['', 'network'],
        },
      ],
    },
  },
}
