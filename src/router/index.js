import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/*登录页面*/
const login = () => import("@/page/login/login")
// /*内容部分*/
const articleManage = () => import("@/page/content/manage-article")
const commentManage = () => import("@/page/content/manage-comment")
const imageManage = () => import("@/page/content/manage-image")
const postArticle = () => import("@/page/content/post-article")
// /*首页*/
const index = () => import("@/page/dashboard/index")
// /*运营*/
const categoryManage = () => import("@/page/operation/manage-category")
const loop = () => import("@/page/operation/loop")
// /*设置*/
const friendLink = () => import("@/page/settings/friend-link")
const webSizeInfo = () => import("@/page/settings/websize-info")
// /*用户*/
const email = () => import("@/page/user/email")
const info = () => import("@/page/user/info")
const list = () => import("@/page/user/list")
const resetPassword = () => import("@/page/user/reset-password")
/*布局*/
const baseView = () => import("@/layout/base-view")
const rightView = () => import("@/layout/right-content")

export const routes = [
    {
        path: '',
        component: baseView,
        redirect: '/index',
        children: [
            {
                path: '/index',
                name: '首页',
                icon: 'el-icon-s-home',
                hidden: false,
                component: index
            },
            {
                path: '/content',
                name: '内容',
                icon: 'el-icon-tickets',
                hidden: false,
                component: rightView,
                children: [
                    {
                        path: 'post-article',
                        name: '发表文章',
                        icon: 'el-icon-edit-outline',
                        hidden: false,
                        component: postArticle
                    },
                    {
                        path: 'manage-article',
                        name: '文章管理',
                        icon: 'el-icon-document',
                        hidden: false,
                        component: articleManage
                    },
                    {
                        path: 'manage-comment',
                        name: '评论管理',
                        icon: 'el-icon-chat-line-round',
                        hidden: false,
                        component: commentManage
                    },
                    {
                        path: 'manage-image',
                        name: '图片管理',
                        icon: 'el-icon-picture-outline',
                        hidden: false,
                        component: imageManage
                    }
                ]
            },
            {
                path: '/user',
                name: '用户',
                icon: 'el-icon-user',
                hidden: false,
                component: rightView,
                children: [
                    {
                        path: 'list',
                        name: '用户列表',
                        icon: 'el-icon-user',
                        hidden: false,
                        component: list
                    },
                    {
                        path: 'reset-password',
                        name: '密码重置',
                        icon: 'el-icon-more-outline',
                        hidden: false,
                        component: resetPassword
                    },
                    {
                        path: 'email',
                        name: '邮箱设置',
                        icon: 'el-icon-bank-card',
                        hidden: false,
                        component: email
                    },
                    {
                        path: 'info',
                        name: '用户信息',
                        icon: 'el-icon-warning-outline',
                        hidden: false,
                        component: info
                    },
                ]
            },
            {
                path: '/operation',
                name: '运营',
                icon: 'el-icon-help',
                hidden: false,
                component: rightView,
                children: [
                    {
                        path: 'loop',
                        name: '轮播图管理',
                        icon: 'el-icon-set-up',
                        hidden: false,
                        component: loop
                    },
                    {
                        path: 'category',
                        name: '分类管理',
                        icon: 'el-icon-folder-opened',
                        hidden: false,
                        component: categoryManage
                    }
                ]
            },
            {
                path: '/settings',
                name: '设置',
                icon: 'el-icon-setting',
                hidden: false,
                component: rightView,
                children: [
                    {
                        path: 'web-size-info',
                        name: '网站信息',
                        icon: 'el-icon-warning-outline',
                        hidden: false,
                        component: webSizeInfo
                    },
                    {
                        path: 'friend-link',
                        name: '友情链接',
                        icon: 'el-icon-link',
                        hidden: false,
                        component: friendLink
                    }
                ]
            }
        ]
    },
    {
        path: '/login',
        name: '登录',
        component: login
    }
];

const router = new VueRouter({routes})

export default router;