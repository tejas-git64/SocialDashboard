<script lang="ts">
	import logo from '../../assets/images/icons8-star-64-logo.png';
	import pie from '../../assets/images/icons8-pie-chart-64.png';
	import bar from '../../assets/images/icons8-bar-32.png';
	import project from '../../assets/images/icons8-project-48.png';
	import team from '../../assets/images/icons8-team-64.png';
	import graph from '../../assets/images/icons8-graph-64.png';
	import msg from '../../assets/images/icons8-message-32.png';
	import settings from '../../assets/images/icons8-settings-50.png';
	import signout from '../../assets/images/icons8-sign-out-50.png';
	import shiny from '../../assets/images/icons8-clean-64.png';
	import { slide } from 'svelte/transition';
	import { showNav } from '../../stores/stores';
	import { onMount } from 'svelte';

	function handleResize() {
		if (window.innerWidth >= 1280) {
			$showNav = true;
		} else {
			$showNav = false;
		}
	}
	onMount(() => {
		handleResize();
		window.addEventListener('resize', handleResize);
	});
</script>

<nav
	transition:slide
	class="w-80 z-20 fixed xl:flex xl:w-96 h-full border-2 transition-all ease-out xl:relative bg-white overflow-hidden flex-col items-center justify-between overflow-y-scroll"
	id="sideNav"
	style={$showNav ? 'transform: translateX(0%)' : 'transform: translateX(-100%)'}
>
	<div>
		<div class="w-full h-20 flex items-center justify-center mt-2 flex-shrink">
			<img src={logo} alt="logo" class="-ml-4 mr-2 w-12" />
			<p class="font-bold text uppercase text-2xl">Brand</p>
		</div>
		<ul class="w-60 mx-auto mt-4 h-auto rounded-xl flex-shrink">
			<li class="flex items-center justify-start p-3 rounded-xl border-2 bg-black text-white">
				<img src={pie} alt="dashboard" class="w-7 h-7 mx-6" />
				<p class="text-lg font-semibold">Dashboard</p>
			</li>
			<li
				class="flex items-center justify-start p-3 rounded-xl bg-transparent text-neutral-400 mt-2"
			>
				<img src={bar} alt="dashboard" class="w-6 h-6 invert-[0.3] mx-7" />
				<p class="text-lg font-semibold">Productivity</p>
			</li>
			<li
				class="flex items-center justify-start p-3 rounded-xl bg-transparent text-neutral-400 mt-2"
			>
				<img src={project} alt="dashboard" class="w-6 h-7 invert-[0.4] mx-7" />
				<p class="text-lg font-semibold">Projects</p>
			</li>
			<li
				class="flex items-center justify-start p-3 rounded-xl bg-transparent text-neutral-400 mt-2"
			>
				<img src={team} alt="dashboard" class="w-6 h-7 invert-[0.5] mx-7" />
				<p class="text-lg font-semibold">Team</p>
			</li>
			<li
				class="flex items-center justify-start p-3 rounded-xl bg-transparent text-neutral-400 mt-2"
			>
				<img src={graph} alt="dashboard" class="w-5 h-5 invert-[0.5] mx-7 mr-8" />
				<p class="text-lg font-semibold">Insights</p>
			</li>
			<li
				class="flex items-center justify-start p-3 rounded-xl bg-transparent text-neutral-400 mt-2"
			>
				<img src={msg} alt="dashboard" class="w-7 h-7 invert-[0.3] mx-6 mr-7" />
				<p class="text-lg font-semibold">Message</p>
			</li>
			<li
				class="flex items-center justify-start p-3 rounded-xl bg-transparent text-neutral-400 mt-2"
			>
				<img src={settings} alt="dashboard" class="w-6 h-6 invert-[0.5] mx-6 mr-7" />
				<p class="text-lg font-semibold">Settings</p>
			</li>
			<li
				class="flex items-center justify-start p-3 rounded-xl bg-transparent text-neutral-400 mt-2"
			>
				<img src={signout} alt="dashboard" class="w-5 h-5 invert-[0.5] mx-7" />
				<p class="text-lg font-semibold">Sign out</p>
			</li>
		</ul>
	</div>
	<div
		style="background: radial-gradient(at center,#000,#333333);"
		class="w-48 h-auto rounded-2xl p-4 py-14 my-10 flex items-center mx-auto justify-center flex-col text-white relative xl:left-0 overflow-hidden flex-shrink"
	>
		<p
			style="background: linear-gradient(180deg,#000,#535353);"
			class="w-40 h-48 border-neutral-400 rounded-full absolute -top-14 -right-10"
		/>
		<div class="w-full h-full flex flex-col justify-center items-center z-10">
			<img src={shiny} alt="logo" class="w-14 mb-6" />
			<h2 class="text-xl font-bold">Brand Pro</h2>
			<p class="text-xs text-center px-4 leading-3 my-1 mb-4">Get access to all features on pro</p>
			<button class="bg-white text-black px-8 py-2 text-xs font-semibold rounded-full"
				>Get Pro</button
			>
		</div>
		<p
			style="background: linear-gradient(0deg,#000,#ffe);"
			class="w-40 h-48 border-2 border-neutral-400 rounded-full absolute -bottom-24 -left-14 opacity-40 shadow-white"
		/>
	</div>
</nav>

<style>
	#sideNav::-webkit-scrollbar {
		width: 0px;
	}
</style>
