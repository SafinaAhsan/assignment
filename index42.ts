//43.Unchanged Magicians

let magicians:string[]=["magician1","magician2","magician3","magician4"];

function make_great(magicians:string[]){
    let new_magician=[...magicians];
    console.log(new_magician);
    for( var i=0; i<new_magician.length;i++)
    console.log(`The great ${new_magician[i]}`);

    
}
make_great(magicians);
console.log(magicians);
for(var j=0; j<magicians.length; j++)

console.log(magicians[j]);
