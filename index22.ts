
//23.Conditional Tests:
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let car:string = 'subaru';
    console.log(`Is car == subaru? I predict true`);
    console.log(car == 'subaru'?true:false);

    console.log(`Is car !== subaru? I predict false`);
    console.log(car !== 'subaru'?true:false);

    console.log(`Is car !== honda? I predict true`);
    console.log(car !== 'honda'?true:false);

    console.log(`Is car == honda? I predict false`);
    console.log(car == 'honda'?true:false);

    console.log(`Is car == subaru? I predict true`);
    console.log(car.toLowerCase() == 'subaru'?true:false);

    
    console.log(`Is car == SUBARU? I predict false`);
    console.log(car.toUpperCase() == 'subaru'?true:false);

    console.log(`Is car !== Subaru? I predict true`);
    console.log(car !== 'Subaru'?true:false);    

    console.log(`Is car == Subaru? I predict false`);
    console.log(car == 'Subaru'?true:false);

    console.log(`Is car.length !== honda.length? I predict true`);
    console.log(car.length !== 'honda'.length ?true:false);

    console.log(`Is car.length == honda.length? I predict false`);
    console.log(car.length == 'honda'.length ?true:false);



    export{}
