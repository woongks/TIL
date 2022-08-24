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
