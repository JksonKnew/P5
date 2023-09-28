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
let counter = 0

function counterVariable (){
	if (counter = 4){
		counter = 0
	}
	return counter
}


let leftSwipe = document.getElementById("banner-left-arrow");
let rightSwipe = document.getElementById("banner-right-arrow");
let bannerImgElement = document.getElementById("image-banner");
let bannerTitleElement = document.getElementById("banner-title");


function updateBannerContent(){
	bannerImgElement.src = baseSourceImgBanner + slides[counter].image;
	bannerTitleElement.innerHTML = slides[counter].tagLine; 
}

rightSwipe.addEventListener("click", function(){
	counter += 1;
	updateBannerContent()
	console.log(counter)
})

leftSwipe.addEventListener("click", function(){
	counter -= 1;
	updateBannerContent()
	console.log(counter)
})

