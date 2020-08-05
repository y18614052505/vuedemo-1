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
    userInfo: '',
    keepExclude: "Details,Cart",
    path: "http://106.12.85.17:8090/public/image",
    shopCart: {
        jd: [],
        shop1: [],
        shop2: [],
        shop3: [],
    },
    shopCartLen: 0,//购物车的数据数量
    loginRecords: '',//进入login的记录
    address: ""
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