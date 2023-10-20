<script lang="ts">
	import { slide } from 'svelte/transition';
	import bell from '../../assets/images/icons8-notification-32.png';
	let notifMenu = false;
</script>

<div class="relative">
	<div class="hidden sm:block">
		<button
			class="w-10 h-10 mr-4 mt-1 rounded-xl px-2 bg-white border-none shadow-sm outline-none"
			on:click={() => (notifMenu = !notifMenu)}
			><img src={bell} alt="notification" class="w-6 h-6 mx-[0.25px]" /></button
		>
		<p class="w-1.5 h-1.5 bg-black rounded-full absolute top-2 right-5" />
	</div>
	{#if notifMenu}
		<div
			transition:slide
			class="w-80 sm:w-96 h-96 bg-white absolute
		 z-10 -right-32 sm:right-4 top-14 rounded-xl flex flex-col items-start justify-start px-0 shadow-lg border-[1px]"
		>
			<div
				class="w-full flex items-center justify-between p-3 pl-4 pb-2 border-b-[1px] border-neutral-100"
			>
				<p class="text-sm font-semibold text-neutral-400">Count:</p>
				<button class="border-none rounded-none font-semibold text-sm"
					>Mark all as read &#10003;</button
				>
			</div>
			<div class="w-full h-full p-2 bg-neutral-100 flex rounded-b-xl">
				<p
					class="w-full h-full flex items-center justify-center font-semibold text-neutral-400 py-1 rounded-b-xl"
				>
					You currently have no notifications
				</p>
			</div>
		</div>
	{/if}
</div>
