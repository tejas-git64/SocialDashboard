<script>
	import '../app.css';
	import Nav from '../components/Nav/Nav.svelte';
</script>

<div class="w-full h-[100vh] flex">
	<Nav />
	<slot />
</div>
