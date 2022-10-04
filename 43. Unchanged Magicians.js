const magicians = ["Zia Khan saab", "Daniyal nagori", "Majid Sheikh"];
const great_magicians = [...magicians];
function show_magicians(magicians){
    magicians.forEach(magician => {
        console.log(magician);
    });
}

function make_great(magicians){
    
    for(let i=0; i < magicians.length; i++){
        great_magicians[i] = `${magicians[i]} Great`;
    }
    return great_magicians;
}

make_great(great_magicians)

show_magicians(magicians);
show_magicians(great_magicians);