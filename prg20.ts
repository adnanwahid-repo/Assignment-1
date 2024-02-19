let cities:string[] = ["Karachi","Lahore","Islamabad","Toronto","Saskatoon"];
let countries: string[] = ["Canada","Pakistan","China","Indonesia","Malaysia"];
let languages: string[] = ["Urdu","Hindi","English","Arabic","Chinese"];
let corpus:any[] = [cities,countries,languages];

for (let x of corpus){
    console.log(x);
}