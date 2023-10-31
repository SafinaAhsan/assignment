//29.Favorite Fruit: 

let favourite_fruits:string[]=["Banana","Orange","Grapes"];

function fruits(fruits:string){
    for( var i=0;i<favourite_fruits.length;i++)
    if (fruits==favourite_fruits[i]){
        console.log(`I really like ${favourite_fruits[i]}`)
    }
}
fruits("Banana");
fruits("Apple");
fruits("Orange");
fruits("Mango");
fruits("Grapes");
