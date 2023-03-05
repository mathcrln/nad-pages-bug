import { createHandler, Get } from "next-api-decorators";

class PageHandler {
	@Get('/')
	async getPage() {
		try {
			return 'page1';
		} catch (error) {
			console.error(error);
			return [];
		}
	}

}

export default createHandler(PageHandler);