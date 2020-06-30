<template>
	<!-- 头部导航 -->
	<el-header>
		<!-- logo区 -->
		<div class="logo">
			<img src="~/assets/img/logo(finish).png" alt="">
			<span>铜杆上引智能监控系统</span>
		</div>
		<!-- 头部导航区 -->
		<el-menu
		  mode="horizontal"
		  background-color="#545c64"
		  text-color="#fff"
		  active-text-color="#ffd04b"
		  default-active='/user'
		  :router="true"> <!--是否使用 vue-router 的模式,启用该模式会在激活导航时以 index 作为 path 进行路由跳转 -->
		  
		  <el-menu-item index="1">产量统计</el-menu-item>
		  <el-menu-item index="2">质量分析</el-menu-item>
		  <el-menu-item index="3">报警管理</el-menu-item>
		  <el-submenu index="4">
		    <template slot="title">账号管理</template>
			<!-- 修改密码的弹窗 -->
		    <el-menu-item  @click="open">修改密码</el-menu-item>
			<!-- 退出按钮 -->
			<el-menu-item index="4"  @click="logout">退出</el-menu-item>
		  </el-submenu>
		</el-menu>
		
	</el-header>
</template>

<script>
	export default{
		methods:{
			logout() {
				window.sessionStorage.clear()//清除里面的token
				this.$router.push('/login');
			},
			//修改密码的弹窗方法
			 open() {
			        this.$prompt('请输入新密码', '提示', {
			          confirmButtonText: '确定',
			          cancelButtonText: '取消',
			          // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
			          // inputErrorMessage: '密码格式不正确'
					  inputType:'password',
			        }).then(() => {
			          this.$message({
			            type: 'success',
			            message: '修改成功'
			          });
			        }).catch(() => {
			          this.$message({
			            type: 'info',
			            message: '取消修改'
			          });       
			        });
			      }
			
		}
	}
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
</style>
