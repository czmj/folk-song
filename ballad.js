//---------------DATABASE IS HERE---------//
//introduction lines
var intro1 = [
	"As I walked out one fine May morn",
	"One dark and stormy winters night"
]

var intro2 = [
	"I viewed the flowers in spring",
	"My love was far away",
	"An old man spoke to me"
]

var intro3 = [
	"As the rain poured down upon me",
	"As the sun shone down upon me",
	"The snow lay thick upon the ground",
	"As the lark whistled its sweet song",
	"Diddle diddle dum all the day"
]

//it is very important that these are added in the corresponding order to intro2
var intro4 = [
	"I heard a young girl sing:",
	"I heard a young man say:",
	"He gave this message for thee:"
]

var drama1 = [
    "Oh woe betide my weary soul",
    "My poor heart aches for this reason",
    "Oh pity me, my troubled soul",
    "My heart has broken clean in two"
]
var drama2 = [
    "My true loved passed me by",
    "My darling I do crave",
    "You stole my heart from me",
    "My true love was taken",
    "My love is gone to sea",
    "My love is lost to me"
]
var drama3 = [
    "Diddle diddle dum all the day"
]
var drama4 = [
    "With a dark and roving eye",
    "But I must remain brave",
    "You were fair as could be",
    "And from this I did waken",
    "He's far away from me",
    "He died upon the sea"
]


var res1 = [
    
]
var res2 = [
    
]
var res3 = [
    
]
var res4 = [
    
]


// ---------- MORE INTERESTING THINGS HAPPEN HERE -------- //
// Returns a random integer between zero (included) and max (excluded)
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


function getSong(){
    var couplet = getRandomInt(intro2.length);
    var verse1 = intro1[getRandomInt(intro1.length)] + "</br>" + intro2[couplet] + "</br>" +  intro3[getRandomInt(intro3.length)] + "</br>" +  intro4[couplet];
    
    couplet = getRandomInt(drama2.length);
    var verse2 = drama1[getRandomInt(drama1.length)] + "</br>" + drama2[couplet] + "</br>" +  drama3[getRandomInt(drama3.length)] + "</br>" +  drama4[couplet];
    

    document.getElementById("intro").innerHTML=verse1;
    document.getElementById("drama").innerHTML=verse2;
    
    document.getElementById("vid").innerHTML="<p>To be sung to te tune of 'A Rose in April'</p>"
    document.getElementById("right-col").style.display = 'block';
    document.getElementById("btn2").style.display = 'block';

    
    window.location.assign("#song");
}