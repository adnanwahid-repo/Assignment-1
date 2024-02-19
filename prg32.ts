let users:string[] = ["adnan","irfan","hamid","mazin","hazim"];
let username:any;
username = prompt("Enter your username: ");
if (users.includes(username)==true){
    console.log("Username already exist");
}
else{
    console.log("username is available");
}
