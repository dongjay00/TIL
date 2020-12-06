# Javascript

> Javascript 연습장



## 1. async vs. defer

- **async**
  - HTML parsing을 진행하면서, script 요소를 만나면 (병렬로) fetching 한다.
  - script 요소 fetching 완료 후, 바로 script 요소 실행을 하게 된다.
    - 이 때 parsing 과정을 잠시 멈춘다. (block)
  - **장점** : body에 script를 넣는 것 보다 다운로드 시간을 절약할 수 있다.
  - **단점** 
    - (js가 parsing 되기도 전에 먼저 실행되기 때문에) js가 DOM 요소를 조작한다면, 조작하려는 시점에 아직 html 요소가 정의 되어있지 않을 수도 있음.
    - 여전히 block 되는 시간이 있으므로, 사용자가 기다려야 하는 시간이 길다. 
    - script를 다수 사용하는 경우, **선언 순서와 관계 없이** 먼저 fetch가 완료된 js부터 실행하기 때문에 문제가 발생할 수 있다.



- **defer**
  - async와는 다르게 fetching 완료 후에도 parsing을 멈추지 않고 계속 진행.
  - HTML parsing이 다 끝나고 나서야 script 요소를 실행한다.
  - **실행 순서가 선언 순서와 동일하기 때문에**, 우리가 원하던 순서대로 script가 실행된다.
  - **가장 효율적이고, 가장 안전한 방식.**