import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from "@/components/Login.vue"
import Home from "@/components/Home.vue"
import Welcome from '@/components/Welcome.vue'
import Rawtest from '@/components/Rawtest.vue'
import ProduceTest from '@/components/ProduceTest.vue'
import Alarm from '@/components/Alarm.vue'
import ProductAnalyse from '@/components/ProductAnalyse.vue'

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
		        keepAlive: true,
				title:"登入页"
		     }
	},
	{
		path:'/alarm',
		component:Alarm,
		meta:{
		        keepAlive: false,
				title:'报警页'
		     }
	},
	{
		path:'/productAnalyse',
		component:ProductAnalyse,
		meta:{
		        keepAlive: false,
				title:'产品分析页'
		     }
	},
	{
		path:'/home',
		component:Home,
		redirect:'/welcome',
		meta: {
		        keepAlive: false,
				title:'主页'
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

// 导航守卫
router.beforeEach((to,from,next)=>{
   document.title=to.matched[0].meta.title;
   console.log(to);
   next();
})
export default router
