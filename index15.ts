//16.More Guests: 
//guestlist from exercise 15
let guestlist:string[]=["Hamza,","Safa,","Umna,"];

//adding new person at the beginning of the list
guestlist.unshift("Ibrahim,")
console.log(guestlist);

//adding new person in the midle of the list
guestlist.splice(3,0,"Hareem,")
console.log(guestlist);

//adding new person at the end of the list
let newguest="omer,"
guestlist.push(newguest)
console.log(guestlist);
//• Print a new set of invitation messages, one for each person in your list.
for (let i=0; i<guestlist.length;i++)
{
    console.log(`${guestlist[i]} you are cordially invited to dinner at our place. Please be on time.`)
}
// Add a print statement to the end of your program informing people that you found a bigger dinner table.

console.log("All of you are invited as we have got a bigger dinning table now.")

export{}