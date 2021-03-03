module.exports = {
  title: 'website',
  description: '这是一个关于前端书籍的website',
  base: '/',
  plugins: ['@vuepress/blog', '@vuepress/back-to-top'],

  // 主题配置
  themeConfig: {
    // logo: '/assets/images/demos.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Books', link: '/pages/books/' },
      { text: 'Technology', link: '/pages/techolo/' },
      { text: 'Material', link: '/pages/material/' },
      { text: 'Personal', link: '/pages/personal/' },
      { text: 'Enterprise', link: '/pages/company/' },
      { text: 'Demos', link: '/pages/demos/' },
    ],
  },
}
