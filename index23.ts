//24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings

let student:string="safina";
console.log(`Is student == safina? I predict true`);
    console.log(student == 'safina' ?true:false);

    console.log(`Is student == Safina? I predict false`);
    console.log(student == 'Safina' ?true:false);

   // • Tests using the lower case function
let message:string="hello";
    console.log(`Is message == hello? I predict true`);
    console.log(message.toLowerCase() == 'hello' ?true:false);

    console.log(`Is message !== hello? I predict false`);
    console.log(message.toLowerCase() !== 'hello' ?true:false);

   // • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let number:number=9;

console.log(`Is number == 9? I predict true`);
console.log(number == 9 ?true:false);

console.log(`Is number !== 9? I predict false`);
console.log(number !== 9 ?true:false);

console.log(`Is number > 9? I predict true`);
console.log(number > 9 ?true:false);

console.log(`Is number < 9? I predict false`);
console.log(number < 9 ?true:false);

console.log(`Is number <= 9? I predict true`);
console.log(number <= 9 ?true:false);

console.log(`Is number >= 9? I predict false`);
console.log(number >= 9 ?true:false);

//• Tests using "and" and "or" operators
let user:string="Safina";
let password:string="password";

console.log(`Is user == "Safina" && password == "password"? I predict true`);
console.log(user == "Safina" && password == "password"?true:false);

console.log(`Is user !== "Safina" && password !== "password"? I predict false`);
console.log(user !== "Safina" && password !== "password"?true:false);

console.log(`Is user =="Safina" || password == "password"? I predict true`);
console.log(user == "Safina" || password == "password"?true:false);

console.log(`Is user !=="Safina" || password !== "password"? I predict false`);
console.log(user !=="Safina" || password !== "password"?true:false);

// • Test whether an item is in a array
var guest:string[]=["Hamdan"];
console.log(`Is guests[0]=="Hamdan"? I predict true`)
console.log(guest[0]== "Hamdan"?true:false)

// • Test whether an item is not in a array
console.log(`Is guests[0]=="ibrahim"? I predict false`)
console.log(guest[0]== "ibrahim"?true:false)
export{}
