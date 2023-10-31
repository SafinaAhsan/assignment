//35.Animals:
let animals:string[]=["lion","cat","crocodile"];
 for (var i=0 ; i < animals.length; i++){
    console.log(animals[i]);
   if (animals[i]=="lion"){
    console.log(`A ${animals[i]} is a wild animal.`);
   }
    else if(animals[i]=="cat"){
        console.log(`A ${animals[i]} is a pet animal.`);
 }
 else if(animals[i]=="crocodile"){
    console.log(`A ${animals[i]} is a reptile.`);
}
 }

 console.log(`All three animals are carnivores.`);
 