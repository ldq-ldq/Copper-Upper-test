<template>
	<div class="login_container">
		
		<div class="login_box">
			<!-- 图片区域 -->
			<div class="avatar_box">
				<img src="~/assets/img/logo(finish).png" alt="">
			</div>
			<!-- 表单区域 -->
			<el-form ref="loginFormRef" :model="LoginForm" :rules="loginFormRules" label-width="0px" class="login_form">
				<!-- 用户名 -->
			  <el-form-item prop="username">
			    <el-input v-model="LoginForm.username" prefix-icon="iconfont icon-ren" placeholder="请输入用户名"></el-input>
			  </el-form-item>
			  <!-- 密码 -->
			  <el-form-item  prop="password">
			    <el-input v-model="LoginForm.password" prefix-icon="iconfont icon-suo1" type="password" placeholder="请输入密码"></el-input>
			  </el-form-item>
			  <!-- 登入框 -->
			  <el-form-item class="btns">
			    <el-button type="primary" @click="Login">登入</el-button>
				<el-button type="info" @click="LoginFormReset">重置</el-button>
				<el-button type="primary" @click="Logintext">登入测试</el-button>
			  </el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				// 这是登入表单的数据绑定对象
				LoginForm:{
					username:'admin',
					password:'123456'
				},
				// 表单的验证规则
				loginFormRules:{
					// 验证用户名是否合法deng'r
					username: [
                       { required: true, message: '请输人登入姓名', trigger: 'blur' },
                       { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                    ],
					// 验证密码是否合法
					password:[
						{ required: true, message: '请输人登入密码', trigger: 'blur' },
						{ min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
					]
				}
			}
		},
	    methods:{
			LoginFormReset(){
				this.$refs.loginFormRef.resetFields();
			},
			Login(){
				this.$refs.loginFormRef.validate(async valid=>{
					if (!valid) return;
					const { data : res}=await this.$http.post('login', this.LoginForm)//请求代码!!!
					// const aaa = 200;//测试代码
					if(res.meta.status !== 200) return this.$message.error("用户名或密码错误");
					this.$message.success("登入成功");
				})
				//1将登入成功的之后的token,保存到客户端的sessionStrorage中，
				//1.1项目中除了登录之外的其他api接口，必须在登录之后才能访问
				//1.2token 只应在当前网站打开期间生效，所以将token保存在session中
				window.sessionStorage.setItem("token",res.data.token);//保存代码！！！
				
				//2.通过编程式导航跳转后台主页，路由地址是/home
				this.$router.push("/home");
			},
			// 测试登入
			Logintext(){
				this.$refs.loginFormRef.validate(valid=>{
					if(this.LoginForm.username==='admin'&&this.LoginForm.password==='123456'){
						this.$message.success("登入成功");
						this.$router.push("/home");
					}else{
						this.$message.error("登入失败");
					}
				})
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.login_container{
		background-image: url('~assets/img/big_login.jpg');
		opacity: 0.9;
		height: 100%;
	}
	.login_box{
		width: 450px;
		height: 300px;
		background-color: #fafafa;
		position:absolute;
		top:50%;
		left: 50%;
		transform: translate(-50%,-50%);
		border-radius: 15px;
		box-shadow: 0 0 20px #EEEEEE;
	}
	.avatar_box{
		height: 130px;
		width: 130px;
		border: 1px solid #EEEEEE;
		border-radius: 50%;
		padding: 10px;
		box-shadow: 0 0 10px #DDDDDD ;
		position: absolute;
		left: 50%;
		transform: translate(-50%,-50%);
		background-color: #FFF;
		img{
			width: 100%;
			height: 100%;
			border-radius: 50%;
			background-color: #EEEEEE;
		}
	}
	.login_form{
		position: absolute;
		bottom: 0;
		width: 100%;
		padding:0 20px;
		box-sizing: border-box;
		.el-input{
			box-shadow: 3px 3px 10px #adb2bc;
			border: none;
		}
	}
	.btns{
		display: flex;
		justify-content:flex-end ;
	}
</style>
