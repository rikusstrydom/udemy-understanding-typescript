type Combinable = number | string;
type ConversionType = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultType: ConversionType
) {
  let result: Combinable;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultType === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  //   if (resultType === "as-number") {
  //     return +result;
  //   } else {
  //     return result.toString();
  //   }
}

const combineAges = combine(25, 32, "as-number");

console.log(combineAges);

const combineStringAges = combine("25", "32", "as-number");

console.log(combineStringAges);

const combineNames = combine("Rikus", "Maxi", "as-text");

console.log(combineNames);
