export interface IProduct {
	_id: string
	id: number
	name: string
	description: string
	price: number
	region: string
	weight: number
	flavor_profile: string[]
	grind_option: string[]
	roast_level: number
	image_url: string
}

export interface ITransformedProduct {
	id: number
	name: string
	price: number
	image_url: string
	region: string
	roast_level: number
}