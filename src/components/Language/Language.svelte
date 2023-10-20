<script lang="ts">
	import arrowDown from '../../assets/images/icons8-expand-arrow-24.png';
	import us from '../../assets/images/icons8-usa-48.png';
</script>

<div class="items-center justify-start p-2 hidden md:flex rounded-xl">
	<img src={us} alt="country-icon" class="w-8 mr-2" />
	<b class="mr-2 text-sm px-1">Eng(US)</b>
	<button class="rounded-none p-0 border-none -mt-0.5">
		<img src={arrowDown} alt="arrowdown" class="w-4" />
	</button>
</div>
