function setRandomColor() { 
    
    for (var i = 0; i < elements.length; i++) {
    
    var x = Math.floor(Math.random() * 255);
    var y = Math.floor(Math.random() * 255);
    var z = Math.floor(Math.random() * 255);
    var randomRGB = "rgb(" + x + ", " + y + ", " + z + ")";

    elements = document.getElementsByClassName("boxBlack");
        


    elements[i].style.background = randomRGB;
                
    }
