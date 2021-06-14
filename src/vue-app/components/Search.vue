<template>
	<div>
		<form
				id="search"
				@submit="finishSearch"
				action="javascript:void(0);"
				>
				<div v-if="errors.length">
					<b>Error:</b>
						<div class="notification is-danger" v-for="error in errors" :key="error.id">{{error}}</div>
				</div>

				<p>
					<label for="key">Key words</label>
					<input id="key" v-model="key" type="text" name="key"/>
				</p>
				<p>
					<input type="submit" value="Search"/>
				</p>
		</form>
	</div>
</template>

<script>
/* eslint-disable indent */

	"use strict";

	export default {
		data() {
			return {
				results: [],
				errors: [],
				key: null
			};
		},
		methods: {
			finishSearch: function (e) {
				this.errors = [];
				if (!this.key) { this.errors.push("Key required."); }
				e.preventDefault();
			}
		}
	};
</script>
