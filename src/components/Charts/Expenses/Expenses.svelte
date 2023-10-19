<script lang="ts">
	import { Chart } from 'chart.js';
	import type { ChartConfiguration } from 'chart.js';
	import { colors, fontFamily } from '../../../stores/stores';
	import { onMount } from 'svelte';

	const expenses1 = [3400, 2800, 3300, 2400, 3700, 2400, 3700];
	const expenses2 = [1885, 1622, 1640, 1000, 2000, 1495, 1400];
	let months = [' ', ' ', ' ', ' ', ' ', ' ', ' '];
	let expenseCanvas: HTMLCanvasElement;
	onMount(() => {
		const ctx = expenseCanvas.getContext('2d');
		if (ctx === null) {
			throw new Error('Failed to get 2d context on canvas');
		} else {
			const gradient1 = ctx.createLinearGradient(0, 0, 0, 350);
			const gradient2 = ctx.createLinearGradient(0, 0, 0, 220);
			gradient1.addColorStop(0, 'rgba(185,245,118,0.6)');
			gradient1.addColorStop(0.4, '#fff');
			gradient2.addColorStop(0, 'rgba(179,137,255,0.3)');
			gradient2.addColorStop(0.4, '#fff');
			const config: ChartConfiguration = {
				type: 'line',
				data: {
					labels: months,
					datasets: [
						{
							label: 'Last month',
							data: expenses2,
							borderColor: colors[2],
							fill: true,
							tension: 0.3,
							backgroundColor: gradient1
						},
						{
							label: 'This month',
							data: expenses1,
							borderColor: colors[1],
							fill: true,
							tension: 0.4,
							backgroundColor: gradient2
						}
					]
				},
				options: {
					responsive: true,
					font: {
						family: $fontFamily
					},
					plugins: {
						legend: {
							position: 'bottom',
							labels: {
								font: {
									family: $fontFamily,
									weight: 'bold',
									size: 13
								},
								borderRadius: 100,
								boxHeight: 10,
								boxWidth: 10,
								padding: 20
							}
						},
						tooltip: {
							padding: 8,
							titleFont: {
								family: $fontFamily
							},
							bodyFont: {
								family: $fontFamily
							},
							usePointStyle: true
						}
					},
					scales: {
						x: {
							display: false,
							grid: {
								display: false
							},
							ticks: {
								font: {
									family: $fontFamily,
									weight: 'bold'
								}
							}
						},
						y: {
							display: false,
							padding: 0,
							title: {
								display: false
							},
							ticks: {
								maxTicksLimit: 5,
								font: {
									family: $fontFamily
								}
							},
							suggestedMin: 0,
							suggestedMax: 4
						}
					},
					animations: {
						y: {
							easing: 'easeInOutSine',
							duration: 1000
						}
					}
				}
			};
			const expenseChart = new Chart(ctx, config);
		}
	});
</script>

<div
	class="w-full h-[55vw] mt-2 md:mt-0 md:w-full md:h-full lg:w-full lg:h-full min-[1240px]:w-[55%] lg:mr-3 xl:max-w-[425px] bg-white rounded-2xl overflow-hidden hover:shadow-xl border-[1px] border-neutral-200 transition-all ease-out"
>
	<div class="w-full h-auto md:h-14 flex justify-between items-center p-4">
		<h2 class="font-bold text-md xl:text-lg">Expenses</h2>
		<button>></button>
	</div>
	<canvas
		bind:this={expenseCanvas}
		class="w-full mx-auto h-auto pb-5 md:mt-10 md:pb-0 md:h-full lg:pb-6 lg:-mt-4 min-[1240px]:w-[59.5%] min-[1240px]:mt-[4vw] min-[1240px]:px-6 min-[1240px]:pb-0 px-6 xl:mt-0"
		id="prodChart"
	/>
</div>
