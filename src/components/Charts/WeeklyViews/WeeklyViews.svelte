<script lang="ts">
	import type { ChartConfiguration } from 'chart.js';
	import { Chart } from 'chart.js';
	import { registerables } from 'chart.js';
	import { onMount } from 'svelte';
	import { fontFamily } from '../../../stores/stores';

	let barCanvas: HTMLCanvasElement;
	Chart.register(...registerables);
	const dribbleaData = [30, 60, 100, 70, 140, 20, 190]; //sample data
	const instaData = [50, 40, 80, 180, 100, 60, 180]; //sample data
	const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
	const barWidth = 8;
	const barRadius = 3;
	let config: ChartConfiguration = {
		type: 'bar',
		data: {
			labels: days,
			datasets: [
				{
					label: 'Dribble',
					data: dribbleaData,
					backgroundColor: '#B9F576',
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
							family: $fontFamily,
							size: 14,
							weight: 'medium'
						}
					}
				},
				y: {
					ticks: {
						font: {
							family: $fontFamily,
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
							family: $fontFamily,
							size: 12,
							weight: 'bold'
						}
					}
				},
				tooltip: {
					boxPadding: 4,
					cornerRadius: 5,
					titleFont: {
						family: $fontFamily
					},
					bodyFont: {
						family: $fontFamily,
						weight: 'bold'
					},
					usePointStyle: true,
					bodyAlign: 'center',
					padding: 8
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
	class="p-2 flex flex-col items-start justify-between w-full lg:w-[50%] lg:h-[270px] xl:w-[510px] rounded-2xl hover:shadow-xl border-[1px] border-neutral-200 transition-all ease-out mt-3 md:mt-0 sm:mr-3 bg-white"
>
	<div class="w-full h-full md:h-auto flex justify-between items-center -mb-5 p-2">
		<h2 class="font-bold text-md xl:text-lg">Weekly Views</h2>
		<button>></button>
	</div>
	<canvas
		id="barChart"
		bind:this={barCanvas}
		class="w-full h-full p-3 pt-0 pr-4 md:pb-5"
		width=""
		height="240"
	/>
</div>
