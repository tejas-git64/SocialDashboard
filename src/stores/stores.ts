import { writable } from 'svelte/store';
import youtube from '../assets/images/icons8-youtube-50.png';
import insta from '../assets/images/icons8-instagram-64.png';
import dribbble from '../assets/images/icons8-dribbble-48.png';
export const colors = ['#FF89CA', '#B389FF', '#B9F576'];

export const socialMediaCards = writable([
	{
		lastPosted: 'Last Video',
		socialMedia: 'Youtube',
		icon: youtube,
		views: 12917,
		likes: 3175,
		percentageIncrease: '10%',
		bgColor: colors[0]
	},
	{
		lastPosted: 'Last Reel',
		socialMedia: 'Instagram',
		icon: insta,
		views: 80234,
		likes: 20987,
		percentageIncrease: '5%',
		bgColor: colors[1]
	},
	{
		lastPosted: 'Last Post',
		socialMedia: 'Dribbble',
		icon: dribbble,
		views: 10504,
		likes: 4682,
		percentageIncrease: '20%',
		bgColor: colors[2]
	}
]);
