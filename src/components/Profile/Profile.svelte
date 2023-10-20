<script lang="ts">
	import arrowDown from '../../assets/images/icons8-expand-arrow-24.png';
	import profileImg from '../../assets/images/wepik-export-20231020135103aDOp.png';
	import logout from '../../assets/images/icons8-logout-50.png';
	import profile from '../../assets/images/icons8-male-user-48.png';

	let profileMenu = false;
	function toggleMenu() {
		profileMenu = !profileMenu;
	}
</script>

<div class="relative">
	<div class="flex w-auto h-full justify-start items-start">
		<div>
			<img
				src={profileImg}
				alt="profile-img"
				class="w-11 h-auto mt-0.5 rounded-xl mr-0.5 transition-all ease-out"
			/>
		</div>
		<div class="w-auto h-11 flex flex-col px-4">
			<b>Hanna</b>
			<p class="text-xs text-neutral-400 font-semibold">Clark</p>
		</div>
		<button class="h-6 rounded-none border-none p-1 pt-0 outline-none" on:click={toggleMenu}>
			<img
				src={arrowDown}
				alt="expand"
				class={`w-5 h-5 ${profileMenu ? 'rotate-180' : 'rotate-0'}`}
			/>
		</button>
	</div>
	<div
		role="menu"
		class={`w-auto bg-white p-2 px-3 rounded-xl ${
			profileMenu ? 'absolute' : 'hidden'
		} z-10 right-1 top-14 shadow-xl`}
	>
		<div
			class="w-full h-full flex items-center justify-start px-2 mb-1 hover:bg-neutral-100 rounded-xl"
		>
			<img src={profile} alt="profile" class="w-7 h-7 mr-3" />
			<button class="w-36 h-full text-left p-2 text-sm rounded-none font-semibold border-none"
				>View Profile</button
			>
		</div>
		<div class="w-full h-full flex items-center justify-start px-2 hover:bg-red-100 rounded-xl">
			<img src={logout} alt="logout" class="w-7 h-7 p-0.5 mr-3" />
			<button class="w-36 text-left h-full p-2 text-sm font-semibold rounded-none border-none"
				>Logout</button
			>
		</div>
	</div>
</div>
