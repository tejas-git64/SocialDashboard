<script lang="ts">
	import user from '../../assets/images/icons8-user-32.png';
	import TeamMember from '../TeamMember/TeamMember.svelte';
	import { colors, team } from '../../stores/stores';
</script>

<div
	class="w-full h-auto md:w-[38.5%] mt-2 md:mt-0 md:h-full px-4 md:hidden min-[1240px]:block min-[1240px]:w-[43%] min-[1240px]:h-full xl:w-[280px] border-2 rounded-2xl bg-white"
>
	<div class="w-full h-auto md:h-14 flex justify-between items-center p-4 px-0">
		<h2 class="font-bold text-md xl:text-lg">Team</h2>
		<button
			class="rounded-2xl bg-neutral-100 border-none flex items-center justify-center px-3 font-medium text-sm
            "><img src={user} alt="user" class="w-5 h-5" />{$team.length}</button
		>
	</div>
	<div class="w-full h-56 overflow-y-scroll" id="team">
		{#each $team as member}
			<TeamMember
				color={colors[Math.floor(Math.random() * colors.length)]}
				userImage={member.image}
				name={member.name}
			/>
		{/each}
	</div>
</div>

<style>
	#team::-webkit-scrollbar {
		width: 0px;
	}
</style>
