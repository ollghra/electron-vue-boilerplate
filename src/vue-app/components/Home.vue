<template>
	<!--<h1>Hi {{username}}</h1>-->
	<ConceptMap/>
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
