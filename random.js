function setRandomColor() { 
    
    elements = document.getElementsByClassName("boxBlack");
    
    for (var i = 0; i < 100; i++) {
        
        for (var j = 0; j < elements.length; j++) {

            var x = Math.floor(Math.random() * 255);
            var y = Math.floor(Math.random() * 255);
            var z = Math.floor(Math.random() * 255);
            var randomRGB = "rgb(" + x + ", " + y + ", " + z + ")";
            elements[j].style.background = randomRGB;
        }
                
    }

}
