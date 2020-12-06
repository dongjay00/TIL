# Javascript

> 헷갈리는 Javascript 개념 연습장



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





## 2. use strict

- flexible한 javascript 언어의 특성 상, 반드시 선언해주는 것이 좋다.
  - 비상식적인 선언에 대해 오류를 띄워준다. 





## 3. hoisting

- 어디에 선언했는가에 상관없이, **선언을 제일 위로 끌어올려줌**





## 4. variables

- `let` : 선언 이후 값 변경 가능
  - `var` 절대 사용하지 말 것 (block을 무시하고, hoisting 특성이 있기 때문)





## 5. constants

- `const` : 값 변경 불가능 (immutable)
  - security
    - 해커들이 값을 삽입해서 변경해가는 것을 방지
  - thread safety
    - App이 실행되면 한가지 프로세스가 할당
    - 그 프로세스 안에서 동시에 여러 스레드가 동작하면서, **동시에** 값을 계속 바꿔 나가는 것은 매우 위험
    - 상수를 사용하는 것이 좋다.
  - 인간의 실수 방지





## 6. symbol

> 유일한 속성 만들기





## 7. primitive vs. object

- **primitive**

  - value 자체가 메모리에 저장된다.

  

- **object**

  - reference가 object를 가리킨다. (reference를 통해서 object를 담고 있는 메모리를 가리킴.)
  - object를 const로 선언했어도, object 내부의 값은 변경이 가능하다.





## 8. function

- **parameter** : js에서는 param type 선언 안해줘도 알아서 동작한다.

  - typescript에서는 type 선언을 반드시 해줘야 한다.

    ```js
    function log(message: string): number {
        console.log(message);
        return 0;
    }
    ```

  - **js를 다 배우고 나면, typescript를 꼭 배울것!!**

  

- **Rest parameter**

  - 인자들을 배열로 만들어준다.

  - `...` 

    ```js
    function printAll(...args) {
        ...
    }
    printAll('dream', 'coding', 'ellie');
    ```

    



## 9. Local scope

- 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.





## 10. function declaration vs. function expression

- **declaration** : hoisted 특성을 지님.
  - js 엔진이 선언된 것들을 제일 위로 올려주기 때문
- **expression** : 선언이 먼저 되어야 호출할 수 있음.





## 11. IIFE

- 선언한 함수를 바로 호출하기

  ```js
  // IIFE: Immediately Invoked Function Expression
  (function hello() {
    console.log('IIFE');
  })();
  ```





## 12. class vs. object

- **Class**
  - 붕어빵을 만들 때 틀이라 생각하면 됨
  - no data in / declared once / template
  - 메모리에 올라가지 않음
- **object**
  - 붕어빵을 실제로 채움 (팥붕어빵? 크림붕어빵? 피자붕어빵?)
  - instance of a class / created many times / data in
  - 메모리에 올라감