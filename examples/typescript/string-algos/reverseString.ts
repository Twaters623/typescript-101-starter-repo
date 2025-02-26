function reverseString(str: string): string {
  // using built-in string manipulation functions
  //   return str.split("").reverse().join("");

  if (str === "") {
    return "";
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }

  // string concatenation using for loop
  //   let reversedString: string = "";
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     reversedString += str[i];
  //   }
  //   return reversedString;
}

console.log(reverseString("Hello, World!"));
