<template>
	<!--<h1>Hi {{username}}</h1>-->
	<div id="container">
		<ConceptMap/>
		<Search id="search" class="overlay"/>
		<NoteList/>
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
import Search from "@/components/Search";
import NoteList from "@/components/NoteList";
export default {
	props: {
		username: String
	},
	components: {
		ConceptMap,
		Search,
		NoteList
	},
	mounted() {
		console.log(this.$db);
	}
};

</script>

<style scoped>
#container div, .overlay {
	position: absolute;
	border: 1px solid blueviolet;
}
#menu {
	top: 36px;
	left: 0px;
	width: 200px;
	z-index: 1;
}
#search {
	top: 36px;
	right: 0px;
	width: 200px;
	z-index: 1;
}
</style>
