PrintButton1 = new Image
PrintButton2 = new Image
logo1 = new Image
logo2 = new Image
if (document.images) {
PrintButton1.src = "images/lilboat.png"
PrintButton2.src = "images/future.png"
logo1.src = "images/diamondlogo.png"
logo2.src = "images/discologo.png"
}


    var imgArray = new Array(
        'Image1Lg.jpg',
        'Image2Lg.jpg',
        'Image3Lg.jpg',
        'Image4Lg.jpg'
        

    );


    var titleArray = new Array(
        'Couple Snowboarding',
        'Couple Hiking',
        'Couple Camping',
        'Couple Riding Motorcycle'
        
    );
        
    var imgPath = "Images/Fullsize/";
    
    function swapImage(imgID) {

        var theImage = document.getElementById('theImage');
        var textDiv = document.getElementById('bottomText');

        var newImg;
        var textTitle;

        newImg = imgArray[imgID];
        theImage.src = imgPath + newImg;

        textTitle=titleArray[imgID];

              textDiv.innerHTML = textTitle;
    }
        
    function preloadImages() {		
        for(var i = 0; i < imgArray.length; i++) {
            var tmpImg = new Image;
            tmpImg.src = imgPath + imgArray[i];
        }
    }



// music player

var numberOfSongs = 3
var sound = new Array(numberOfSongs+1)
sound[0]= "sound/maskoff.mp3"
sound[1]= "sound/nbayoungboat.mp3"
sound[2]= "sound/5onit.mp3"
function randomNumber(){
var randomLooper = -1
while (randomLooper < 0 || randomLooper > numberOfSongs || isNaN(randomLooper)){ randomLooper = parseInt(Math.random()*(numberOfSongs+1))
}
return randomLooper
}
var randomsub = randomNumber()
var soundFile = sound[randomsub]
document.write ('<EMBED class="sound" src= "' + soundFile + '" hidden=true autostart=true loop=true>')