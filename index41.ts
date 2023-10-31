//42.Great Magicians:
let magicians:string[]=["magician1","magician2","magician3","magician4"];

function make_great(magicians:string[]){
    for (var i=0; i<magicians.length; i++)
    console.log(`The great ${magicians[i]}`)
}

make_great(magicians)
export{}