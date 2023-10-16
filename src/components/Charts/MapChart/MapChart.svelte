<script lang="ts">
	import { onMount } from 'svelte';
	import { Chart } from 'chart.js';
	import * as ChartGeo from 'chartjs-chart-geo';
	import { ChoroplethController, ProjectionScale } from 'chartjs-chart-geo';
	import { colors } from '../../../stores/stores';

	let worldCanvas: HTMLCanvasElement;
	Chart.register(ChoroplethController, ProjectionScale, ChartGeo.ColorScale, ChartGeo.GeoFeature);
	const fontFamily = `'Kumbh Sans', sans-serif`;

	onMount(() => {
		const ctx = worldCanvas.getContext('2d');

		if (ctx === null) {
			throw new Error('Failed to get 2d context on canvas');
		} else {
			fetch('https://unpkg.com/world-atlas/countries-50m.json')
				.then((r) => r.json())
				.then((data) => {
					//@ts-ignore-this-line
					const countries = ChartGeo.topojson.feature(data, data.objects.countries).features;

					const chart = new Chart(ctx, {
						type: 'choropleth',
						data: {
							labels: countries.map((d: any) => d.properties.name),
							datasets: [
								{
									label: 'Countries',
									data: countries.map((d: any) => ({
										feature: d,
										value: Math.floor(Math.random() * 100)
									}))
								}
							]
						},
						options: {
							datasets: {
								choropleth: {
									backgroundColor: colors,
									borderColor: 'black',
									borderWidth: 0.3
								}
							},
							plugins: {
								legend: {
									display: false,
									align: 'center',
									labels: {
										color: 'rgba(0,0,0,0)', //hides the legend text
										boxWidth: 15, //Adjusts box width of each bar in legend
										boxHeight: 0, //Adjusts box height of each bar in legend
										font: {
											family: fontFamily,
											size: 12,
											weight: 'bold'
										}
									}
								},
								tooltip: {
									boxPadding: 4,
									cornerRadius: 5,
									titleFont: {
										family: fontFamily
									},
									bodyFont: {
										family: fontFamily,
										weight: 'bold'
									},
									usePointStyle: true,
									bodyAlign: 'center',
									padding: 8
								}
							},
							scales: {
								projection: {
									axis: 'x',
									projection: 'equalEarth'
								}
							}
						}
					});
				});
		}
	});
</script>

<div
	class="w-full h-auto lg:w-[50%] lg:h-full xl:w-[510px] xl:ml-4 bg-white rounded-2xl overflow-hidden my-1.5 lg:my-3 hover:shadow-xl border-[1px] border-neutral-200 transition-all ease-out"
>
	<div class="w-full h-auto md:h-14 flex justify-between items-center p-4">
		<h2 class="font-bold text-md xl:text-lg">Targeting by region</h2>
		<button>></button>
	</div>
	<canvas bind:this={worldCanvas} class="w-full h-auto -translate-x-4 mx-auto" />
</div>
