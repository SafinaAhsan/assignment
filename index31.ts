//32.Checking Usernames:

let current_users: string[] = ["safina", "ibrahim", "hamza", "aariz", "omer"];

let new_users: string[] = ["Safa", "Umna", "SAFINA", "Hareem", "OMER"];

for (var i = 0; i < new_users.length; i++) {

    let exist:boolean=false;
    for (var j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() === current_users[j]) {
            exist=true;
        break;
    }}

            if(exist){
            console.log(`${new_users[i]} is not available.Enter a new username.`);
            
        }
        else {
            console.log(`${new_users[i]} is available`);
        
        }
    }

