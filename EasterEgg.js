function solve(input) {
  let text = input[0];
  let pattern =
  /(\@|#)(?<eggColor>[a-z]{3,})(\@|#)[^a-zA-Z0-9]+(?<amount>[0-9]+)[^a-zA-Z0-9]/g

  let match = null;
  let result = [];

  while ((match = pattern.exec(text))) {
    let color = match.groups["eggColor"];
    let amount = match.groups["amount"];

    result.push(`You found ${amount} ${color} eggs!`);
  }
  console.log(result.join("\n"));

}

solve([
  "@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/",
]);
