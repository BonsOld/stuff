PrintButton1 = new Image
PrintButton2 = new Image
logo1 = new Image
logo2 = new Image
if (document.images) {
PrintButton1.src = "images/fullsize/print.png"
PrintButton2.src = "images/fullsize/print1.png"
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
