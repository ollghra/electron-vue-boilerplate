<template>
	<div id="network"></div>
	<h2 id="eventSpanHeading"></h2>
	<pre id="eventSpanContent"></pre>
</template>
<script >
import { DataSet, Network } from "vis-network/standalone";
//import { vis } from "vis-network";
var network = null;
export default {
	name : "ConceptMap",
	data() {
		return {
			nodes : new DataSet([
				{ id: 1, label: "My Library", title: "popup" },
				{ id: 2, label: "History", title: "popup" },
				{ id: 3, label: "WWII", title: "popup" },
				{ id: 4, label: "Pre-history", title: "popup" },
				{ id: 5, label: "Current Affairs", title: "popup" },
				{ id: 6, label: "Africa", title: "popup" },
				{ id: 7, label: "G7", title: "popup" },
				{ id: 8, label: "Economics", title: "popup" },
				{ id: 9, label: "WWII", title: "popup" }
			]),
			edges : new DataSet([
				{ from: 1, to: 2},
				{ from: 2, to: 3},
				{ from: 2, to: 4},
				{ from: 2, to: 9},
				{ from: 1, to: 5},
				{ from: 5, to: 6},
				{ from: 4, to: 6},
				{ from: 5, to: 7},
				{ from: 1, to: 8},
			]),
			options : {
				interaction: { hover: true },
				manipulation: { enabled: true }
			},
			container: ""
		};
	},
	computed: {
		graph_data() {
			return {
				nodes: this.nodes,
				edges: this.edges
			};
		}
	},
	mounted() {
		//console.log(`Node DataSet ${nodes}`);
		//console.log(`Edges DataSet ${edges}`);
		//console.log(`Data ${data}`);
		//console.log(`Options ${options}`);
		//console.log("MOUNTED");
		this.container = document.getElementById("network");
		network = new Network(this.container, this.graph_data, this.options);
		
		console.log(`Container ${this.container}`);
		console.log(`Network ${network}`);
		console.log(Network);
		//network.on("click", function (params) {
		//	params.event = "[original event]";
		//	document.getElementById("eventSpanHeading").innerText = "Click event:";
		//	document.getElementById("eventSpanContent").innerText = JSON.stringify(
		//		params,
		//		null,
		//		4
		//	);
		//	console.log(`click event, getNodeAt returns: ${this.getNodeAt(params.pointer.DOM)}`);
		//});
	}
};
/* Don't use this, see https://stackoverflow.com/questions/60920949/typeerror-vis-network-webpack-imported-module-3-dataset-is-not-a-constructor
 * Apparently soon to be deprecated
import vis from "vis-network";
*/
</script>
<style scoped>
#network {
	width: 600px;
	height: 400px;
	border: 1px solid blueviolet;
}
#dddddnetwork {
	width: 100vw;
	height: 100vh;
	padding: 0;
	margin: 0;
	position:absolute;
	left: 0px;
	top: 0px;
	z-index: -1;

	background: #fff000;
}
</style>
