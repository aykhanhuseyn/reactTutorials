export interface IUser {
	username: string;
	id: string;
	age: number;
	token: string;
	password: string;
}

export type LoginUser = Pick<IUser, 'username' | 'password'>;

export type LoginResponseUser = Pick<IUser, 'token'>;
