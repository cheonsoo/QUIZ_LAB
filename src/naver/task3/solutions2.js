function solution(A) {
  let smallest = -1;
  let largest = -1;

  let previous = A[0];
  let totalCounter = 0;
  let sizeOfPiece = 1;
  for (let i = 1; i < A.length; i++) {
    let current = A[i];

    // if (sizeOfPiece === 0 && i < A.length - 1) {
    if (sizeOfPiece < 2) {
      sizeOfPiece++;
      previous = current;
      continue;
    }

    // Case: Split the array
    if (current > previous) {
      sizeOfPiece = 1;
      totalCounter++;
      console.log(`### Split: ${current}`);
    }
    // Case: Put current number into pieced array
    else {
      sizeOfPiece++;
    }

    previous = current;
  }

  return totalCounter + 1;
}

const A = [2, 4, 1, 6, 5, 9, 7]; // Result: 3
// const A = [4, 3, 2, 6, 1]; // Result: 1
// const A = [2, 1, 6, 4, 3, 7]; // Result: 3

console.log(A);
const result = solution(A);
console.log(`### result: ${result}`);
