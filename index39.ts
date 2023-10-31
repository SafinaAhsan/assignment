//40.Album:
function make_album(artistname:string, albumtitle:string,tracks?:number){
    const album:any={
artistname:artistname,
albumtitle:albumtitle,
}
  if (tracks !== undefined){
  album.track=tracks;
  }
  return album
}

console.log(make_album("atif aslam","aadat",10))
console.log(make_album("strings","dhani"))
console.log(make_album("noori","manwa re",8))

