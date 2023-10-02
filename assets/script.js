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
let leftSwipe = document.getElementById("banner-left-arrow");
let rightSwipe = document.getElementById("banner-right-arrow");
let bannerImgElement = document.getElementById("image-banner");
let bannerTitleElement = document.getElementById("banner-title");
let dotSelector0 = document.getElementById("dot0");
let dotSelector1 = document.getElementById("dot1");
let dotSelector2 = document.getElementById("dot2");
let dotSelector3 = document.getElementById("dot3");

function counterVariable (){
	if (counter > 3){
		counter = 0
	}
	return counter;
}

function updateBannerContent(){
	bannerImgElement.src = baseSourceImgBanner + slides[counter].image;
	bannerTitleElement.innerHTML = slides[counter].tagLine; 
}

function dotRemover(){
	dotSelector0.classList = "dot";
	dotSelector1.classList = "dot";
	dotSelector2.classList = "dot";
	dotSelector3.classList = "dot";
}


function listenCounter(){
	dotRemover();
	switch (counter) {
		case 0:
			console.log("numero 0")
			dotSelector0.classList = "dot dot_selected";
			break
		case 1:
			console.log("numero 1")
			dotSelector1.classList = "dot dot_selected";
			break
		case 2:
			console.log("numero 2")
			dotSelector2.classList = "dot dot_selected";
			break
		case 3:
			console.log("numero 3")
			dotSelector3.classList = "dot dot_selected";
			break
	}
}




listenCounter();

rightSwipe.addEventListener("click", function(){
	counter += 1;
	updateBannerContent()
	listenCounter()
	console.log(counter)
})

leftSwipe.addEventListener("click", function(){
	counter -= 1;
	updateBannerContent()
	listenCounter()
	console.log(counter)
})

dotSelector0.addEventListener("click", function(){
	counter = 0
	listenCounter();
	updateBannerContent();
	console.log(counter)
})
dotSelector1.addEventListener("click", function(){
	counter = 1
	listenCounter();
	updateBannerContent();
	console.log(counter)
})
dotSelector2.addEventListener("click", function(){
	counter = 2
	listenCounter();
	updateBannerContent();
	console.log(counter)
})
dotSelector3.addEventListener("click", function(){
	counter = 3
	listenCounter();
	updateBannerContent();
	console.log(counter)
})




