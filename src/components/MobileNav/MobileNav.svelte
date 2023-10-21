<script lang="ts">
	import menu from '../../assets/images/icons8-menu-48.png';
	import bell from '../../assets/images/icons8-notification-32.png';
	import search from '../../assets/images/icons8-search-50.png';
	import { showNav, notifMenu } from '../../stores/stores';
</script>

<nav
	class="w-full h-auto bottom-5 px-4 left-0 fixed md:hidden flex items-center justify-evenly z-10"
>
	<div
		class="w-[70%] h-full rounded-xl pr-8 bg-white flex items-center justify-start border-[1px] shadow-2xl shadow-black"
	>
		<img src={search} alt="searchIcon" class="w-11 h-11 p-3" />
		<input
			type="search"
			class="w-full h-full outline-none placeholder:font-medium font-medium"
			placeholder="Search"
		/>
	</div>
	<button
		on:click={() => ($notifMenu = !$notifMenu)}
		class="rounded-full bg-white border-[1px] border-none shadow-2xl shadow-black"
	>
		<img src={bell} alt="notifs" class="w-6 h-auto py-1" />
	</button>
	<button
		on:click={() => ($showNav = !$showNav)}
		class="rounded-full bg-white border-[1px] border-none shadow-2xl shadow-black"
	>
		<img src={menu} alt="menu" class="w-5 h-auto py-2" />
	</button>
</nav>
