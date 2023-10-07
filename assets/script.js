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

const baseSourceImgBanner = "./assets/images/slideshow/"
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

function updateDots(){
	let dots = document.querySelectorAll(".dot");
	dots.forEach((dot, index) => {
		if (index === slideCounter) {
			dot.classList.add("dot_selected")
		} else {
			dot.classList.remove("dot_selected")
		}
	});
}

function addDots() {
	for (let i=0; i < slides.length; i++){
		const dot = document.createElement("span");
		dot.className = "dot";
		dot.id = "dot" + i;
		dotContainer.appendChild(dot);
		dot.addEventListener('click', () => handleDotClick(i));
	}
}

function handleDotClick(index) {
	slideCounter = index;
	updateBannerContent();
	updateDots();
    console.log('Dot numéro ' + index + ' a été cliqué !');
}

rightSwipe.addEventListener("click", function(){
	slideCounter = (slideCounter + 1) % slides.length;
	updateBannerContent();
	updateDots();
	console.log(slideCounter);
})

leftSwipe.addEventListener("click", function(){
	slideCounter = (slideCounter - 1 + slides.length) % slides.length;
	updateBannerContent();
	updateDots();
	console.log(slideCounter);

})

addDots();
updateBannerContent();
updateDots();


