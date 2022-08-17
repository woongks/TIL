html 파일은 한줄씩 순차적으로 실행되기 때문에 태그가 정의되기 전에 script 태그 안에서 해당 태그를 접근하려고 하면 오류가 발생한다.

이를 해결하려면 script를 최하단에서 로드한다.

다른 방법으로는 load 이벤트 리스너를 등록하는 것이 있다.
window.onload로 등록을 하면 script가 중간에 나와도 html 파싱이 끝난 후에 window.onload 내용을 실행한다. 파싱과 외부 컨텐츠 로딩(images, script, css 등) 끝날 때까지 기다린 후에 실행되기 때문에 비효율적이다.

또 다른 방법은 DOMContentLoaded 이벤트를 등록하는 것이 있다. 이는 외부 컨텐츠 로딩 전 파싱을 하면 발생하는 이벤트다.

html5부터는 defer와 async를 사용하면 효율적으로 script를 실행할 수 있다.

defer는 HTML 파싱과 함께 비동기로 JS 파일을 불러온다. 파싱이 완료되면 JS 코드를 실행한다.

```HTML
<script src="script.js" defer></script>
```

async도 마찬가지로 파싱과 함께 비동기로 JS 파일을 불러온다. 다만 JS 파일을 불러오고 바로 실행을 하는데 이때 파싱을 잠시 중단한다. 실질적으로 async보다는 defer가 더 실용적이다.
