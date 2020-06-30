import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from "@/components/Login.vue"
import Home from "@/components/Home.vue"
import Welcome from '@/components/Welcome.vue'
import Rawtest from '@/components/Rawtest.vue'
import ProduceTest from '@/components/ProduceTest.vue'

Vue.use(VueRouter)

  const routes = [
    {
		path:"",
		redirect:'/login'
	},
	{
		path:'/login',
		component:Login,
		meta:{
		        keepAlive: true
		     }
	},
	{
		path:'/home',
		component:Home,
		redirect:'/welcome',
		meta: {
		        keepAlive: false
		      },
		children:[
			{
			path:'/welcome',
			component:Welcome,
		    },
			{
			path:'/rawtest',
			component:Rawtest
			},
			{
			path:'/produceTest',
			component:ProduceTest
			}
		]
	},
	
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
