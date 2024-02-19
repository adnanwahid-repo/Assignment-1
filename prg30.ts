let users:string[] = ["admin","adnan","mazin","shahzaib","irfan"];

let username:string = "adnan";

if (users.includes(username)==true){
    if(username=="admin"){
        console.log("Hello admin, would you like to see a status report?");
    }
    else{
        console.log("Hello "+username+", thank you for logging in again.");
    }
}
else{
    console.log("User not found");
}
