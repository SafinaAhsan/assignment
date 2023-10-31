//3.Name Cases: 
let personname:string="safina ahsan";
console.log(personname);
//toupperCase
console.log(personname.toUpperCase());
//toLowerCase
console.log(personname.toLowerCase());
//toTitleCase
function titleCase(word:string) {
    var sentence = word.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    console.log(sentence.join(" "));
    return sentence;
}
titleCase("hello safina welcome to typescript")

