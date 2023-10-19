<script lang="ts">
	import { onMount } from 'svelte';
	import previous from '../../assets/images/icons8-back-24-left.png';
	import next from '../../assets/images/icons8-next-24-right.png';
	let months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
	const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const date = new Date();
	let year = date.getFullYear();
	let month = date.getMonth();
	let daysSection: HTMLDivElement;
	let lastDayOfMonth = new Date(year, month + 1, 0).getDate();
	const monthLastDate = new Date(year, month, 0).getDate();
	let lastDayofLastMonth = new Date(year, month, 0).getDay();
	let daysFromLastMonth = 6 - lastDayofLastMonth;
	const calendar = () => {
		if (daysFromLastMonth > 0) {
			for (let i = monthLastDate; i >= monthLastDate - daysFromLastMonth; i--) {
				let p = document.createElement('p');
				p.innerHTML += ' ';
				p.classList.add('mx-auto');
				p.classList.add('py-0.5');
				daysSection.appendChild(p);
			}
		}
		for (let i = 1; i <= lastDayOfMonth; i++) {
			let p = document.createElement('p');
			p.innerHTML += i;
			p.classList.add('mx-auto');
			p.classList.add('py-1');
			p.classList.add('md:py-[0.5vw]');
			p.classList.add('font-semibold');
			if (
				i === new Date(year, month, date.getDate()).getDate() &&
				month === date.getMonth() &&
				year === date.getFullYear()
			) {
				p.classList.add('bg-pink-100');
				p.classList.add('px-3');
				p.classList.add('font-extrabold');
				p.classList.add('xl:-ml-[4px]');
				p.classList.add('rounded-full');
			}
			daysSection.appendChild(p);
		}
	};
	function incrementMonth() {
		month === 11 ? (month = 0) : (month += 1);
		lastDayofLastMonth = new Date(year, month, 0).getDay();
		lastDayOfMonth = new Date(year, month + 1, 0).getDate();
		daysFromLastMonth = 6 - lastDayofLastMonth;
		daysSection.innerHTML = '';
		calendar();
	}
	function decrementMonth() {
		month === 0 ? (month = 11) : (month -= 1);
		lastDayofLastMonth = new Date(year, month, 0).getDay();
		lastDayOfMonth = new Date(year, month + 1, 0).getDate();
		daysFromLastMonth = 6 - lastDayofLastMonth;
		daysSection.innerHTML = '';
		calendar();
	}
	onMount(() => {
		calendar();
	});
</script>

<div
	class="w-full h-auto md:w-[38.5%] md:h-full md:px-2 lg:hidden min-[1240px]:block min-[1240px]:w-[43%] min-[1240px]:h-full xl:w-[280px] border-2 rounded-2xl bg-white hover:shadow-xl"
>
	<div class="flex justify-center items-center px-4 xl:px-2">
		<div class="w-full py-1 flex justify-center">
			<button on:click={decrementMonth} class="border-none p-0 outline-none">
				<img src={previous} alt="previous" class="w-6 h-6" />
			</button>
			<p class="px-14 py-3 -mb-0.5 md:px-10 font-bold text-lg">{months[month]}</p>
			<button on:click={incrementMonth} class="border-none p-0 outline-none">
				<img src={next} alt="next" class="w-6 h-6" />
			</button>
		</div>
	</div>
	<div class="flex justify-evenly px-2 py-1 md:px-0 md:py-[4%] lg:py-0">
		{#each days as day}
			<p class="text-sm font-bold lg:font-semibold px-1 sm:px-4 md:px-0 lg:py-2">{day}</p>
		{/each}
	</div>
	<div
		class="h-auto grid grid-cols-7 grid-rows-6 place-items-center p-4 px-5 pb-2 md:px-1 min-[1240px]:h-52 min-[1240px]:px-1 min-[1240px]:pt-0"
		id="daysInMonth"
		bind:this={daysSection}
	/>
</div>
