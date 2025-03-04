({
    'bilibili.com': {
        _name: 'bilibili',
        www: [
            {
                title: '分区视频',
                docs: 'https://docs.rsshub.app/social-media.html#bilibili',
                source: ['/v/*tpath', '/documentary', '/movie', '/tv'],
            },
            {
                title: '视频评论',
                docs: 'https://docs.rsshub.app/social-media.html#bilibili',
                source: '/video/:aid',
                target: (params) => `/bilibili/video/reply/${params.aid.replace('av', '')}`,
            },
            {
                title: '视频弹幕',
                docs: 'https://docs.rsshub.app/social-media.html#bilibili',
                source: '/video/:aid',
                target: (params, url) => {
                    const pid = new URL(url).searchParams.get('p');
                    return `/bilibili/video/danmaku/${params.aid.replace('av', '')}/${pid ? pid : 1}`;
                },
            },
        ],
        space: [
            {
                title: 'UP 主动态',
                docs: 'https://docs.rsshub.app/social-media.html#bilibili',
                source: '/:uid',
                target: '/bilibili/user/dynamic/:uid',
            },
            {
                title: 'UP 主投稿',
                docs: 'https://docs.rsshub.app/social-media.html#bilibili',
                source: '/:uid',
                target: '/bilibili/user/video/:uid',
            },
        ],
    },
    'weibo.com': {
        _name: '微博',
        '.': [
            {
                title: '博主',
                docs: 'https://docs.rsshub.app/social-media.html#wei-bo',
                source: ['/u/:id', '/:id'],
                target: '/weibo/user/:uid',
                script: "({uid: document.querySelector('head').innerHTML.match(/\\$CONFIG\\['oid']='(\\d+)'/)[1]})",
                verification: (params) => params.uid,
            },
        ],
    },
    'pixiv.net': {
        _name: 'Pixiv',
        www: [
            {
                title: '用户收藏',
                docs: 'https://docs.rsshub.app/social-media.html#pixiv',
                source: '/bookmark.php',
                target: (params, url) => `/pixiv/user/bookmarks/${new URL(url).searchParams.get('id')}`,
            },
            {
                title: '用户动态',
                docs: 'https://docs.rsshub.app/social-media.html#pixiv',
                source: '/member.php',
                target: (params, url) => `/pixiv/user/${new URL(url).searchParams.get('id')}`,
            },
            {
                title: '排行榜',
                docs: 'https://docs.rsshub.app/social-media.html#pixiv',
                source: '/ranking.php',
            },
            {
                title: '关键词',
                docs: 'https://docs.rsshub.app/social-media.html#pixiv',
                source: '/search.php',
            },
            {
                title: '关注的新作品',
                docs: 'https://docs.rsshub.app/social-media.html#pixiv',
                source: '/bookmark_new_illust.php',
                target: '/pixiv/user/illustfollows',
            },
        ],
    },
    'twitter.com': {
        _name: 'Twitter',
        '.': [
            {
                title: '用户时间线',
                docs: 'https://docs.rsshub.app/social-media.html#twitter',
                source: '/:id',
                target: '/twitter/user/:id',
                verification: (params) => params.id !== 'home' && params.id !== 'explore' && params.id !== 'notifications' && params.id !== 'messages' && params.id !== 'explore',
            },
            {
                title: '用户关注时间线',
                docs: 'https://docs.rsshub.app/social-media.html#twitter',
                source: '/:id',
                target: '/twitter/followings/:id',
                verification: (params) => params.id !== 'home' && params.id !== 'explore' && params.id !== 'notifications' && params.id !== 'messages' && params.id !== 'explore',
            },
            {
                title: '用户喜欢列表',
                docs: 'https://docs.rsshub.app/social-media.html#twitter',
                source: '/:id',
                target: '/twitter/likes/:id',
                verification: (params) => params.id !== 'home' && params.id !== 'explore' && params.id !== 'notifications' && params.id !== 'messages' && params.id !== 'explore',
            },
            {
                title: '列表时间线',
                docs: 'https://docs.rsshub.app/social-media.html#twitter',
                source: '/:id/lists/:name',
                target: '/twitter/list/:id/:name',
                verification: (params) => params.id !== 'home' && params.id !== 'explore' && params.id !== 'notifications' && params.id !== 'messages' && params.id !== 'explore',
            },
        ],
    },
    'youtube.com': {
        _name: 'Youtube',
        www: [
            {
                title: '用户',
                docs: 'https://docs.rsshub.app/social-media.html#youtube',
                source: '/user/:username',
                target: '/youtube/user/:username',
            },
            {
                title: '频道',
                docs: 'https://docs.rsshub.app/social-media.html#youtube',
                source: '/channel/:id',
                target: '/youtube/channel/:id',
            },
            {
                title: '播放列表',
                docs: 'https://docs.rsshub.app/social-media.html#youtube',
                source: '/playlist',
                target: (params, url) => `/youtube/playlist/${new URL(url).searchParams.get('list')}`,
            },
        ],
    },
    'github.com': {
        _name: 'GitHub',
        '.': [
            {
                title: '用户仓库',
                docs: 'https://docs.rsshub.app/programming.html#github',
                source: '/:user',
                target: '/github/repos/:user',
            },
            {
                title: '用户 Followers',
                docs: 'https://docs.rsshub.app/programming.html#github',
                source: '/:user',
                target: '/github/user/followers/:user',
            },
            {
                title: 'Trending',
                docs: 'https://docs.rsshub.app/programming.html#github',
                source: '/trending',
                target: '/github/trending/:since',
            },
            {
                title: '仓库 Issue',
                docs: 'https://docs.rsshub.app/programming.html#github',
                source: ['/:user/:repo/issues', '/:user/:repo/issues/:id', '/:user/:repo'],
                target: '/github/issue/:user/:repo',
            },
            {
                title: '仓库 Pull Requests',
                docs: 'https://docs.rsshub.app/programming.html#github',
                source: ['/:user/:repo/pulls', '/:user/:repo/pulls/:id', '/:user/:repo'],
                target: '/github/pull/:user/:repo',
            },
            {
                title: '仓库 Stars',
                docs: 'https://docs.rsshub.app/programming.html#github',
                source: ['/:user/:repo/stargazers', '/:user/:repo'],
                target: '/github/stars/:user/:repo',
            },
            {
                title: '仓库 Branches',
                docs: 'https://docs.rsshub.app/programming.html#github',
                source: ['/:user/:repo/branches', '/:user/:repo'],
                target: '/github/branches/:user/:repo',
            },
            {
                title: '文件 Commits',
                docs: 'https://docs.rsshub.app/programming.html#github',
                source: '/:user/:repo/blob/:branch/*filepath',
                target: '/github/file/:user/:repo/:branch/:filepath',
            },
            {
                title: '用户 Starred Repositories',
                docs: 'https://docs.rsshub.app/programming.html#github',
                source: '/:user',
                target: '/github/starred_repos/:user',
            },
        ],
    },
    'zhihu.com': {
        _name: '知乎',
        www: [
            {
                title: '收藏夹',
                docs: 'https://docs.rsshub.app/social-media.html#zhi-hu',
                source: '/collection/:id',
                target: '/zhihu/collection/:id',
            },
            {
                title: '用户动态',
                docs: 'https://docs.rsshub.app/social-media.html#zhi-hu',
                source: '/people/:id/activities',
                target: '/zhihu/people/activities/:id',
            },
            {
                title: '用户回答',
                docs: 'https://docs.rsshub.app/social-media.html#zhi-hu',
                source: '/people/:id/answers',
                target: '/zhihu/people/answers/:id',
            },
            {
                title: '用户想法',
                docs: 'https://docs.rsshub.app/social-media.html#zhi-hu',
                source: '/people/:id/pins',
                target: '/zhihu/people/pins/:id',
            },
            {
                title: '用户文章',
                docs: 'https://docs.rsshub.app/social-media.html#zhi-hu',
                source: '/people/:id/posts',
                target: '/zhihu/people/posts/:id',
            },
            {
                title: '热榜',
                docs: 'https://docs.rsshub.app/social-media.html#zhi-hu',
                source: '/hot',
                target: '/zhihu/hotlist',
            },
            {
                title: '想法热榜',
                docs: 'https://docs.rsshub.app/social-media.html#zhi-hu',
                target: '/zhihu/pin/hotlist',
            },
            {
                title: '问题',
                docs: 'https://docs.rsshub.app/social-media.html#zhi-hu',
                source: '/question/:questionId',
                target: '/zhihu/question/:questionId',
            },
            {
                title: '话题',
                docs: 'https://docs.rsshub.app/social-media.html#zhi-hu',
                source: '/topic/:topicId/:type',
                target: '/zhihu/topic/:topicId',
            },
            {
                title: '新书',
                docs: 'https://docs.rsshub.app/social-media.html#zhi-hu',
                source: '/zhihu/bookstore/newest',
                target: '/zhihu/pin/hotlist',
            },
            {
                title: '想法-24 小时新闻汇总',
                docs: 'https://docs.rsshub.app/social-media.html#zhi-hu',
                source: '/pin/special/972884951192113152',
                target: '/zhihu/pin/daily',
            },
            {
                title: '书店-周刊',
                docs: 'https://docs.rsshub.app/social-media.html#zhi-hu',
                source: '/pub/weekly',
                target: '/zhihu/weekly',
            },
        ],
        zhuanlan: [
            {
                title: '专栏',
                docs: 'https://docs.rsshub.app/social-media.html#zhi-hu',
                source: '/:id',
                target: '/zhihu/zhuanlan/:id',
            },
        ],
        daily: [
            {
                title: '日报',
                docs: 'https://docs.rsshub.app/social-media.html#zhi-hu',
                source: '',
                target: '/zhihu/daily',
            },
            {
                title: '日报',
                docs: 'https://docs.rsshub.app/social-media.html#zhi-hu',
                source: '/*tpath',
                target: '/zhihu/daily',
            },
        ],
    },
    'smzdm.com': {
        _name: '什么值得买',
        www: [
            {
                title: '关键词',
                docs: 'https://docs.rsshub.app/shopping.html#shen-me-zhi-de-mai',
                target: '/smzdm/keyword/:keyword',
            },
            {
                title: '排行榜',
                docs: 'https://docs.rsshub.app/shopping.html#shen-me-zhi-de-mai',
                source: '/top',
            },
        ],
    },
    'rsshub.app': {
        _name: 'RSSHub',
        docs: [
            {
                title: '有新路由啦',
                docs: 'https://docs.rsshub.app/program-update.html#rsshub',
                source: ['', '/*tpath'],
                target: '/rsshub/rss',
            },
        ],
    },
    'ximalaya.com': {
        _name: '喜马拉雅',
        www: [
            {
                title: '专辑',
                docs: 'https://docs.rsshub.app/multimedia.html#xi-ma-la-ya',
                source: '/:type/:id',
                target: '/ximalaya/album/:id/',
                verification: (params) => parseInt(params.id) + '' === params.id,
            },
        ],
    },
    'algocasts.io': {
        _name: 'AlgoCasts',
        '.': [
            {
                title: '视频更新',
                docs: 'https://docs.rsshub.app/programming.html#algocasts',
                source: '/episodes',
                target: '/algocasts',
            },
        ],
    },
    'soulapp.cn': {
        _name: 'Soul',
        '.': [
            {
                title: '瞬间更新',
                docs: 'https://docs.rsshub.app/social-media.html#soul',
            },
        ],
    },
    'juejin.im': {
        _name: '掘金',
        '.': [
            {
                title: '专栏',
                docs: 'https://docs.rsshub.app/programming.html#jue-jin',
                source: '/user/:id/posts',
                target: '/juejin/posts/:id',
            },
        ],
    },
    'anime1.me': {
        _name: 'Anime1',
        '.': [
            {
                title: '動畫',
                docs: 'https://docs.rsshub.app/anime.html#anime1',
                source: '/category/:time/:name',
                target: '/anime1/anime/:time/:name',
            },
            {
                title: '搜尋',
                docs: 'https://docs.rsshub.app/anime.html#anime1',
                source: '/',
                script: "({keyword: new URLSearchParams(location.search).get('s')})",
                target: '/anime1/search/:keyword',
                verification: (params) => params.keyword,
            },
        ],
    },
    'instagram.com': {
        _name: 'Instagram',
        www: [
            {
                title: '用户',
                docs: 'https://docs.rsshub.app/social-media.html#instagram',
                source: '/:id',
                target: '/instagram/user/:id',
                verification: (params) => params.id !== 'explore' && params.id !== 'developer',
            },
            {
                title: '标签',
                docs: 'https://docs.rsshub.app/social-media.html#instagram',
                source: '/explore/tags/:tag',
                target: '/instagram/tag/:tag',
            },
        ],
    },
    'swufe.edu.cn': {
        _name: '西南财经大学',
        it: [
            {
                title: '经济信息工程学院 - 通知公告',
                docs: 'https://docs.rsshub.app/university.html#xi-nan-cai-jing-da-xue',
                source: '/index/tzgg.htm',
                target: '/universities/swufe/seie/tzgg',
            },
            {
                title: '经济信息工程学院 - 学院新闻',
                docs: 'https://docs.rsshub.app/university.html#xi-nan-cai-jing-da-xue',
                source: '/index/xyxw.htm',
                target: '/universities/swufe/seie/xyxw',
            },
        ],
    },
    'ishuhui.com': {
        _name: '鼠绘漫画',
        www: [
            {
                title: '鼠绘漫画',
                docs: 'https://docs.rsshub.app/anime.html#shu-hui-man-hua',
                source: '/comics/anime/:id',
                target: '/shuhui/comics/:id',
            },
        ],
    },
    'haimaoba.com': {
        _name: '海猫吧',
        www: [
            {
                title: '漫画更新',
                docs: 'https://docs.rsshub.app/anime.html#hai-mao-ba',
                source: '/catalog/:id',
                target: '/haimaoba/:id',
            },
        ],
    },
    'pgyer.com': {
        _name: '蒲公英应用分发',
        www: [
            {
                title: 'app更新',
                docs: 'https://docs.rsshub.app/program-update.html#pu-gong-ying-ying-yong-fen-fa',
                source: '/:app',
                target: '/pgyer/:app',
            },
        ],
    },
    'sspai.com': {
        _name: '少数派',
        '.': [
            {
                title: '最新上架付费专栏',
                docs: 'https://docs.rsshub.app/new-media.html#shao-shu-pai-sspai',
                source: '/series',
                target: '/sspai/series',
            },
            {
                title: 'Matrix',
                docs: 'https://docs.rsshub.app/new-media.html#shao-shu-pai-sspai',
                source: '/matrix',
                target: '/sspai/matrix',
            },
            {
                title: '专栏',
                docs: 'https://docs.rsshub.app/new-media.html#shao-shu-pai-sspai',
                source: '/column/:id',
                target: '/sspai/column/:id',
            },
            {
                title: '作者已发布文章',
                docs: 'https://docs.rsshub.app/new-media.html#shao-shu-pai-sspai',
                source: ['/user/:id/posts', '/user/:id/updates'],
                target: '/sspai/author/:id',
            },
            {
                title: '专题',
                docs: 'https://docs.rsshub.app/new-media.html#shao-shu-pai-sspai',
                source: '/topics',
                target: '/sspai/topics',
            },
            {
                title: '专题内文章更新',
                docs: 'https://docs.rsshub.app/new-media.html#shao-shu-pai-sspai',
                source: '/topic/:id',
                target: '/sspai/topic/:id',
            },
        ],
        shortcuts: [
            {
                title: 'Shortcuts Gallery',
                docs: 'https://docs.rsshub.app/new-media.html#shao-shu-pai-sspai',
                source: ['', '/*tpath'],
                target: '/sspai/shortcuts',
            },
        ],
    },
    'baidu.com': {
        _name: '贴吧',
        tieba: [
            {
                title: '帖子列表',
                docs: 'https://docs.rsshub.app/bbs.html#tie-ba',
                source: 'f',
                target: (params, url) => `/tieba/forum/${new URL(url).searchParams.get('kw')}`,
                script: "({type: new URLSearchParams(location.search).get('tab')})",
                verification: (params) => !params.type || params.type === 'main',
            },
            {
                title: '精品帖子',
                docs: 'https://docs.rsshub.app/bbs.html#tie-ba',
                source: 'f',
                target: (params, url) => `/tieba/forum/good/${new URL(url).searchParams.get('kw')}`,
                script: "({type: new URLSearchParams(location.search).get('tab')})",
                verification: (params) => params.type === 'good',
            },
            {
                title: '帖子动态',
                docs: 'https://docs.rsshub.app/bbs.html#tie-ba',
                source: '/p/:id',
                target: '/tieba/post/:id',
            },
            {
                title: '只看楼主',
                docs: 'https://docs.rsshub.app/bbs.html#tie-ba',
                source: '/p/:id',
                target: '/tieba/post/lz/:id',
            },
        ],
    },
    'wineyun.com': {
        _name: '酒云网',
        www: [
            {
                title: '最新商品',
                description: 'https://docs.rsshub.app/other.html#jiu-yun-wang',
                source: ['/:category'],
                target: '/wineyun/:category',
            },
        ],
    },
    'epicgames.com': {
        _name: 'Epic Games',
        www: [
            {
                title: '每周免费游戏',
                docs: 'https://docs.rsshub.app/game.html#epicgames-freegame',
                source: '/:collection',
                target: '/epicgames/:collection',
            },
        ],
    },
});
