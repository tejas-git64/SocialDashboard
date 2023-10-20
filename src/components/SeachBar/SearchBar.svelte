<script lang="ts">
	import search from '../../assets/images/icons8-search-50.png';
	let focus = false;
</script>

<div
	on:focusout={() => (focus = !focus)}
	class={`w-full h-full rounded-xl pr-8 bg-white hidden md:flex items-center justify-start ${
		focus ? 'shadow-lg' : 'shadow-none'
	}`}
>
	<img src={search} alt="searchIcon" class="w-11 h-11 p-3" />
	<input
		type="search"
		class="w-full h-full outline-none placeholder:font-medium font-medium"
		placeholder="Search"
		on:focus={() => (focus = !focus)}
	/>
</div>
