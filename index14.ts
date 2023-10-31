 //15.
 let guestlist:string[]=["Hamza,","Safa,","Umna,"];

// adding new guest and replacing the old guest at index 1 
let arr1=guestlist.splice(1,1,"Hamdan,");

console.log(guestlist);

for (let i=0; i< guestlist.length;i++){

console.log(`${guestlist[i]} you are cordially invited to dinner at our place. Please be on time.`)}
    // guest who can't come
 console.log(arr1);

