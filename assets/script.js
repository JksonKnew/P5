const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

var baseSourceImgBanner = "./assets/images/slideshow/"

let slideCounter = 0
let leftSwipe = document.getElementById("banner-left-arrow");
let rightSwipe = document.getElementById("banner-right-arrow");
let bannerImgElement = document.getElementById("image-banner");
let bannerTitleElement = document.getElementById("banner-title");
let dotContainer = document.getElementById("dots");



function updateBannerContent(){
	bannerImgElement.src = baseSourceImgBanner + slides[slideCounter].image;
	bannerTitleElement.innerHTML = slides[slideCounter].tagLine; 
}

function upadteDots(){
	let dotSelector = document.getElementById("dot" + slideCounter);
	dotSelector.classList = "dot dot_selected";
}

function dotRemover(){
	let oldSelector = document.getElementById("dot" + slideCounter);
	oldSelector.classList = "dot";
}


function addDots() {
	for (i=0; i < slides.length; i++){
		const dot = document.createElement("span");
		dot.className = "dot";
		dot.id = "dot" + i;
		dotContainer.appendChild(dot);
		dot.addEventListener ("click", function (){
			dotRemover();
			dot.classList = "dot dot_selected";
			updateBannerContent();
		})
	}
}









addDots();
upadteDots();


rightSwipe.addEventListener("click", function(){
	dotRemover();
	slideCounter = (slideCounter + 1) % slides.length;
	updateBannerContent();
	upadteDots();
	console.log(1 , slideCounter);
})

leftSwipe.addEventListener("click", function(){
	dotRemover();
	slideCounter = (slideCounter - 1 + slides.length) % slides.length;
	updateBannerContent();
	upadteDots();
	console.log(slideCounter);
})





