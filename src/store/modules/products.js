import * as types from '../mutation-types'

//抽离出的接口单独放置一个目录，
import shop from '../../api/shop'

// initial state
const state = {
    all: [],
    a:6222
}

// getters
const getters = {
    allProducts: state => state.all,
}

// actions
const actions = {
    getAllProducts({ commit }) { 
        shop.getProducts(products => {
            commit(types.RECEIVE_PRODUCTS, { products })
        })
    },
}

// mutations
const mutations = {
    [types.RECEIVE_PRODUCTS](state, { products }) {
        state.all = products;
        
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}

//流程：
//1.state初始化一个空的数组，用于放置数据
//2.写getter计算变化的数组数据(可变化，不一定是getter)
//3.写mutations，同时去声明一个事件名称，mutation-types
//4.写action，异步获取数据，到抽离出的js里面访问相应的方法，在此之前，抽离接口相应的js方法
//是获取数据的地方；
//action提交的是mutations