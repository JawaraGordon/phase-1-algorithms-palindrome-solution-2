// solution 1 = best readability

// Write your algorithm here
function isPalindrome(string) {
  const reversedWord = reverseString(string);
  return string === reversedWord;
}
function reverseString(string) {
  return string.split("").reverse().join("");
}

// solution 2 = most efficient
/* 
function isPalindrome(word) {
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      return false;
    }
  }

  return true;
} */

/* 
  Add your pseudocode here
  I need to make an isPalindrome function that returns either true or false. When the input string is the same forwards and backwards, I should return true. That means if the first letter is the same as the last letter, and the second letter is the same as the second to last letter, and so on (until the middle of the word), the function should return true.

For the word "racecar", the first and last letter is "r", the second and second to last is "a", the third and third to last is "c", and the middle is "e", so I should return true. For the word "robot", the first letter is "r" and the last letter is "t", so I should return false.
*/

/*
  Add written explanation of your solution here

Solution 1) The isPalindrome function returns a string that is compared to a reversed copy 
using the reverseString function that has turns it into an array, then iterated through before being turned back into a string. 

Solution 2)

The isPalindrome function iterates from the beginning of the string to the middle. It identifies the middle of the string using its length. i is our index from the beginning of the word and j is the corresponding index from the end of the word. To calculate j, it uses the length of the word minus one to get the last letter of the word, and then subtracts i, so as i increases, j will decrease. It then accesses the corresponding letters from the beginning and end of the string to check if they match. If any letters don't match, it stops looping and exits the function early with a return value of false. The last step is to return true once it reaches the end of the loop, since at that point all the letters will have been compared. 

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
