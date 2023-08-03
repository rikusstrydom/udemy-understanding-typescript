//Function overloads

type StringNumberType = string | number;

function addItems(a: number, b: number): number;
function addItems(a: string, b: string): string;
function addItems(a: string, b: number): string;
function addItems(a: number, b: string): string;
function addItems(a: StringNumberType, b: StringNumberType) {
  //Type guard
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = addItems(1, 5);
const result2 = addItems('1', '2');
const result3 = addItems(1, '2');
const result4 = addItems('1', 2);
