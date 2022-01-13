export default class GlassesList {
	constructor() {
		this.list = [];
	}
	addGlasses(glasses) {
		this.list.push(glasses);
	}
	renderGlasses() {
		let content = "";
		content = this.list.reduce((content, item, index) => {
			content += `
		    <div class="col-4">
		        <img src="${item.src}" data-id="${item.id}" onclick="tryOnGlasses(event)" alt="glasses ${index}" class="img-fluid">
		    </div>
		    `;
			return content;
		}, "");
		return content;
	}
}
