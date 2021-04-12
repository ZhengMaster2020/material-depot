import bookIcon from '../assets/images/books.png'
import materialIcon from '../assets/images/material.png'
import selfIcon from '../assets/images/self.png'
import companyIcon from '../assets/images/company.png'
import technologyIcon from '../assets/images/technology.png'
import demoIcon from '../assets/images/demos.png'

export default {
  home: {
    card: [
      {
        icon: bookIcon,
        path: '/pages/books/',
        title: '书籍分享',
        info: '少年情怀总是诗，花开花落皆能引起心潮的滔天巨浪。',
      },
      {
        icon: technologyIcon,
        path: '/pages/techolo/',
        title: '技术分享',
        info: '当发现世界的阔大，心中的潮汐自然会平落，成为令人愉悦的韵律。',
      },
      {
        icon: materialIcon,
        path: '/pages/books/',
        title: '资料分享',
        info:
          '有时，我们需要跳出情绪局限，融入这个世界，看世事万千，沧海桑田。',
      },
      {
        icon: selfIcon,
        path: '/pages/books/',
        title: '学习笔记',
        info:
          '时间是一只藏在黑暗中的温柔的手，在你一出神一恍惚之间，物走星移。',
      },
      {
        icon: companyIcon,
        path: '/pages/books/',
        title: 'React&Vue项目',
        info:
          '径路窄处，留一步与人行; 滋味浓时，减三分让人尝; 此是涉世一极安乐法',
      },
      {
        icon: demoIcon,
        path: '/pages/books/',
        title: 'demo项目',
        info:
          '岁月本长，而忙者自促； 天地本宽，而鄙者自隘； 风花雪月本闲，而扰攘者自冗。',
      },
    ],
  },
}
