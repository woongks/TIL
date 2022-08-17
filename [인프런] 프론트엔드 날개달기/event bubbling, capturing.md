이벤트 버블링과 캡쳐링

순차적으로 body, main, div, p, span 순으로 구성된 트리를 예로 들어보자. (갈수록 하위 디렉토리)
만약 span에서 이벤트가 발생하면 span의 상위 태그로 순차적으로 이벤트가 전파된다. 즉, span -> p -> div -> main -> body 순으로 이벤트가 일어난다. 이를 이벤트 버블링이라고 한다.

반대로 이벤트 캡쳐링은 span에서 이벤트가 발생하면 body에서부터 시작해서 span으로 내려오게 된다.

```JavaScript

sspan.addEventListener('click', function(event) {
    event.stopPropagation();
    console.log('span')
}, true)

// 이렇게 true 조건을 주면 이벤트 캡쳐링 방식으로 이벤트가 전파되는 것을 뜻한다.
// 기본적으로 false로 되어 있고, 이벤트 버블링만 일어난다.
// event.stopPropagation() 메서드를 사용하면 캡쳐링이나 버블링의 전파를 멈출 수 있다.
```
