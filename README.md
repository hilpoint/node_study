node_study
==========
### 모던웹을 위한 Node.js 프로그래밍 책을 보며 스터디하기###
#### 5장 이벤트 ####

한 이벤트에 10개가 넘는 이벤트 핸들러를 연결시 개발자 실수로 간주하여
에러를 발생 시킨다.

10개 이상의 이벤트를 연결시에는 아래와 같이 작성한다.
~~~
process.setMaxListener(15); // 이벤트 연결 제한을 15개까지 늘림
~~~

이벤트에 연결할 수 있는 모든 객체는 EventEmitter 객체의 상속을 받는다.
EventEmitter 객체의 메서드의 종류는 아래와 같다.

|메서드명|설명|
|-----|-----|
|addEventListener(eventName, eventHandler)|이벤트 연결|
|on(eventName, eventHandler)|이벤트 연결|
|setMaxListener(limit)|이벤트 연결 개수 조정|
|removeListener(eventName, handler)|특정이벤트의 이벤트 핸들러 제거|
|removeAllListener([eventName])|모든 이벤트 핸들러 제거|
|once(eventName, eventHandler)|이벤트를 한번만 연결|