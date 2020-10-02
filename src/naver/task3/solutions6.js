function solution(A) {
  let smallest = -1;
  let largest = -1;

  let arrayOfPieces = [];
  let piece = [];

  let previous = 0;
  let totalCounter = 0;
  let sizeOfPiece = 1;
  let largestPrevious = previous;
  let largestNum = 0;

  piece = [A[0]];
  for (let i = 1; i < A.length - 1; i++) {
    let previous = A[i - 1];
    let current = A[i];
    let next = A[i + 1];

    if ((current < previous && current < next) || (current > previous && current > next)) {
      piece.push(current);
    } else {
      arrayOfPieces.push(piece);
      piece = [current];
    }
  }

  return arrayOfPieces;
}

function sortPieces(arrayOfPieces) {
  let sorted = [];
  for (let i = 0; i < arrayOfPieces.length; i++) {
    const piece = arrayOfPieces[i];
    piece.sort((a, b) => a - b);
    sorted = sorted.concat(piece);
  }
  return sorted;
}
// const A = [2, 4, 1, 6, 5, 9, 7]; // Result: 3
// const A = [4, 3, 2, 6, 1]; // Result: 1
// const A = [2, 1, 6, 4, 3, 7]; // Result: 3
const A = [2, 1, 6, 4, 3, 7, 8, 9, 13, 12, 11, 10]; // Result: 4

console.log(A);
const result = solution(A);
console.log(JSON.stringify(result));
const sorted = sortPieces(result);
console.log(sorted.join(','));
console.log(`##### result: ${result.length}`);
