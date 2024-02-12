export interface IComments {
	id: number
	body: string
	postId: number
	user: IUser
}
interface IUser {
	id: number
	username: string
}