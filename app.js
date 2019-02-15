

var Creationeng = document.getElementById("creationeng");
var Creationchi = document.getElementById("creationchi");
var Bible = document.getElementById("bible");
//var Javascpt = document.getElementById("javascpt");
//var Cssflexbox = document.getElementById("cssflexbox");
//var Angular = document.getElementById("angular");


//var verseContent = ["", "", "", ""]
var currentVideo = "";
var chosenVideo = 0

Creationeng.addEventListener("click", clickedVerse);
Creationchi.addEventListener("click", clickedVerse);
Bible.addEventListener("click", clickedVerse);
//Javascpt.addEventListener("click", clickedVerse);
//Cssflexbox.addEventListener("click", clickedVerse);
//Angular.addEventListener("click", clickedVerse);

function clickedVerse() {
	chosenVideo = 1
	currentVideo = this.attributes["id"].value;
	if (currentVideo == "creationeng") {
	  document.getElementById("displayVideo").src="https://www.youtube.com/embed/fmEGjjvFEO8";
	} else if (currentVideo == "creationchi") {
	  document.getElementById("displayVideo").src="https://www.youtube.com/embed/NAxB8EyG_7k";
	} else if (currentVideo == "bible") {
  	  document.getElementById("displayVideo").src="https://www.youtube.com/embed/uWm2Sg-qRrg";
	} 
	document.getElementById("chooseMsg").className="hide";
	document.getElementById("displayVideo").className="show";
	//DisplayVerseOne.innerHTML = verseContent[1];
	//DisplayVerseTwo.innerHTML = verseContent[2];
	//DisplayVerseThree.innerHTML = verseContent[3];
}	



var EasyFill = document.getElementById("easyFill");
//var AnswerTwo = document.getElementById("answerTwo");
var AnswerTwoValue = "";
var PlainverseContent = ""

//EasyFill.addEventListener("click", easyfill);
//AnswerTwo.addEventListener("keyup", function(event) {
//	event.preventDefault();
//  	if (event.keyCode === 13) {
//    	   AnswerTwoValue = document.getElementById("answerTwo").value;
//	   PlainverseContent = verseContent[2].replace(/[，。、:;,." "]/g,"");
//		if (AnswerTwoValue.replace(/[，。、:;,." "]/g,"") == PlainverseContent) {
//			alert("Congratulations!");
//			//AnswerTwoValue = "";
//		} else {
//			alert("Sorry, try again!");
//			//AnswerTwoValue = "";
//		}
//	}
//});

function easyfill() {
  if (chosenVerse == 0) {
	document.getElementById("chooseMsg").className="show";
	document.getElementById("displayVerseZero").className="hide";
	document.getElementById("displayVerseOne").className="hide";
	document.getElementById("displayVerseTwo").className="hide";
	document.getElementById("displayVerseThree").className="hide";
	document.getElementById("answerOne").className="hide";
	document.getElementById("answerTwo").className="hide";
	document.getElementById("answerThree").className="hide";
	//FullVerse.innerHTML = "請選擇經文...";
  } else {
	document.getElementById("answerTwo").value = "";
	document.getElementById("chooseMsg").className="hide";
	document.getElementById("displayVerseZero").className="show";
	document.getElementById("displayVerseOne").className="show";
	document.getElementById("displayVerseTwo").className="hide";
	document.getElementById("displayVerseThree").className="show";
	document.getElementById("answerOne").className="hide";
	document.getElementById("answerTwo").className="show";
	document.getElementById("answerThree").className="hide";
	DisplayVerseZero.innerHTML = verseContent[0];
	DisplayVerseOne.innerHTML = verseContent[1];
	DisplayVerseTwo.innerHTML = verseContent[2];
	DisplayVerseThree.innerHTML = verseContent[3];
	//var AnswerOne = document.getElementById("answerOne").value;
 	//var AnswerTwo = document.getElementById("answerTwo").value;
	//var AnswerThree = document.getElementById("answerThree").value;
	//easyfillq();
	//FullVerse.innerHTML = "generating challenge...";
	//FullVerse.innerHTML = "提摩太後書 3 章 16-17 節 聖經都是神所 <u> ? ? </u> (1) 的，於教訓、 <u> ? ? </u> (2) 、使人歸正、教導人學義，都是有益的，叫屬神的人得以完全，預備行各樣的善事 。";
  }
}
	

