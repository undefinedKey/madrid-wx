import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const store = new Vuex.Store({
	//data 
	state: {
		userinfo: {
			nickname: '我是你爹'
		}
	},
	// computed
	getters: {
		getUserinfo(state){
			return state.userinfo
		}
	},
	// methods
	mutations: {}
})



export default store