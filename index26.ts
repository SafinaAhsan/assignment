//27.Alien Colors #3:

function alienscolor(aliencolor:string){
    //• If the alien is green, print a message that the player earned 5 points
    if (aliencolor=="green"){
        console.log("you have earned 5 points.");
    }
    //• If the alien is yellow, print a message that the player earned 10 points.
    else if (aliencolor=="yellow"){
        console.log("you have earned 10 points.");
    }
//• If the alien is red, print a message that the player earned 15 points.
    else if (aliencolor=="red")
    console.log("you have earned 15 points.");
}

alienscolor("green");
alienscolor("yellow");
alienscolor("red");
