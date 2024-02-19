//let number:any;
//number = prompt("Enter any number between 1 to 9: ");

let num:number[] = [1,2,3,4,5,6,7,8,9];

for (let x of num){
    if (x==1){
        console.log(x+"st");
    }
    if (x==2){
        console.log(x+"nd");
    }
    if (x==3){
        console.log(x+"rd");
    }
    if (x>=4 && x<=9){
        console.log(x+"th");
    }
}
