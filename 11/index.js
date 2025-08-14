// 11. 사람들의 정보가 담긴 배열에서 성인(20세 이상)만 골라내는 함수를 만들어보세요.

const people = [
  { name: "Vivi", age: 17 },
  { name: "Anne", age: 25 },
  { name: "Jay", age: 19 },
  { name: "Hun", age: 30 },
];

function getAdults(peopleArray) {
  // 이곳에 코드를 작성합니다.
  let age = [];
  for (let i = 0; i < people.length; i++) {
    if (people[i].age >= 20) {
      age.push(people[i]);
    }
  }
  return age;
}

console.log(getAdults(people));
// [{name: "Anne", age: 25}, {name: "Hun", age: 30}]
