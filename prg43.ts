let magician_names:string[] = ["abc","xyz","pqr"];

function show_magician(magician:string[]):void{
    for (let x of magician){
        console.log(x);
    }
}

let great_magician_names:string[] = [...magician_names];

function make_great(magician:string[]):void{
    for (let x in magician){
        magician[x] = "The great "+magician[x];
    }
}

make_great(great_magician_names);
show_magician(magician_names);
show_magician(great_magician_names);
