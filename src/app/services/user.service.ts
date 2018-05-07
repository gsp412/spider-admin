export class UserService{
	constructor(){}

	getToken():string{
		return sessionStorage.getItem('token')||'';
	}
}