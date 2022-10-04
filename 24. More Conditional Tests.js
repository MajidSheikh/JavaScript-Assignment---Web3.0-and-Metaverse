let name = 'Momin';
console.log("Is name != 'Majid'? I predict True.")
console.log(name != 'Majid')

console.log("Is name == 'Momin'? I predict True.")
console.log(name == 'Momin')

console.log("Is name != 'Momin'? I predict False.")
console.log(name != 'Momin')

console.log("Is name == 'momin'? I predict False.")
console.log(name == 'momin')

let car = "fortuner"
console.log("Is car == 'Fortuner'? I predict False.")
console.log(car == 'Fortuner')

console.log("Is car == 'Fortuner'? I predict True.")
console.log(car == 'Fortuner'.toLowerCase())

let model = 2022
console.log("Is model == 2020? I predict False.")
console.log(model == 2020)

console.log("Is model == 2022 ? I predict True.")
console.log(model == 2022)

console.log("Is model != 2022 ? I predict False.")
console.log(model != 2022)

console.log("Is model > 2020 ? I predict True.")
console.log(model > 2020)

console.log("Is model < 2020 ? I predict False.")
console.log(model < 2020)

console.log("Is model >= 2022 ? I predict True.")
console.log(model >= 2022)

console.log("Is model <= 2020 ? I predict False.")
console.log(model <= 2020)

let frontend = "Metaverse";
let backend = "Blockchain";

console.log("Is frontend == 'Metaverse' && backend == 'Blockchain' ? I predict True.")
console.log(frontend == 'Metaverse' && backend == 'Blockchain');

console.log("Is frontend == 'Metaverse' && backend == 'nodejs' ? I predict False.")
console.log(frontend == 'Metaverse' && backend == 'nodejs');

console.log("Is frontend == 'Metaverse' || backend == 'Blockchain' ? I predict True.")
console.log(frontend == 'ReactJs' || backend == 'Blockchain');

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.includes("Mango"));
console.log(fruits.includes("Peach"));