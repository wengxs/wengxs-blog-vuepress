module.exports = {
    logo: '/logo.png',
    nav: require('./nav'),
    sidebar: 'auto', // require('./sidebar'),
    record: '粤ICP备16024866号',
    recordLink: 'http://www.miitbeian.gov.cn/',
    // 项目开始时间，只填写年份
    // startYear: '2017',
    // 设置作者姓名
    author: 'Zorg',
    // 头像
    authorAvatar: '/avatar.jpg',
    subSidebar: 'auto',
    type: 'blog',
    blogConfig: {
        category: {
            location: 3,
            text: 'Category'
        },
        tag: {
            location: 4,
            text: 'Tag'
        },
        socialLinks: [     // 信息栏展示社交信息
            { icon: 'reco-github', link: 'https://github.com/wengxs' }
        ]
    },

}