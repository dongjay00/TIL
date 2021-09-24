# Node.js

> V8(자바스크립트 엔진) 기반으로 빌드 된 **이벤트 기반 자바스크립트 런타임 플랫폼**
>
> 확장성 있는 네트워크 어플리케이션(특히 서버 사이드) 개발에 사용되는 소프트웨어 플랫폼

- **이벤트 기반? (event-driven)**
  - 사용자가 **이벤트를 발생시켰을 때**에만 작동
    - 가령 마우스, 키보드 입력 등으로 데이터를 전송했을 때
  - 대부분의 서버는 사용자가 이벤트를 발생하기를 기다린다
    - 이벤트가 발생할 때까지 계속 자원(대기 시간, 메모리 등)을 소모하게 되는 단점 발생
  - 하지만 Node.js 환경 같은 경우는 **이벤트 발생 시에만 웹서버가 연결해주기 때문에** 자원 소모를 최소화 할 수 있다.



## 특징

> 자바스크립트를 활용
>
> Non-blocking I/O와 단일 스레드 이벤트 루프를 통한 높은 성능으로 처리 가능

- **Non-blocking I/O**

  - blocking I/O(동기식 I/O)의 경우, 쓰기/읽기 이벤트가 발생하면 이벤트가 끝날때까지 해당 모듈을 점유하게 된다. 즉, 이벤트가 끝날 때 까진 다른 일을 진행할 수 없다.
    - 메모리 버퍼에 데이터를 차지하게 되므로 메모리도 소비하게 된다.
  - Non-blocking I/O의 경우, 쓰기/읽기 이벤트가 시작하자마자 모듈을 반환시켜 다른 작업을 하도록 준비 상태로 된다. 
    - 따라서 속도가 blocking보다 빠르고 메모리도 덜 차지하게 된다.
  - cf) 비동기(Asynchronous) I/O와의 차이?
    - 비동기 I/O는 회신이 시그널 혹은 콜백의 형태로 이루어져 있으며, 회신이 있을 때까지 어플리케이션은 다른 작업을 진행할 수 있다.
    - 프로세스가 블록 상태가 되지 않는다는 점에선 Non-blocking I/O와 같다. 하지만 Non-blocking I/O는 처리가 완료되지 않으면 에러를 회신하고 블록 상태로 만들지 않는 반면, 비동기 I/O는 처리를 바로 할 수 없을 때 처리가 완료되는 시점까지 백그라운드에서 대기하고 종료한 타이밍을 회신하는 차이가 있다.

  

- **단일 스레드 이벤트 루프**

  - 이벤트 루프가 하나이기 때문에, 하나의 몸으로 한 가지 일만 하게 된다.
  - **장점**
    - 적은 양의 자원으로 일을 처리할 수 있다.
      - 멀티스레드의 경우 몸을 여러 개로 쪼개서 일을 한 후, 일의 결과를 합친다. 이 때 일에 대한 점유 문제와 해당 일을 쪼개고 합치는 작업이 더해져 자원을 더 사용한다.
  - **단점**
    - 한 번에 한 가지 일 밖에 못한다.
      - 어느 한 곳에 예외 상황 및 에러가 발생하면, 전체 어플리케이션에 영향이 가게 된다.