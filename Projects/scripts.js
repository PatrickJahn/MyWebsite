

var webButton = document.getElementById("webButton");
var iosButton = document.getElementById("iosButton");
var etcButton = document.getElementById("etcButton");

var webBoard = document.getElementsByClassName("webBoard")[0];
var iosBoard = document.getElementsByClassName("iosBoard")[0];



function changeBoard(but){


    switch (but) {

        case webButton: 
        webBoard.style = "display: flexbox";
        iosBoard.style = "display: none";
        webButton.style.backgroundColor = "coral";
        iosButton.style.backgroundColor = "transparent";
        etcButton.style.backgroundColor = "transparent";
        break;

        case iosButton: 
        
        iosBoard.style = "display: flexbox";
        webBoard.style = "display: none";
        iosButton.style.backgroundColor = "coral";
        webButton.style.backgroundColor = "transparent";
        etcButton.style.backgroundColor = "transparent";
        break;

        case etcButton: 
        webBoard.style = "display: none";
        iosBoard.style = "display: none";
    
        etcButton.style.backgroundColor = "coral";
        webButton.style.backgroundColor = "transparent";
        iosButton.style.backgroundColor = "transparent";
        break;


    }


}