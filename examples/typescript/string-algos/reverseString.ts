function reverseString(str: string): string {
  // using built-in string manipulation functions
  // return str.split("").reverse().join("");

  // if (str === "") {
  //   return "";
  // } else {
  //   return reverseString(str.substr(1)) + str.charAt(0);
  // }

  // using for loop and push to array
  let stringArr: string[] = [];
  for (let i = str.length - 1; i >= 0; i--) {
    stringArr.push(str[i]);
  }
  return stringArr.join("");

  // string concatenation using for loop
  //   let reversedString: string = "";
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     reversedString += str[i];
  //   }
  //   return reversedString;
}

function isPalindrome(str: string): boolean {
  return str === reverseString(str);
}

console.log(reverseString("Hello, World!"));
console.log(isPalindrome("racecar "));
