export class GlassesList {
    constructor() {
        this.glist = [];
    }
    addGlasses(gl) {
        this.glist.push(gl);
    }
    renderGlasses() {
        let content = " ";
        content = this.glist.reduce((content, item, index) => {
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