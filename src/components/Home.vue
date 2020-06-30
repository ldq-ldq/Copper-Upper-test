<template>
	<el-container class="home-container">
		<el-container>
			<!-- 左侧导航 -->
			<el-aside :width="isCollapse? '56px' :'200px'">
				<!-- 折叠按钮 -->
				<div class="toggle-button" @click="toggleCollapse">|||</div>
				<el-menu background-color="rgb(171, 196, 192)" text-color="#fff" active-text-color="#ffffff" :unique-opened="true"
				 :collapse="isCollapse" :collapse-transition="false"
				 unique-opened
				 router>  <!-- 开启路由模式 -->
				 <!-- 第左边一个导航 -->
					<el-submenu index="1">
						<!-- 一级标题 -->
						<template slot="title" >
							<i class="el-icon-location"></i>
							<span>{{menulist[0]}}</span>
						</template>
						<el-menu-item index="/rawtest" >
							<!-- 二级标题 -->
							<template slot="title">
								<i class="el-icon-location"></i>
								<span>{{menulist[0]}}</span>
							</template>
						</el-menu-item>
					</el-submenu>
					<!-- 左边第二个 -->
					<el-submenu index="2">
						<!-- 一级标题 -->
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>{{menulist[1]}}</span>
						</template>
						<el-menu-item index="/produceTest">
							<!-- 二级标题 -->
							<template slot="title">
								<i class="el-icon-location"></i>
								<span>{{menulist[1]}}</span>
							</template>
						</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-aside>
			<!-- 主体区域 -->
			<el-main>
				<!-- 面包屑导航 -->
				<el-breadcrumb separator-class="el-icon-arrow-right">
				  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
				  <el-breadcrumb-item>操作</el-breadcrumb-item>
				</el-breadcrumb>
				<!-- 主体区域占位符 -->
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	export default {
		data() {
			return {
				isCollapse: false,
				menulist:["原料检测单录入","产品检测单"]
			}
		},
		methods: {
			// 左侧边栏
			toggleCollapse() {
				this.isCollapse = !this.isCollapse;
			}
		}
	};
</script>

<style lang="less" scoped="scoped">
	.el-aside {
		background-color: rgb(171, 196, 192);
	}

	.el-container {
		background-color: rgb(185, 228, 218);
	}

	.home-container {
		height: 100%;
	}

	.el-menu {
		border-right: 0px;
	}

	.toggle-button {
		background-color: rgb(215, 234, 239);
		text-align: center;
		color: #fff;
		height: 30px;
		line-height: 30px;
		cursor: pointer;
		letter-spacing: 0.2em;
	}
	.el-breadcrumb{
		margin-bottom: 20px;
		}
</style>
