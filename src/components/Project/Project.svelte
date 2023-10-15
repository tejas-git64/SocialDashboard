<script lang="ts">
	import { projects } from '../../stores/stores';
	import ProjectProgress from '../ProjectProgress/ProjectProgress.svelte';
</script>

<div
	class="p-4 py-2 flex flex-col items-start justify-between w-full h-full lg:w-[50%] lg:h-[270px] xl:w-[510px] rounded-2xl hover:shadow-xl border-[1px] border-neutral-200 transition-all ease-out mr-3 bg-white"
>
	<div class="w-full h-full md:h-auto flex justify-between items-center pb-2">
		<h2 class="font-bold text-md xl:text-lg">Latest Project</h2>
		<button>></button>
	</div>
	<div class="w-full flex items-center justify-start py-2">
		<p class="sm:w-[20%] w-[13%] md:w-[60px] text-sm font-medium text-neutral-400">#</p>
		<p class="sm:w-[60%] w-[42%] md:w-[40%] text-sm font-medium text-neutral-400">Name</p>
		<p class="sm:w-[60%] w-[40%] md:w-[45%] text-sm font-medium text-neutral-400">Popularity</p>
	</div>
	<div class="w-full h-40">
		{#each $projects as project, index}
			<ProjectProgress {project} {index} />
		{/each}
	</div>
</div>
