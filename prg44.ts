let item1:string[] = ["cheese","ketchup","onion"];
let item2:string[] = ["barbq sauce","cucumber","onion","garlic ketchup"];

function summary(items:string[]):void{
    console.log("Items of a Sandwich are: ");
    for(let x of items){
        console.log(x);
    }
}

summary(item1);
summary(item2);
