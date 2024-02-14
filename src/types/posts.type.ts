export interface IPosts {
	limit: number
	posts: {
		limit: number
		id: number
		title: string
		body: string
		userId: number
		tags: string[]
		reactions: number
	}
	skip: number
	total: number
}
