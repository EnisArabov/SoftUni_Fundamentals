function solve(input) {
  //take text from input
  let text = input[0];
  //find regexp maches
  let pattern =
    /(#|@)(?<word>[A-Za-z]{3,})\1{2}(?<reversedWord>[A-Za-z]{3,})\1/g;
  let match = pattern.exec(text);
  let count = 0;
  let result = [];
  // for every match
  while (match != null) {
    // - add to counter
    count++;
    //-check if matches are mirrored
    let word1 = match[2];
    let word2 = match[3];
    let reversed = word2.split("").reverse().join("");

    //--if yes, add result
    if (word1 == reversed) {
      result.push(`${word1} <=> ${word2}`);
    }
    match = pattern.exec(text);
  }

  //print result
  if (count == 0) {
    console.log("No word pairs found!");
  } else {
    console.log(`${count} word pairs found!`);
  }
  if (result.length == 0) {
    console.log("No mirror words!");
  } else {
    console.log("The mirror words are:");
    console.log(result.join(", "));
  }
}

solve([
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);
