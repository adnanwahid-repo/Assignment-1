let magician_names:string[] = ["abc","xyz","pqr"];

function show_magician(magician:string[]):void{
    for (let x of magician){
        console.log(x);
    }
}

show_magician(magician_names);
