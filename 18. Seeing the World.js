let locations = ["Turkey", "Singapore", "Paris", "Sawat"];

printArray(locations);

const sortedLocations = [...locations].sort();
printArray(sortedLocations);

const reverseLocations = [...locations].reverse();
printArray(reverseLocations);

printArray(locations);

const descSort = locations.sort().reverse();
printArray(descSort);

printArray(locations);

locations.reverse();
printArray(locations);

locations.reverse();
printArray(locations);

locations.sort();
printArray(locations);

locations.sort().reverse();
printArray(locations);

function printArray (arr) {
    arr.forEach((location) => {
        console.log(location);
    })
}

