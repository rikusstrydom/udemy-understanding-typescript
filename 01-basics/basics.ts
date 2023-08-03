function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // javascript way of checking types

  //   if (typeof n1 !== "number" || typeof n2 !== "number") {
  //     throw new Error("Incorrect Input!");
  //   }

  const result = n1 + n2;

  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

let number1 = +"5"; //cast to a number
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);
