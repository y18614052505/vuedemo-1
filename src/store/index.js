import Vue from 'vue'
import Vuex from 'vuex'
import mt from "./mutations"
import gt from "./getters"
import at from "./actions"
import md from "./modules"

Vue.use(Vuex)

const st = {
    TabBar: {
        isJdTabBar: true,
        isJxTabBar: false
    },
    // 用户名
    userInfo: localStorage.user ? JSON.parse(localStorage.user) : null,
    keepExclude: "Details,Cart",
    path: "http://106.12.85.17:8090/public/image",
    loginRecords: '',//进入login的记录
    address: "",//配送地址
    redundancy: null,//用于记录tabbar的上次路由路径
    shopCart: {},//购物车商品数据
    shopCartLen: 0,//购物车的数据数量
    totalPayment: 0,//支付总价
    totalNum: 0,//支付数量
    shopCarMoneyAll: 0,//记录购物车所有商品价钱总和
    shopCarNumAll: 0,//记录购物车商品总数量
    shopNameArr:[],//商铺名字的数组
}

const x = new Vuex.Store({
    state: st,
    // 定义事件
    mutations: mt,
    // 计算
    getters: gt,
    // 异步请求
    actions: at,
    // 模块
    modules: md
})

export default x