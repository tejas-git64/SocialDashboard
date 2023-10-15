<script lang="ts">
	import Card from '../components/Card/Card.svelte';
	import WeeklyViews from '../components/Charts/WeeklyViews/WeeklyViews.svelte';
	import Project from '../components/Project/Project.svelte';
	import { socialMediaCards } from '../stores/stores';
</script>

<div class="w-full h-full flex flex-col items-start justify-start bg-neutral-100">
	<div
		class="w-full h-auto xl:h-[270px] border-y-2 mx-auto flex flex-col lg:flex-row items-center justify-start px-6 py-0 my-2"
	>
		<WeeklyViews />
		<div
			id="social-cards"
			class="w-full h-full flex justify-between xl:w-[50%] xl:ml-4 lg:h-[270px] 2xl:w-[600px] items-center py-3 lg:py-0"
		>
			{#each $socialMediaCards as card, index (index)}
				<Card {card} />
			{/each}
		</div>
	</div>
	<div
		class="w-full h-auto xl:h-[270px] mx-auto flex flex-col lg:flex-row items-center justify-start px-6 py-0 border-y-2"
	>
		<Project />
	</div>
</div>
