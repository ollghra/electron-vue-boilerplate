<template>
	<!--<h1>Hi {{username}}</h1>-->
	<div id="container">
		<ConceptMap/>
		<div id="overlay">
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
#container div, #overlay {
	position: absolute;
	top: 36px;
	left: 0px;
	border: 1px solid blueviolet;
}
#overlay {
	width: 200px;
	/*z-index: 1;*/
}
</style>
