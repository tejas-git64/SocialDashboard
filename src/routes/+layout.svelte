<script>
	import '../app.css';
	import MobileNav from '../components/MobileNav/MobileNav.svelte';
	import Nav from '../components/Nav/Nav.svelte';
</script>

<div class="w-full h-[100vh] flex">
	<Nav />
	<MobileNav />
	<slot />
</div>
