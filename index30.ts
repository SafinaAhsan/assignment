//31.No Users:

let users:string[]=["Admin","Teacher","Student","Doctor","Nurse"];

users.splice(0,5);
console.log(users)

// for (var i=0; i<5;i++){
//      const removeuser=users.pop();}
// console.log(users)

if (users.length==0){
    console.log("We need to find some users.");
}