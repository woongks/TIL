### 자바스크립트에서 자주 쓰이는 array 메서드

<br /><br />

map(): 배열 내의 모든 element에 대하여 주어진 함수를 호출한 결과를 모아서 새로운 배열로 반환한다.

```JavaScript

const numbers = [1, 2, 3, 4, 5, 6, 7];

const mappedNumbers = numbers.map((element)=> element * 2);

console.log(mappedNumbers) // [2, 4, 6, 8, 10, 12, 14]

```

<br />

reduce(): 배열의 각 요소에 대해 주어진 reducer 함수를 실행하고 하나의 결과값을 반환한다.

```JavaScript

const numbers = [1, 2, 3, 4, 5, 6, 7];
// acc: 누적값 cur: 현재값
console.log(numbers.reduce((acc, cur)=> {
  if (acc.includes(cur) === false) {
    acc.push(cur);
  }
}, []);
// [1, 2, 3, 4, 5, 6, 7]

```

<br />

filter(): 배열에서 특정 조건을 만족하는 element만 추출하는 메서드

```JavaScript

const numbers = [1, 2, 3, 4, 5, 6, 7];

console.log(numbers.filter((element)=> element % 2 === 0))
// [2, 4, 6]

```

<br />

some(): 배열에 특정 element가 있으면 true, 아니면 false를 반환하는 메서드

```JavaScript

const numbers = [1, 2, 3, 4, 5, 6, 7];

console.log(numbers.some((element)=> element === 1))
// true

```

<br />

every(): 배열 안의 element 전부가 특정 조건을 만족하면 true, 아니면 false 반환하는 메서드

```JavaScript

const numbers = [1, 2, 3, 4, 5, 6, 7];

console.log(numbers.every((element)=> element <= 7))
// true

```
