export interface HeroCardData {
	icon: string
	iconDesc: string
	title: string
	blurb: string
}

export const heroCardsData: HeroCardData[] = [
	{
		icon: '/icons/ribbon.svg',
		iconDesc: 'icon of certification ribbon with a paw print',
		title: 'Fully Certified',
		blurb: 'Background-checked, insured, and professionally trained sitters.'
	},
	{
		icon: '/icons/clock.svg',
		iconDesc: 'icon of clock with paw print',
		title: 'Flexible Hours',
		blurb: 'Morning, evening, or last-minute — we’re available when you need us.'
	},
	{
		icon: '/icons/paw-1.svg',
		iconDesc: 'icon of a paw print inside a heart',
		title: 'Custom Care',
		blurb: 'Every pet is different, so we tailor our care to suit their unique needs.'
	}
]
