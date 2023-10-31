
//30.Hello Admin: 

let users:string[]=["Admin","Teacher","Student","Doctor","Nurse"];

for (var i=0;i<users.length; i++ ){
    if(users[i]=="Admin"){
        console.log(`Hello ${users[i]}, would you like to see a status report.`);}
         else{console.log(`Hello ${users[i]} thanks for logging in again`)}    
}

export{}
