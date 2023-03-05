import { createHandler, Get } from "next-api-decorators";

class UsersHandler {
	@Get('/')
	async getAllUsers() {
		try {
			return ['user1', 'user2', 'user3'];
		} catch (error) {
			console.error(error);
			return [];
		}
	}

}

export default createHandler(UsersHandler);