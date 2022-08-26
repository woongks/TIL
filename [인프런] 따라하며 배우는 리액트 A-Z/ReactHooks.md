### react hooks란?

ReactConf 2018에서 발표된 class 없이 state를 사용할 수 있는 새로운 기능이다.

#### 클래스형 컴포넌트와 함수형 컴포넌트의 차이

클래스형: 더 많은 기능 제공, 더 긴 코드 양, 더 복잡한 코드, 더딘 성능

함수형: 더 적은 기능 제공, 짧은 코드 양, 간단한 코드, 빠른 성능

더 많은 기능이란?

함수형 컴포넌트에서는 리액트의 생명주기를 사용할 수 없었다.
생명주기란 컴포넌트의 mounting, updating, unmounting 기능을 말한다.

#### react hooks 장점

react hooks가 생기면서 함수형 컴포넌트에서도 생명주기를 사용할 수 있게 되었다.

react hooks가 생기면서 기존 클래스형 컴포넌트에서 사용한 componentDidMount, componentDidUpdate, componentWillUnmount 대신 useEffect만으로도 모든 처리를 할 수 있다.

HOC(Higher Order Component)를 Custom React Hooks로 대체해서 wrapper 컴포넌트를 줄일 수 있다.

HOC란?

화면에서 재사용 가능한 로직은 컴포넌트로 만들고 재사용 불가능한 ui와 같은 다른 부분은 parameter로 받아서 처리하는 방법이다.

#### state와 props?

state는 컴포넌트 내부에서 사용하는 데이터다.
props는 자식 컴포넌트가 필요에 의해 부모 컴포넌트로부터 전달 받는 데이터를 말한다.
props는 read only 데이터다.
 

리액트 useCallback이라는 hook은 어떤 역할을 하는가?

리액트의 어떤 자식 컴포넌트가 부모 컴포넌트의 함수를 props로 받아오는 경우가 있다.
그렇기 때문에 부모 컴포넌트가 리렌더링되면서 함수도 다시 렌더링이 되면, 이를 props로 참조하는 자식 컴포넌트도 리렌더링이 된다.

이를 최적화하기 위해 useCallback을 쓴다. 함수에 씌워줄 수 있으며, 다음과 같은 구조를 갖고 있다.

```JavaScript
const xx = useCallback((()=>{},[])
```

첫번째 인자로 함수가 들어가고 두번째 인자로 의존성 배열이 들어간다. 의존성 배열 안에 있는 props가 변경될 때에만 함수가 재생성된다는 것을 의미한다.

### useMemo?

리액트 useMemo 훅도 마찬가지로 함수에 씌워준다.
useMemo를 사용하는 경우 해당 함수가 호출되면, 그리고 만약 의존성 배열에 등록한 함수의 parameter 값이 이전에 실행되었을 때와 비교해 변하지 않았다면, 저번 결과 값을 참조해서 return 값을 반환한다 (memoization).

### 둘의 차이점

useCallback은 함수를 반환하고

useMemo는 함수를 실행해서 반환된 값을 반환한다.

즉

```JavaScript

useCallback(fn,deps)

useMemo(() => fn, deps)
```

위의 두 개는 같다.
