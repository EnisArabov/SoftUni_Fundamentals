function solve(input) {
  let targets = {};
  let line = input.shift();
  while (line !== "Sail") {
    let [city, population, gold] = line.split("||");
    if (!targets.hasOwnProperty(city)) {
      targets[city] = [Number(population), Number(gold)];
    } else {
      targets[city][0] += Number(population);
      targets[city][1] += Number(gold);
    }
    line = input.shift();
  }
  for (let lineOfInput of input) {
    if (lineOfInput == "End") {
      break;
    }
    if (lineOfInput.includes("Plunder")) {
      let [command, city, population, gold] = lineOfInput.split("=>");
      console.log(
        `${city} plundered! ${gold} gold stolen, ${population} citizens killed.`
      );
      targets[city][0] -= Number(population);
      targets[city][1] -= Number(gold);
      if (targets[city][0] <= 0 || targets[city][1] <= 0) {
        console.log(`${city} has been wiped off the map!`);
        delete targets[city];
      }
    } else if (lineOfInput.includes("Prosper")) {
      let [command, city, gold] = lineOfInput.split("=>");

      if (Number(gold) < 0) {
        console.log("Gold added cannot be a negative number!");
      } else {
        targets[city][1] += Number(gold);
        console.log(
          `${gold} gold added to the city treasury. ${city} now has ${targets[city][1]} gold.`
        );
      }
    }
  }
  if (targets.hasOwnProperty()) {
    console.log(
      "Ahoy, Captain! All targets have been plundered and destroyed!"
    );
  } else {
    console.log(
      "Ahoy, Captain! There are {count} wealthy settlements to go to:"
    );
    for (let city in targets) {
      console.log(
        `${city} -> Population: ${targets[city][0]} citizens, Gold: ${targets[city][1]} kg`
      );
    }
  }
}

solve([
  "Tortuga||345000||1250",
  "Santo Domingo||240000||630",
  "Havana||410000||1100",
  "Sail",
  "Plunder=>Tortuga=>75000=>380",
  "Prosper=>Santo Domingo=>180",
  "End",
]);
