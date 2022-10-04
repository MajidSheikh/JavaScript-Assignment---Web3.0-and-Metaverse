const describe_city = (city, country = "Pakistan") => {
    console.log(`${city} is in ${country}`);
}

describe_city("Sialkot");
describe_city("Lahore");
describe_city("London", "UK");