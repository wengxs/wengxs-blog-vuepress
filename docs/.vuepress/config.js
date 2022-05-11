// import theme from require('./config/theme');

module.exports = {
    base: '/',
    title: '小翁的部落格',
    description: '这里是小翁的部落格~',
    // locales: {
    //     '/': {lang: 'zh-CN'}
    // },
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }] // 需要被注入到当前页面的 HTML <head> 中的标签
    ],
    themeConfig: require('./config/theme'),
    plugins: [
        [
            '@vuepress-reco/vuepress-plugin-kan-ban-niang',
            {
                // theme: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16']
                theme: ['haru2']
            }
        ]
    ]
}