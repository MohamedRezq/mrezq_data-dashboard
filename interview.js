const numHandler = (numArray) => {
  const numArrayAsString = String(numArray);
  let oddSum = 0;
  let evenSum = 0;
  for (let digit of numArrayAsString) {
    console.log("digit: ", digit);
    if (digit % 2 === 0) {
      //even
      evenSum += Number(digit);
    } else {
      oddSum += Number(digit);
    }
  }
  oddSum = oddSum * 3; // then multiply it by 3
  console.log("oddSum: ", oddSum);
  evenSum = evenSum * 2; // then multiply it by 2
  console.log("evenSum: ", evenSum);
  let result = oddSum + evenSum;
  console.log("result: ", result);
  let divideBy10Rem = result % 10;
  console.log("divideBy10Rem: ", divideBy10Rem);
  let output = 10 - divideBy10Rem;
  console.log("output: ", output);
};

numHandler(1265432983);
