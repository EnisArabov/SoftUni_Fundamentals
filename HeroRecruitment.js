function solve(input) {
  let heroes = {};
  for (let line of input) {
    if (line == "End") {
      break;
    }

    let [command, hero, spell] = line.split(" ");
    if (command == "Enroll") {
      if (heroes.hasOwnProperty(hero)) {
        console.log(`${hero} is already enrolled.`);
      } else {
        heroes[hero] = new Set();
      }
    } else if (command == "Learn") {
      if (heroes.hasOwnProperty(hero)) {
        if (heroes[hero].has(spell)) {
          console.log(`${hero} has already learnt ${spell}.`);
        } else {
          heroes[hero].add(spell);
        }
      } else {
        console.log(`${hero} doesn't exist.`);
      }
    } else if (command == "Unlearn") {
      if (heroes.hasOwnProperty(hero)) {
        if (heroes[hero].has(spell)) {
          heroes[hero].delete(spell);
        } else {
          console.log(`${hero} doesn't know ${spell}.`);
        }
      } else {
        console.log(`${hero} doesn't exist.`);
      }
    }
  }
  console.log("Heroes:");
  for (let hero in heroes) {
    let spells = [];
    heroes[hero].forEach((element) => {
      spells.push(element);
    });

    console.log(`== ${hero}: ${spells.join(', ')}`);
  }
}

solve([
  "Enroll Stefan",
  "Enroll Peter",
  "Enroll John",
  "Learn Stefan Spell",
  "Learn Stefan Spell2",
  "Learn Peter Dispel",
  "End",
]);
