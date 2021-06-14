<template>
	<img class="vue-logo" src="@/assets/logo.svg" alt="Vue logo" />
	<Home username="Tiaɼnaċ"/>
</template>

<script>
console.log("APP RAN");
/* eslint-disable indent */
	"use strict";
	import Home from "@/components/Home";

	export default {
			components: { 
					Home
				},
			setup() {
					console.log("APP SETUP");
				},
			mounted() {
					console.log("APP MOUNTED");
				}
		};
</script>

<style lang="scss" scoped>
@charset "utf-8";

@import "@/styles/variables";

img {
	max-width: 10rem;
}
</style>
