function reverseString(str) {
  const word = [];
  for(let char of str){
    word.unshift(char)
  }
  console.log(word)
  return word.join('')
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));

  console.log("")

  console.log('Expecting: "yenom"')
  console.log("=>", reverseString('money'))
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
