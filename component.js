Vue.component('m-header', {
    data: function () {
        return {
            // 顶部导航栏名称与链接
            navs: [{
                name: '首页',
                link: 'index.html'
            }, {
                name: '家谱',
                link: 'content.html'
            }, {
                name: '医药',
                link: 'index.html#medicine'
            }, {
                name: '饮食',
                link: 'index.html#diet'
            }, {
                name: '服饰/美妆',
                link: 'index.html#cloth'
            }, {
                name: '首饰/物件',
                link: 'index.html#cloth'
            }, {
                name: '家具设计',
                link: 'index.html#funiture'
            }, {
                name: '风俗节庆',
                link: 'index.html#festival'
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