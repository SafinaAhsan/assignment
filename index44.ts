//45.Cars:
function cars(manufacturer:string,modelname:string,color:string,feature?:string){
    const car:any={
        manufacturer:manufacturer,
        modelname:modelname,
        color:color
    }
    if(feature !== undefined){
        car.feature=feature
    }
    return car
}
console.log(cars("Honda","2020","Black"));
console.log(cars("Toyota","2022","Grey","sunroof"));