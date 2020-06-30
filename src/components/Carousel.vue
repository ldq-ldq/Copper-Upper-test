<template>
	<div>
		<el-carousel indicator-position="outside">
			<el-carousel-item v-for="item in 3" :key="item">
				<!-- <h3>{{ item }}</h3> -->
			</el-carousel-item>
		</el-carousel>

		<div class="block">
			<h4>历史记录</h4>
			<el-timeline>
				<el-timeline-item timestamp="2018/4/12" placement="top">
					<el-card>
						<h4>更新 Github 模板</h4>
						<p>王小虎 提交于 2018/4/12 20:46</p>
					</el-card>
				</el-timeline-item>
				<el-timeline-item timestamp="2018/4/3" placement="top">
					<el-card>
						<h4>更新 Github 模板</h4>
						<p>王小虎 提交于 2018/4/3 20:46</p>
					</el-card>
				</el-timeline-item>
				<el-timeline-item timestamp="2018/4/2" placement="top">
					<el-card>
						<h4>更新 Github 模板</h4>
						<p>王小虎 提交于 2018/4/2 20:46</p>
					</el-card>
				</el-timeline-item>
			</el-timeline>
		</div>
	</div>

</template>


<script>
	export default{
		data(){
			return{
				imgsUrl:['~assets/img/banner.png','../assets/img/吊花.jpg','../assets/img/吊花.jpg']
			}
		}
	}

</script>


<style>
	.el-carousel__item h3 {
		color: #475669;
		font-size: 18px;
		opacity: 0.75;
		line-height: 300px;
		margin: 0;
	}
	
	.el-carousel__item:nth-child(3n) {
		/* background-color: #99a9bf; */
		background: url(../assets/img/banner1.jpg) no-repeat center;
	}

	.el-carousel__item:nth-child(3n+1) {
		/* background-color: #d3dce6; */
		background: url(../assets/img/banner2.jpg) no-repeat center;
	}
	.el-carousel__item:nth-child(3n+2) {
		/* background-color: #d3dce6; */
		background: url(../assets/img/banner3.jpg) no-repeat center;
	}
</style>
