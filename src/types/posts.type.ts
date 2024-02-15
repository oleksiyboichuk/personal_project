export interface IPost {
	id: number
	body: string
	reactions: number
	tags: string[]
	title: string
	userId: number
}

export interface IPostsData {
	limit: number
	posts: IPost[]
	skip: number
	total: number
}

