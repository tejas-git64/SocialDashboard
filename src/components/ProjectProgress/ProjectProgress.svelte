<script lang="ts">
	import type { ProjectType } from '../../types/DashboardTypes';
	export let project: ProjectType;
	export let index: number;
</script>

<div class="w-full flex items-center justify-start text-neutral-600 py-2 border-t-[1px]">
	<p class="sm:w-[14%] w-[12.5%] md:w-[60px] lg:w-[60px] text-sm font-medium">
		{index > 9 ? index + 1 : '0' + (index + 1)}
	</p>
	<b
		class="sm:w-[40%] w-[38%] md:w-[38%] text-sm mr-[4.5%] sm:mr-[3.5%] md:mr-[2.5%] lg:w-[36%] lg:mr-4 xl:w-[175px] font-semibold text-neutral-800 whitespace-nowrap overflow-hidden"
		>{project.name}</b
	>
	<div class="w-auto flex items-center justify-start xl:mr-4">
		<!--Progress bar-->
		<div
			style="background: linear-gradient(90deg,{project.color},#fff);"
			class="w-[25vw] md:w-[32vw] h-[5px] sm:h-[6px] mr-2 sm:mr-4 lg:w-[12vw] xl:w-32 text-sm font-medium border-none"
		>
			<div
				style="background-color: {project.color}; width: {project.popularityPercentage +
					'%'}; height: 100%; border-radius: 10px;"
			/>
		</div>
		<p
			style="border: 2px solid {project.color}; color: {project.color};"
			class="text-[10px] sm:text-xs px-2 border-2 rounded-md font-bold"
		>
			{project.popularityPercentage}%
		</p>
	</div>
</div>

<style>
</style>
