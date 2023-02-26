var myImages =["https://raw.githubusercontent.com/tysongong/tysongong.github.io/main/Images/05nba-lin-QA-lede-mediumSquareAt3X.jpg",
			   "https://raw.githubusercontent.com/tysongong/tysongong.github.io/main/Images/_methode_sundaytimes_prod_web_bin_7e950200-c3b6-11eb-912a-e652f3ef104d%20(2).jpg",
			   "https://raw.githubusercontent.com/tysongong/tysongong.github.io/main/Images/ed-sheeran-GettyImages-494227430_1600.jpg",
			   "https://raw.githubusercontent.com/tysongong/tysongong.github.io/main/Images/tumblr_inline_o3497bJbKp1twign1_540%20(1).png",
			   "https://raw.githubusercontent.com/tysongong/tysongong.github.io/main/Images/george%20(1).jpg"]

var captionImages =["Jeremy Lin",
					"Kevin Hart",
					"Ed Sheeran",
					"Dwayne Barack Johnson",
					"Curious George"];

var index=0; 

function updateImage(){
document.getElementById("slideshow").src = myImages[index];
document.getElementById("slideshow").alt= captionImages[index];
document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 

function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 

function autoSlide(){
if (document.getElementById("auto").checked)
 next(); 
}


setInterval(autoSlide,1500); // Next