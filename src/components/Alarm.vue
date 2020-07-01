<template>
	<div id="alarm">
		<h3>设备报警页</h3>
		<div class="alarm-head">
			<h4>报警查询</h4>
			<div class="alarm-head-left">
				<div class="time-start">
					<span>起始时间：</span>
					<div class="block">
					    <el-date-picker
					      v-model="value1"
					      type="date"
					      placeholder="选择日期">
					    </el-date-picker>
					</div>
				</div>
				<div class="time-end">
					<span>结束时间：</span>
					<div class="block">
					    <el-date-picker
					      v-model="value1"
					      type="date"
					      placeholder="选择日期">
					    </el-date-picker>
					</div>
				</div>
				<div class="searchType">
					<span>报警类型搜索:</span>
					<div>
					<el-select v-model="value" placeholder="请选择">
					    <el-option
					      v-for="item in options"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					</el-select>
					</div>
				</div>
			    <div class="search">
					<el-button type="primary">搜索</el-button>
				</div>
			</div>
		</div>
		<el-table
		    :data="tableData"
			height="500"
		    border
		    style="width: 90%">
			<el-table-column
			  prop="date"
			  label="时间"
			  width="180">
			</el-table-column>
		    <el-table-column
		      prop="name"
		      label="设备名称"
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="waterTem"
		      label="水温">
		    </el-table-column>
			<el-table-column
			  prop="furTem"
			  label="炉温">
			</el-table-column>
			<el-table-column
			  prop="waterSpeed"
			  label="水流速">
			</el-table-column>
			<el-table-column
			  prop="type"
			  label="告警类型">
			</el-table-column>
			<el-table-column
			  prop="del"
			  label="处理状况">
			</el-table-column>
		  </el-table>
	</div>
</template>

<script>
	export default {
	    data() {
	      return {
			//日期选择器
			pickerOptions1: {
			          disabledDate(time) {
			            return time.getTime() > Date.now();
			          },
			          shortcuts: [{
			            text: '今天',
			            onClick(picker) {
			              picker.$emit('pick', new Date());
			            }
			          }, {
			            text: '昨天',
			            onClick(picker) {
			              const date = new Date();
			              date.setTime(date.getTime() - 3600 * 1000 * 24);
			              picker.$emit('pick', date);
			            }
			          }, {
			            text: '一周前',
			            onClick(picker) {
			              const date = new Date();
			              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
			              picker.$emit('pick', date);
			            }
			          }]
			        },
			        value1: '',
			        value2: '',
			//报警列表
	        tableData: [
			  {
	          date: '2016-05-02',
	          name: '王小虎',
	          waterTem: 45,
			  furTem: 300,
			  waterSpeed:34,
			  type:"水温过高",
			  del:'未处理'
	          },{
	          date: '2016-05-02',
	          name: '王小虎',
	          waterTem: 45,
	          furTem: 300,
	          waterSpeed:34
	          },{
	          date: '2016-05-02',
	          name: '王小虎',
	          waterTem: 45,
	          furTem: 300,
	          waterSpeed:34
	          },{
	          date: '2016-05-02',
	          name: '王小虎',
	          waterTem: 45,
	          furTem: 300,
	          waterSpeed:34
	          },{
			  date: '2016-05-02',
			  name: '王小虎',
			  waterTem: 45,
			  furTem: 300,
			  waterSpeed:34
			  },{
			  date: '2016-05-02',
			  name: '王小虎',
			  waterTem: 45,
			  furTem: 300,
			  waterSpeed:34
			 },{
			  date: '2016-05-02',
			  name: '王小虎',
			  waterTem: 45,
			  furTem: 300,
			  waterSpeed:34
			 },{
			  date: '2016-05-02',
			  name: '王小虎',
			  waterTem: 45,
			  furTem: 300,
			  waterSpeed:34
			},{
			  date: '2016-05-02',
			  name: '王小虎',
			  waterTem: 45,
			  furTem: 300,
			  waterSpeed:34
			},{
			  date: '2016-05-02',
			  name: '王小虎',
			  waterTem: 45,
			  furTem: 300,
			  waterSpeed:34
			}],
	        options: [{
	                  value: '选项1',
	                  label: '黄金糕'
	                }, {
	                  value: '选项2',
	                  label: '双皮奶'
	                }, {
	                  value: '选项3',
	                  label: '蚵仔煎'
	                }, {
	                  value: '选项4',
	                  label: '龙须面'
	                }, {
	                  value: '选项5',
	                  label: '北京烤鸭'
	                }],
	                value: ''
		  }
	    }
	  }
</script>

<style scoped="scoped" lang="less">
	#alarm{
		padding-top: 50px;
		background-color: #608da1;
		.alarm-head{
			margin: 10px auto;
			width: 95%;
			height: 200px;
			// background-color: #f0e5b5;
			
		}
		.el-table{
			margin: 0 auto;
		}
	}
	.alarm-head-left{
		display: flex;
		justify-content:space-between ;
		.search{
			margin-top: 20px;
		}
	}
	
</style>
