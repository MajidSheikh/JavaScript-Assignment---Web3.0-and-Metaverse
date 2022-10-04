function make_album(artist, title, track = 0){
    return album_dictionary = {
        artist, title,
        ...(track != 0 ? {track: track} : null)
    }
}

console.log(make_album("majid", "love for JS"));
console.log(make_album("majid", "love for JS", 5));