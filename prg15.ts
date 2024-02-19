let people:string[] = ["Hazim","Mazin","Umer"];
console.log("Following people are invited for dinner");
for (let x of people){
    console.log(x);
}
console.log("Mazin could't attend this dinner");
console.log("Mazin is replaced by Shahzaib");
people[1] = "Shahzaib";
for (let x of people){
    console.log(x);
}