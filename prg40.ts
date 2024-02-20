interface music_album{
    artistname: string;
    albumtitle: string;
    tracks?: number;
}

function make_album(artistname:string , albumtitle:string, tracks?:number): music_album {
    return {artistname, albumtitle, tracks};
}

let album1,album2,album3: music_album;

album1 = make_album("Diljeet","xyz");
album2 = make_album("Atif","abc",10);
album3 = make_album("QB","pqr");
console.log(album1);
console.log(album2);
console.log(album3);
