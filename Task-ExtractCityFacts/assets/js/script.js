function City(name, population, continent) {
    this.Name = name;
    this.Population = population;
    this.Continent = continent;
}

function cityFacts(a) {
    console.log(`${a.Name} has a population of ${a.Population} and is situated in ${a.Continent}`)
}

let city1 = new City("Paris", 2140526, "Europe");
let city2 = new City("Toronto", 2930000, "America")
let city3 = new City("Tokyo", 13929386, "Asia")

cityFacts(city1);
cityFacts(city2);
cityFacts(city3);