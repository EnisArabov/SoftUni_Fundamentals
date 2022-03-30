function solve(input) {
  let word = input.shift();
  for (let line of input) {
    if (line == "Decode") {
      break;
    }
    let commands = line.split("|");

    let command = commands[0];
    let p1 = commands[1];
    let p2 = commands[2];

    if (command == "ChangeAll") {
      word = word.split(p1).join(p2);
    } else if (command == "Insert") {
      let left = word.substring(0, Number(p1));
      let right = word.substring(Number(p1), word.length);
      word = left + p2 + right;
    } else if (command == "Move") {
      let left = word.substring(0, Number(p1));
      let right = word.substring(Number(p1), word.length);
      word = right + left;
    }
  }
  console.log(`The decrypted message is: ${word}`);
}

solve(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);

console.log('----');

solve([
  'owyouh',
  'Move|2',
  'Move|3',
  'Insert|3|are',
  'Insert|9|?',
  'Decode'])
