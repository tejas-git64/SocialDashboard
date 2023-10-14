<script lang="ts">
	import eye from '../../assets/images/eye.png';
	import like from '../../assets/images/icons8-like-48.png';
	import type { CardType } from '../../types/DashboardTypes';
	export let card: CardType;
</script>

<div
	style="background: linear-gradient(45deg, {card.bgColor}, #fff);"
	class="w-[31.5%] h-52 sm:h-[210px] md:h-[230px] lg:h-full xl:w-[30%] xl:max-w-[250px] rounded-2xl p-3 sm:p-[14px] sm:py-[10px] xl:py-[16px] hover:shadow-xl transition-all ease-in"
>
	<div class="flex h-auto md:h-auto items-start justify-between">
		<img src={card.icon} alt="social-logo" class="w-12 h-12 xl:w-[50px] xl:h-[50px] rounded-full" />
		<button
			class="px-[8px] py-[3px] text-xs sm:px-[9px] sm:py-[3px] sm:text-sm border-[1px] border-neutral-400"
			>></button
		>
	</div>
	<h2 class="my-2 mb-0 md:mb-2 font-bold text-md md:text-xl">{card.lastPosted}</h2>
	<p class="text-xs mb-3 text-neutral-500 font-semibold">{card.socialMedia}</p>
	<div class="flex items-center justify-start mt-3 overflow-x-hidden">
		<img src={eye} alt="views" class="w-4 h-4 md:w-6 md:h-6 mr-2 md:mr-3" />
		<div class="flex items-center justify-start">
			<p class="text-sm font-semibold pr-1">
				{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(card.views)}
			</p>
			<p class="text-sm font-semibold hidden sm:block">views</p>
		</div>
	</div>
	<div class="flex items-center justify-start mb-3 overflow-x-hidden">
		<img src={like} alt="likes" class="w-4 h-4 md:w-6 md:h-6 mr-2 md:mr-3" />
		<div class="flex items-center justify-start">
			<p class="text-sm font-semibold pr-1">
				{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(card.likes)}
			</p>
			<p class="text-sm font-semibold hidden sm:block">likes</p>
		</div>
	</div>
	<p class="text-xs sm:text-sm font-semibold my-2 overflow-x-hidden whitespace-nowrap">
		+{card.percentageIncrease} from yesterday
	</p>
</div>
