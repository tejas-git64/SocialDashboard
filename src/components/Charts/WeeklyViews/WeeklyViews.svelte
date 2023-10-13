<script lang="ts">
	import type { ChartConfiguration } from 'chart.js';
	import { Chart } from 'chart.js';
	import { registerables } from 'chart.js';
	import { onMount } from 'svelte';

	let barCanvas: HTMLCanvasElement;
	Chart.register(...registerables);
	const dribbleaData = [30, 60, 100, 70, 140, 20, 190]; //sample data
	const instaData = [50, 40, 80, 180, 100, 60, 180]; //sample data
	const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
	const barWidth = 10;
	const barRadius = 5;
	let config: ChartConfiguration = {
		type: 'bar',
		data: {
			labels: days,
			datasets: [
				{
					label: 'Dribble',
					data: dribbleaData,
					backgroundColor: '#A3FF40',
					barThickness: barWidth,
					borderRadius: barRadius,
					barPercentage: 0.8
				},
				{
					label: 'Instagram',
					data: instaData,
					backgroundColor: '#B389FF',
					barThickness: barWidth,
					borderRadius: barRadius,
					barPercentage: 0.8
				}
			]
		},
		options: {
			scales: {
				x: {
					grid: {
						display: false
					},
					ticks: {
						font: {
							family: `'Kumbh Sans', sans-serif`,
							size: 14,
							weight: 'medium'
						}
					}
				},
				y: {
					ticks: {
						font: {
							family: `'Kumbh Sans', sans-serif`,
							size: 14,
							weight: 'medium'
						}
					}
				}
			},
			plugins: {
				legend: {
					align: 'center',
					labels: {
						color: 'rgba(0,0,0,0)', //hides the legend text
						boxWidth: 15, //Adjusts box width of each bar in legend
						boxHeight: 0, //Adjusts box height of each bar in legend
						font: {
							family: `'Kumbh Sans', sans-serif`,
							size: 12,
							weight: 'bold'
						}
					}
				}
			}
		}
	};
	onMount(() => {
		const ctx = barCanvas.getContext('2d');
		if (ctx === null) {
			throw new Error('Failed to get 2d context on canvas');
		} else {
			const barChart = new Chart(ctx, config);
		}
	});
</script>

<div
	class="p-4 px-6 flex flex-col items-start justify-between border-[1px] border-neutral-100 w-full h-auto rounded-3xl hover:shadow-xl"
>
	<div class="w-full flex justify-between items-center mb-4">
		<h2 class="font-bold text-xl">Weekly Views</h2>
		<button class="font-bold border-[1px] p-2 pb-[3px] pt-0 rounded-full hover:bg-neutral-100"
			>></button
		>
	</div>
	<canvas id="barChart" bind:this={barCanvas} class="w-full h-full" />
</div>
