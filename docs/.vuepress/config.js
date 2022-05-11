// import theme from require('./config/theme');

module.exports = {
    base: '/',
    title: 'Wengxs',
    description: '只有进步 值得信仰',
    locales: {
        '/': {lang: 'zh-CN'}
    },
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }] // 需要被注入到当前页面的 HTML <head> 中的标签
    ],
    theme: 'reco',
    themeConfig: require('./config/theme'),
    plugins: require('./config/plugins')
}