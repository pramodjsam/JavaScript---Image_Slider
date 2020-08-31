const carouselSlide= document.querySelector(".carousel-slide");
const carouselImages= document.querySelectorAll(".carousel-slide img");

const prevBtn= document.getElementById("prevBtn");
const nextBtn= document.getElementById("nextBtn");

let counter=1;
const size= carouselImages[0].clientWidth;
// console.log(size);
carouselSlide.style.transform= "translateX(" + (-size * counter) + "px)";
// console.log(carouselSlide.style.transform);

nextBtn.addEventListener("click",function(){
	// console.log("counter",counter);
	// console.log("length",carouselImages.length)
	if(counter>= carouselImages.length-1) return;
	carouselSlide.style.transition="transform 0.5s ease";
	counter++;
	carouselSlide.style.transform= "translateX(" + (-size * counter) + "px)";
})

prevBtn.addEventListener("click",function(){
	if(counter<=0) return;
	carouselSlide.style.transition="transform 0.5s ease";
	counter--;
	carouselSlide.style.transform= "translateX(" + (-size * counter) + "px)";
})

carouselSlide.addEventListener("transitionend",function(){
	// console.log("fired")
	if(carouselImages[counter].id==="lastClone"){
		// console.log(carouselImages[counter].id);
		console.log(counter);
		carouselSlide.style.transition="none";
		counter= carouselImages.length-2;
		carouselSlide.style.transform= "translateX(" + (-size * counter) + "px)";
	}
	if(carouselImages[counter].id==="firstClone"){
		// console.log(carouselImages[counter].id);
		carouselSlide.style.transition="none";
		console.log(counter);
		counter= carouselImages.length-counter;
		carouselSlide.style.transform= "translateX(" + (-size * counter) + "px)";
	}
})