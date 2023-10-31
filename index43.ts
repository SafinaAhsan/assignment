//44.Sandwiches
 
 function make_sandwich(...sandwich:string[]){
    console.log("Sandwich order");
    for (var i =0; i<sandwich.length; i++){
        console.log("-"+sandwich[i])
    }

 }


make_sandwich("Bread", "Lettuce", "Tomato", "Mayo");
make_sandwich("chicken", "Cheese");
make_sandwich("Bread", "Jelly", "Banana");
