function reverseString(str: string): string {
  // using built-in string manipulation functions
  // return str.split("").reverse().join("");

  // string concatenation using for loop
  let reversedString: string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}

console.log(reverseString("Hello, World!"));
