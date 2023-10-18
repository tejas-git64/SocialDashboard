<script lang="ts">
	import { Chart, type ChartConfiguration } from 'chart.js';
	import { onMount } from 'svelte';
	import { colors, fontFamily } from '../../../stores/stores';

	let prodCanvas: HTMLCanvasElement;
	let prodChart;
	const data1 = [2, 0.5, 2.3, 2.8, 1.3, 3, 3.7, 1, 2.3, 2.5, 1.8, 1.5];
	const data2 = [0.5, 2, 3.5, 1.5, 2.5, 2.3, 3, 3.5, 0.5, 3, 3.5, 2];
	let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	onMount(() => {
		const ctx = prodCanvas.getContext('2d');
		if (ctx === null) {
			throw new Error('Failed to get 2d context on canvas');
		} else {
			const config: ChartConfiguration = {
				type: 'line',
				data: {
					labels: months,
					datasets: [
						{
							label: 'Research',
							data: data1,
							borderColor: colors[0],
							fill: true,
							tension: 0.5,
							pointStyle: 'circle',
							backgroundColor: 'rgba(255,137,202,0.6)',
							pointBackgroundColor: 'rgba(0,0,0,0)',
							pointBorderWidth: 0,
							borderWidth: 0
						},
						{
							label: 'Content creation',
							data: data2,
							borderColor: colors[2],
							fill: true,
							tension: 0.5,
							backgroundColor: 'rgba(185,245,118,0.8)',
							pointBackgroundColor: 'rgba(0,0,0,0)',
							pointBorderWidth: 0,
							borderWidth: 0
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
								borderRadius: 15,
								boxHeight: 10,
								boxWidth: 10
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
							display: true,
							grid: {
								display: false
							},
							ticks: {
								font: {
									family: $fontFamily,
									weight: 'bold'
								}
							},
							title: {
								display: true,
								font: {
									family: $fontFamily
								}
							}
						},
						y: {
							display: true,
							padding: 0,
							title: {
								display: true,
								font: {
									family: $fontFamily,
									weight: 'bold',
									size: 15
								}
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
			prodChart = new Chart(ctx, config);
		}
	});
</script>

<div
	class="w-full h-auto mt-2 md:mt-0 md:w-[60%] md:h-full lg:w-[510px] lg:mr-2.5 xl:mr-3 xl:max-w-[510px] bg-white rounded-2xl overflow-hidden mb-2 lg:mb-0 hover:shadow-xl border-[1px] border-neutral-200 transition-all ease-out"
>
	<div class="w-full h-auto md:h-14 flex justify-between items-center p-4">
		<h2 class="font-bold text-md xl:text-lg">Productivity</h2>
		<button>></button>
	</div>
	<canvas
		bind:this={prodCanvas}
		class="w-full mx-auto h-auto min-[1240px]:w-[59.5%] pr-5"
		id="prodChart"
	/>
</div>
