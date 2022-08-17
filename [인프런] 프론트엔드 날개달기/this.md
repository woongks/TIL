자바스크립트에서 this는 객체를 가리키는 키워드다.

this는 호출한 대상이 된다.
this는 보통 함수를 호출한 방법에 의해 결정된다.

bind?

```JavaScript
let printThis1 = printThis.bind(person1)
printThis();

// 그냥 printThis()를 호출했다면 this는 window 객체가 되었겠지만 bind를 해주면
// printThis 메서드의 this는 person1이게 된다.
// bind는 여러번 할 수 없다.
```

**화살표 함수와 Strict Mode에서 this는 조금 달라진다.**

화살표 함수는 상위 스코프의 this를 그대로 물려 받는다.
객체 내부에서 함수를 정의할 때 this를 잘못 쓰는 일이 없게 화살표 함수와 일반 함수를 잘 구분해서 사용하는 것이 좋다. (e.g. addEventListener에서 화살표 함수를 쓰면 window 객체를 this로 갖게 된다.)

엄격 모드 (Strict Mode)에서는 호출된 주체가 없는 경우 window 객체를 반환하지 않고 undefined를 반환하게 된다.
