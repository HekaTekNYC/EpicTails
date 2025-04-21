export type PricingData = {
	id: number
	title: string
	priceRange: string
	features: string[]
	buttonLabel: string
}

export const pricingData: PricingData[] = [
	{
		id: 1,
		title: 'Pet Sitting',
		priceRange: '$40–$65 / day',
		features: [
			'Care in your home',
			'Feeding & fresh water',
			'Potty breaks & playtime',
			'Daily photo updates',
			'Litter cleanup & minor messes'
		],
		buttonLabel: 'Book Pet Sitting'
	},
	{
		id: 2,
		title: 'Dog Walking',
		priceRange: '$20–$40 / walk',
		features: [
			'30–60 minute walk',
			'Solo or buddy walks',
			'Leash check & secure handling',
			'Clean-up included',
			'GPS walk tracking available'
		],
		buttonLabel: 'Book a Walk'
	},
	{
		id: 3,
		title: 'Overnight Stays',
		priceRange: '$100–$120 / night',
		features: [
			'Evening to morning coverage',
			'Evening & morning walks',
			'Feeding & meds if needed',
			'Full companionship overnight',
			'Updates throughout the stay'
		],
		buttonLabel: 'Request Overnight'
	},
	{
		id: 4,
		title: 'Pet Taxi',
		priceRange: '$25–$60 / trip',
		features: [
			'Vet & groomer transport',
			'Secure crate or seatbelt setup',
			'Pickup & drop-off included',
			'Real-time updates',
			'Wait-time & escort available'
		],
		buttonLabel: 'Book Pet Taxi'
	}
]
