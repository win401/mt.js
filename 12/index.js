// 12. [심화문제] 배열에서 중복된 값을 제거하고 오름차순으로 정렬하는 함수를 만들어보세요.

function removeDuplicatesAndSort(arr) {
  // 이곳에 코드를 작성합니다.
  //console.log(arr);
  const set = new Set(arr);
  const customSet = [...set];
  //console.log(customSet);
  //const arr = new Set(arr);
  customSet.sort();
  //console.log(customSet);
  return customSet;
}

console.log(removeDuplicatesAndSort([3, 1, 4, 1, 5, 9, 2, 6, 5]));
// [1, 2, 3, 4, 5, 6, 9]가 출력되어야 함
