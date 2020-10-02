function solution(A) {
  let smallest = -1;
  let largest = -1;

  let arrayOfPieces = [];
  let piece = [];

  let previous = A[0];
  piece = [A[0]];
  let totalCounter = 0;
  let sizeOfPiece = 1;
  let largestPrevious = previous;
  let largestNum = 0;

  for (let i = 1; i < A.length; i++) {
    let current = A[i];
    // console.log(`##################################################`);
    // console.log(`### current: ${current}`);
    // console.log(`### largestPrevious: ${largestPrevious}`);
    // console.log(`### largestNum: ${largestNum}`);
    // console.log(`##################################################`);

    // if (piece.length < 2) {
    //   // if (i === 0 || i === 1) {
    //   piece.push(current);
    //   previous = current;

    //   if (current > largestNum) largestNum = current;

    //   continue;
    // }

    // Case: Split the array
    if (current > previous) {
      arrayOfPieces.push(piece);
      piece = [current];
      largestPrevious = largestNum;
    }
    // Case: Put current number into pieced array
    else {
      // if (current < largestPrevious) {
      //   arrayOfPieces = [A];
      //   console.log(`It can't be splitted into pieces.`);
      //   break;
      // }

      piece.push(current);
    }

    previous = current;

    if (i === A.length - 1) {
      const lastPiece = arrayOfPieces[arrayOfPieces.length - 1];
      const lastNum = lastPiece[lastPiece.length - 1];
      if (lastNum !== current) arrayOfPieces.push(piece);
    }

    if (current > largestNum) largestNum = current;
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
