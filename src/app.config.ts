export default {
    pages: [
        'pages/home/index',
        'pages/courses/index',
        'pages/find/index',
        'pages/mine/index',
    ],
    tabBar: {
        color: "#bfbfbf",
        selectedColor: "#00BED4",
        list: [
            {
                pagePath: 'pages/home/index',
                text: '首页',
                iconPath: './assets/icon/home.png',
                selectedIconPath: './assets/icon/home_active.png'
            },
            {
                pagePath: 'pages/courses/index',
                text: '课程',
                iconPath: './assets/icon/courses.png',
                selectedIconPath: './assets/icon/courses_active.png'
            },
            {
                pagePath: 'pages/find/index',
                text: '发现',
                iconPath: './assets/icon/find.png',
                selectedIconPath: './assets/icon/find_active.png'
            },
            {
                pagePath: 'pages/mine/index',
                text: '我的',
                iconPath: './assets/icon/mine.png',
                selectedIconPath: './assets/icon/mine_active.png'
            },
        ]
    },
    window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
    }
}
