<template>
	<el-container class="home-container">
		<!-- 头部导航 -->
		<el-header>
			<!-- logo区 -->
			<div class="logo">
				<img src="../assets/img/logo(finish).png" alt="">
				<span>铜杆上引智能监控系统</span>
			</div>
			<!-- 头部导航区 -->
			<el-menu
			  mode="horizontal"
			  background-color="#545c64"
			  text-color="#fff"
			  active-text-color="#ffd04b">
			  <el-menu-item index="1">产量统计</el-menu-item>
			  <el-menu-item index="2">质量分析</el-menu-item>
			  <el-menu-item index="3">处理中心</el-menu-item>
			  <el-submenu index="2">
			    <template slot="title">我的工作台</template>
			    <el-menu-item index="2-1">选项1</el-menu-item>
			    <el-menu-item index="2-2">选项2</el-menu-item>
			    <el-menu-item index="2-3">选项3</el-menu-item>
			  </el-submenu>
			  <!-- 退出按钮 -->
			  <el-menu-item index="4"  @click="logout">退出</el-menu-item>
			  <!-- <el-button type="info" @click="logout">退出</el-button> -->
			</el-menu>
			
		</el-header>
		<el-container>
			<!-- 左侧导航 -->
			<el-aside :width="isCollapse? '56px' :'200px'">
				<!-- 折叠按钮 -->
				<div class="toggle-button" @click="toggleCollapse">|||</div>
				<el-menu background-color="rgb(171, 196, 192)" text-color="#fff" active-text-color="#ffffff" :unique-opened="true"
				 :collapse="isCollapse" :collapse-transition="false">
					<el-submenu index="1">
						<!-- 一级标题 -->
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>导航一</span>
						</template>
						<el-menu-item index="1-1">
							<!-- 二级标题 -->
							<template slot="title">
								<i class="el-icon-location"></i>
								<span>导航一</span>
							</template>
						</el-menu-item>
					</el-submenu>
					<el-submenu index="2">
						<!-- 一级标题 -->
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>导航一</span>
						</template>
					</el-submenu>
				</el-menu>
			</el-aside>
			<el-main>Main</el-main>
		</el-container>
	</el-container>
</template>

<script>
	export default {
		data() {
			return {
				isCollapse: false
			}
		},
		methods: {
			logout() {
				window.sessionStorage.clear()//清除里面的token
				this.$router.push('/login');
			},
			toggleCollapse() {
				this.isCollapse = !this.isCollapse;
			}
		}
	};
</script>

<style lang="less" scoped="scoped">
	.el-header {
		background-color: rgb(84, 92, 100);
		display: flex;
		justify-content: space-between;
		align-items: center; //对flex的盒子上下居中
		color: #FFF;
		font-size: 20px;
        box-shadow: 0 8px 8px #CCCCCC;
		border-bottom:0.5px solid #fff;
		.logo {
			display: flex;
			align-items: center;
			height: 100%;

			img {
				height: 100%;
			}
		}
		.header-nav{
			display: flex;
			align-items: center;
		}
		.menu_item{
			box-sizing: border-box;
		}
	}

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
</style>
