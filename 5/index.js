// 5. 숫자 배열에서 짝수만 골라서 새로운 배열을 만드는 함수를 작성하세요
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getEvenNumbers(numArray) {
  // 이곳에 코드를 작성합니다.
  let evenNumbers = [];

  for (let i = 0; i < numArray.length; i++) {
    if (Number(numArray[i]) % 2 === 0) {
      evenNumbers.push(numArray[i]);
    }
  }

  return evenNumbers;
}

console.log(getEvenNumbers(numbers)); // [2, 4, 6, 8, 10]이 출력되어야 함
