Vue.component('m-header', {
    data: function () {
        return {
            // 顶部导航栏名称与链接
            navs: [{
                name: '家谱',
                link: 'content.html'
            }, {
                name: '医药',
                link: 'content.html'
            }, {
                name: '饮食',
                link: 'content.html'
            }, {
                name: '服饰/美妆',
                link: 'content.html'
            }, {
                name: '首饰/物件',
                link: 'content.html'
            }, {
                name: '家具设计',
                link: 'content.html'
            }, {
                name: '风俗节庆',
                link: 'content.html'
            }],
        }
    },
    template: `
    <div class="top">
            <div class="top-img"></div>
            <ul class="nav">
                <li v-for="nav in navs">
                    <a :href="nav.link" class="nav-item">{{nav.name}}</a>
                </li>
            </ul>
        </div>
    `
})