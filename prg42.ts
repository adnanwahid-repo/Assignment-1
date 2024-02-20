let magician_names:string[] = ["abc","xyz","pqr"];

function show_magician(magician:string[]):void{
    for (let x of magician){
        console.log(x);
    }
}

function make_great(magician:string[]):void{
    for (let x in magician){
        magician[x] = "The great "+magician[x];
    }
}

make_great(magician_names);
show_magician(magician_names);
