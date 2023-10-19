<script lang="ts">
	import mail from '../../assets/images/icons8-mail-48.png';
	export let userImage: string;
	export let color: string;
	export let name: string;
</script>

<div class="w-full h-10 flex items-center justify-between p-2 py-1 rounded-xl mb-2 bg-neutral-100">
	<div class="flex items-center justify-start">
		<img
			src={userImage}
			alt="user-img"
			class="w-6 h-6 mr-3 rounded-full"
			style="background-color: {color};"
		/>
		<p class="text-sm py-1 font-bold w-36">{name}</p>
	</div>
	<img src={mail} alt="mail" class="w-6 h-6" />
</div>
