/*
unshift/push - add an element to the beginning/end of an array
shift/pop - remove and return the first/last element of an array
splice - to insert at particular index
*/

let people:string[] = ["Hazim","Mazin","Umer"];
console.log("Following people are invited for dinner");
console.log(people);
console.log("Mazin could't attend this dinner");
console.log("Mazin is replaced by Shahzaib");
people[1] = "Shahzaib";
console.log(people);
console.log("Adding more guests");
people.unshift("Rehan");    // insert at the begining
people.push("Abid");    // insert at the end
people.splice(2,0,"Zia");   // insert at the middle , 2 is index, 0 is number of items to be deleted, item
console.log(people);
