import { createHandler, Get } from "next-api-decorators";

class PagesHandler {
	@Get('/')
	async getAllPages() {
		try {
			return ['page1', 'page2', 'page3'];
		} catch (error) {
			console.error(error);
			return [];
		}
	}

}

export default createHandler(PagesHandler);