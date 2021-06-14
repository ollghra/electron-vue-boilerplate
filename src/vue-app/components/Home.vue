<template>
	<!--<h1>Hi {{username}}</h1>-->
	<div id="container">
		<ConceptMap/>
		<div class="overlay" id="menu">
			<figure class="image is-48x48">
				<img src="@/assets/logo.svg" alt="EOFIS logo"/>
			</figure>
			<ul>
				<li>v FLASHCARDS</li>
				<li>v FAVOURITES</li>
			</ul>
		</div>
	</div>
</template>
<script>
import ConceptMap from "@/components/ConceptMap";
export default {
	props: {
		username: String
	},
	components: {
		ConceptMap
	}
};

</script>

<style scoped>
#container div, .overlay {
	position: absolute;
	top: 36px;
	left: 0px;
	border: 1px solid blueviolet;
}
#menu {
	width: 200px;
	z-index: 1;
}
</style>
