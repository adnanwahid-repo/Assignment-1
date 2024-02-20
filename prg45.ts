interface car{
    manufacturer:string;
    model:number;
    feedback:string;
    color?:string;
    feature?:string;
}

function make_car(manufacturer:string,model:number,feedback:string,color?:string,feature?:string):car{
    return {manufacturer,model,feedback,color,feature};
}

function show_car(anycar:car){
    if (anycar.color!=undefined && anycar.feature!=undefined){
        console.log(anycar);
    }
    else{
        console.log("Complete information is not present");
    }
}

let car1,car2:car;

car1 = make_car("Honda",2020,"Car is good","Black","ABS");
car2 = make_car("Toyota",2021,"Car has some engine issues");

show_car(car1);
show_car(car2);

