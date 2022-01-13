import Glasses from "./testGlass.js";
import GlassesList from "./textList.js";

let dataGlasses = [
	{
		id: "G1",
		src: "./img/g1.jpg",
		virtualImg: "./img/v1.png",
		brand: "Armani Exchange",
		name: "Bamboo wood",
		color: "Brown",
		price: 150,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? ",
	},
	{
		id: "G2",
		src: "./img/g2.jpg",
		virtualImg: "./img/v2.png",
		brand: "Arnette",
		name: "American flag",
		color: "American flag",
		price: 150,
		description:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio.",
	},
	{
		id: "G3",
		src: "./img/g3.jpg",
		virtualImg: "./img/v3.png",
		brand: "Burberry",
		name: "Belt of Hippolyte",
		color: "Blue",
		price: 100,
		description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
	},
	{
		id: "G4",
		src: "./img/g4.jpg",
		virtualImg: "./img/v4.png",
		brand: "Coarch",
		name: "Cretan Bull",
		color: "Red",
		price: 100,
		description: "In assumenda earum eaque doloremque, tempore distinctio.",
	},
	{
		id: "G5",
		src: "./img/g5.jpg",
		virtualImg: "./img/v5.png",
		brand: "D&G",
		name: "JOYRIDE",
		color: "Gold",
		price: 180,
		description:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?",
	},
	{
		id: "G6",
		src: "./img/g6.jpg",
		virtualImg: "./img/v6.png",
		brand: "Polo",
		name: "NATTY ICE",
		color: "Blue, White",
		price: 120,
		description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
	},
	{
		id: "G7",
		src: "./img/g7.jpg",
		virtualImg: "./img/v7.png",
		brand: "Ralph",
		name: "TORTOISE",
		color: "Black, Yellow",
		price: 120,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam.",
	},
	{
		id: "G8",
		src: "./img/g8.jpg",
		virtualImg: "./img/v8.png",
		brand: "Polo",
		name: "NATTY ICE",
		color: "Red, Black",
		price: 120,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim.",
	},
	{
		id: "G9",
		src: "./img/g9.jpg",
		virtualImg: "./img/v9.png",
		brand: "Coarch",
		name: "MIDNIGHT VIXEN REMIX",
		color: "Blue, Black",
		price: 120,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet.",
	},
];

let listGlasses = new GlassesList();

const showGlasses = function () {
	let divGlassesList = document.getElementById("vglassesList");
	dataGlasses.forEach((item) => {
		let gl = new Glasses(
			item.id,
			item.src,
			item.virtualImg,
			item.brand,
			item.name,
			item.color,
			item.price,
			item.description
		);
		listGlasses.addGlasses(gl);
	});
	divGlassesList.innerHTML = listGlasses.renderGlasses();
};

const tryOnGlasses = (e) => {
	let idGlass = e.target.dataset.id;
	let glassObj = {};
	for (let item of listGlasses.list) {
		if (item.id === idGlass) {
			glassObj = item;
		}
	}
	showInfo(glassObj);
};

const showInfo = (glassObj) => {
	let avatar = document.getElementById("avatar");
	let glassesInfo = document.getElementById("glassesInfo");

	avatar.innerHTML = `
        <img id="glasses" src="${glassObj.virtualImg}" alt="${glassObj.id}" />
    `;

	let status = "";
	if (glassObj.status) {
		status = "Stocking";
	} else {
		status = "Sold Out";
	}

	glassesInfo.innerHTML = `
        <h5>${glassObj.name} - ${glassObj.brand} (${glassObj.color})</h5>
        <p class="card-text">
            <span class="btn btn-danger btn-sm mr-2">${glassObj.price}</span>
            <span class="text-success">${status}</span>
        </p>
        <p class="card-text">${glassObj.description}</p>
    `;

	glassesInfo.style.display = "block";
};

const removeGlasses = (isShow) => {
	console.log(isShow);
	let glasses = document.getElementById("glasses");
	if (glasses) {
		if (!isShow) {
			glasses.style.opacity = 0;
		} else {
			glasses.style.opacity = 0.8;
		}
	}
};

window.tryOnGlasses = tryOnGlasses;
window.removeGlasses = removeGlasses;

showGlasses();
