<script lang="ts">
	import Calendar from '../components/Calendar/Calendar.svelte';
	import Card from '../components/Card/Card.svelte';
	import Expenses from '../components/Charts/Expenses/Expenses.svelte';
	import MapChart from '../components/Charts/MapChart/MapChart.svelte';
	import Productivity from '../components/Charts/Productivity/Productivity.svelte';
	import WeeklyViews from '../components/Charts/WeeklyViews/WeeklyViews.svelte';
	import Project from '../components/Project/Project.svelte';
	import SearchBar from '../components/SeachBar/SearchBar.svelte';
	import Team from '../components/Team/Team.svelte';
	import { socialMediaCards } from '../stores/stores';
</script>

<div class="w-full h-full flex flex-col items-start justify-start bg-neutral-100">
	<header
		class="w-[91%] sm:w-[93%] sm:ml-5 lg:w-[95%] lg:ml-6 min-[1240px]:w-[93.5%] xl:w-[96%] 2xl:w-[1240px] mx-auto h-12 border-2 mt-3 flex items-center justify-between"
	>
		<div class="w-[60%] h-full flex items-center justify-start">
			<h2 class="text-xl font-bold mr-8">Dashboard</h2>
			<SearchBar />
		</div>
	</header>
	<div
		class="w-full h-auto xl:h-[270px] mx-auto flex flex-col lg:flex-row items-center justify-start px-6 lg:mt-3"
	>
		<WeeklyViews />
		<div
			id="social-cards"
			class="w-full h-full flex justify-between xl:w-[60%] xl:ml-0.5 lg:w-[510px] lg:h-[270px] 2xl:w-[715px] items-center mt-3 mb-3 lg:my-0 lg:py-0"
		>
			{#each $socialMediaCards as card, index (index)}
				<Card {card} />
			{/each}
		</div>
	</div>
	<div
		class="w-full h-auto lg:h-[300px] mx-auto flex flex-col lg:flex-row items-start justify-center lg:items-center lg:justify-center px-6 py-0 lg:mt-3 bg-neutral-100"
	>
		<Project />
		<div
			class="w-full h-auto md:h-auto md:my-2 flex items-center justify-between xl:justify-start flex-col md:flex-row my-0"
		>
			<MapChart />
			<Calendar />
		</div>
	</div>
	<div
		class="w-full h-auto lg:h-[300px] mx-auto flex flex-col md:h-auto md:justify-between md:items-center md:flex-row items-start justify-center lg:items-center lg:justify-center px-6 py-0 lg:mt-3 bg-neutral-100"
	>
		<Productivity />
		<div
			class="w-full h-auto md:w-full md:h-full flex items-center justify-between xl:justify-start flex-col md:flex-row my-0"
		>
			<Expenses />
			<Team />
		</div>
	</div>
</div>
