// Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

console.log(`We just found out that our new dinner table won't arrive in time for dinner, and we have space for only two guests.`)

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
let guestlist:string[]=["Hamdan","Hamza","Umna","Safa","Ibrahim","Omer"];

for (let i = 0; i < 4; i++){
  const removenames=guestlist.pop();

  if(removenames){
    console.log(
      `${removenames} sorry you are not invited to dinner`);
    }
  }
console.log(guestlist);
// Print a message to each of the two people still on your list, letting them know they’re still invited.
for(let i = 0; i < guestlist.length; i++){
  console.log(
    `${guestlist[i]} you are invited to dinner.`
  );
}
//17.Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
guestlist.splice(0,2)
console.log(guestlist)


export{}