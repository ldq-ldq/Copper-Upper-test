<template>
	<div id="app">
		<!-- <head-nav ></head-nav>
	    <router-view></router-view> -->
		<div v-if="!$route.meta.keepAlive">
			<head-nav></head-nav>
			<router-view></router-view>
		</div>
		<router-view v-if="$route.meta.keepAlive"></router-view>
	</div>
</template>

<script>
	import HeadNav from '@/components/common/HeadNav.vue'
	export default {
		name: 'app',
		components: {
			HeadNav
		}
	}
</script>

<style>
</style>
