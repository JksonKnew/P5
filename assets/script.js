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
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

var baseSourceImgBanner = "./assets/images/slideshow/"
let counter = 0
let leftSwipe = document.getElementById("banner-left-arrow");
let rightSwipe = document.getElementById("banner-right-arrow");
let bannerImgElement = document.getElementById("image-banner");
let bannerTitleElement = document.getElementById("banner-title");
let dotContainer = document.getElementById("dots");

function addDots() {
	for (i=0; i < slides.length; i++){
		const dot = document.createElement("span");
		dot.className = "dot";
		dot.id = "dot" + i;
		dotContainer.appendChild(dot)
		dot.addEventListener ("click", function (){
			dot.classList = "dot dot_selected";
		})
	}
}

function updateBannerContent(){
	bannerImgElement.src = baseSourceImgBanner + slides[counter].image;
	bannerTitleElement.innerHTML = slides[counter].tagLine; 
}

function upadteDots(){
	let dotSelector = document.getElementById("dot" + counter);
	dotSelector.classList = "dot dot_selected";
}

function dotRemover(){
	let oldSelector = document.getElementById("dot" + counter);
	oldSelector.classList = "dot";
}

function updateActifDot(){
	dotRemover();
	upadteDots();
	updateBannerContent;
}

addDots();
upadteDots();
updateActifDot();

rightSwipe.addEventListener("click", function(){
	dotRemover();
	counter = (counter + 1) % slides.length;
	updateBannerContent();
	upadteDots();
	console.log(1 , counter);
})

leftSwipe.addEventListener("click", function(){
	dotRemover();
	counter = (counter - 1 + slides.length) % slides.length;
	updateBannerContent();
	upadteDots();
	console.log(counter);
})


// dot.addEventListener("click", function(){
// 	counter = 0;
// 	upadteDots();
// 	updateBannerContent();
// 	console.log(counter);
// })




