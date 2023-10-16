<script lang="ts">
	import Card from '../components/Card/Card.svelte';
	import MapChart from '../components/Charts/MapChart/MapChart.svelte';
	import WeeklyViews from '../components/Charts/WeeklyViews/WeeklyViews.svelte';
	import Project from '../components/Project/Project.svelte';
	import { socialMediaCards } from '../stores/stores';
</script>

<div class="w-full h-full flex flex-col items-start justify-start bg-neutral-100">
	<div
		class="w-full h-auto xl:h-[270px] border-y-2 mx-auto flex flex-col lg:flex-row items-center justify-start px-6 py-0 lg:my-2"
	>
		<WeeklyViews />
		<div
			id="social-cards"
			class="w-full h-full flex justify-between xl:w-[50%] xl:ml-4 lg:h-[270px] 2xl:w-[600px] items-center mt-3 mb-3 lg:my-2 lg:py-0"
		>
			{#each $socialMediaCards as card, index (index)}
				<Card {card} />
			{/each}
		</div>
	</div>
	<div
		class="w-full h-auto xl:h-[300px] mx-auto flex flex-col lg:flex-row items-start justify-center lg:items-center lg:justify-start px-6 py-0 border-y-2 lg:my-2"
	>
		<Project />
		<MapChart />
	</div>
</div>
