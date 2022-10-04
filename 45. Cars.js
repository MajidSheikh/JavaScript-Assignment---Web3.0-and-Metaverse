function make_car(manufacturer, model, ...options) {
    car = { manufacturer, model }
    for (let value of Object.values(options)) {
        car = {
            ...car,
            ...value
        }
    }
    return car;
}

console.log(make_car('subaru', 'outback', {color:'blue'}, {AC:true}));
console.log(make_car('honda', 'accord', {year: 1991}, {color:'white'},
{headlights: 'popup'}));