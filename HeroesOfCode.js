function solve(input) {
  let numberOfHeroes = input.shift();
  let heroes = {};

  for (let i = 0; i < numberOfHeroes; i++) {
    let hero = input.shift().split(" ");
    let name = hero[0];
    let hp = hero[1];
    let mp = hero[2];
    heroes[name] = [hp, mp];
  }

  for (let line of input) {
    if (line == "End") {
      break;
    }
    let commandsArray = line.split(" - ");
    let command = commandsArray.shift();

    if (command == "Heal") {
      let hero = commandsArray[0];
      let hpHealded = commandsArray[1];
      if (Number(Object.values(heroes[hero])[0]) + Number(hpHealded) > 100) {
        hpHealded -=
          Number(Object.values(heroes[hero])[0]) + Number(hpHealded) - 100;
        heroes[hero][0] = Number(heroes[hero][0]);
        heroes[hero][0] += Number(hpHealded);

        console.log(`${hero} healed for ${hpHealded} HP!`);
      } else {
        heroes[hero][0] = Number(heroes[hero][0]);
        heroes[hero][0] += Number(hpHealded);
        console.log(`${hero} healed for ${hpHealded} HP!`);
      }
    } else if (command == "Recharge") {
      let hero = commandsArray[0];
      let mpRecharged = commandsArray[1];
      if (Number(Object.values(heroes[hero])[1]) + Number(mpRecharged) > 200) {
        mpRecharged -=
          Number(Object.values(heroes[hero])[1]) + Number(mpRecharged) - 200;
        heroes[hero][1] = Number(heroes[hero][1]);
        heroes[hero][1] += Number(mpRecharged);

        console.log(`${hero} recharged for ${mpRecharged} MP!`);
      } else {
        heroes[hero][1] = Number(heroes[hero][1]);
        heroes[hero][1] += Number(mpRecharged);
        console.log(`${hero} recharged for ${mpRecharged} MP!`);
      }
    } else if (command == "TakeDamage") {
      let hero = commandsArray[0];
      let damage = commandsArray[1];
      let attacker = commandsArray[2];
      if (Number(Object.values(heroes[hero])[0]) - Number(damage) <= 0) {
        console.log(`${hero} has been killed by ${attacker}`);
        delete heroes[hero];
      } else {
        let currentHP = Number(Object.values(heroes[hero])[0]) - Number(damage);
        heroes[hero][0] = currentHP;
        console.log(
          `${hero} was hit for ${damage} HP ${attacker} and now has ${currentHP} HP left!`
        );
      }
    } else if (command == "CastSpell") {
      let hero = commandsArray[0];
      let neededMP = commandsArray[1];
      let spellName = commandsArray[2];
      if (Number(Object.values(heroes[hero])[1]) < Number(neededMP)) {
        console.log(`${hero} does not have enough MP to cast ${spellName}`);
      } else {
        let manaLeft =
          Number(Object.values(heroes[hero])[1]) - Number(neededMP);
        heroes[hero][1] = manaLeft;
        console.log(
          `${hero} has successfully cast ${spellName} and now has ${manaLeft} MP!`
        );
      }
    }
  }
  for (let hero in heroes) {
    console.log(hero);
    console.log(`HP: ${heroes[hero][0]}`);
    console.log(`MP: ${heroes[hero][1]}`);
  }
}

solve([
  "2",
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End",
]);

console.log("------");

solve([
  "4",
  "Adela 90 150",
  "SirMullich 70 40",
  "Ivor 1 111",
  "Tyris 94 61",
  "Heal - SirMullich - 50",
  "Recharge - Adela - 100",
  "CastSpell - Tyris - 1000 - Fireball",
  "TakeDamage - Tyris - 99 - Fireball",
  "TakeDamage - Ivor - 3 - Mosquito",
  "End",
]);
