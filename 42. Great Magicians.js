const magicians = ["Zia Khan saab", "Daniyal nagori", "Majid Sheikh"];

function show_magicians(magicians){
    magicians.forEach(magician => {
        console.log(magician);
    });
}

function make_great(magicians){
    for(let i=0; i < magicians.length; i++){
        magicians[i] = `${magicians[i]} Great`;
    }
}
make_great(magicians);

show_magicians(magicians);