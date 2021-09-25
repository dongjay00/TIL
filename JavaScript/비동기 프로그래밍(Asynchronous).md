# 비동기 프로그래밍(Asynchronous)

> 비동기의 가장 큰 목적 - 어떤 것도 차단하지 않는다!
>
> JavaScript 애플리케이션은 단일 스레드에서 동작한다. 싱글스레드만으로 멀티스레드 부럽지 않은 부드러운 소프트웨어를 만들기 위해서는 대가를 치뤄야 한다. 그 대가가 바로 **비동기적(asynchronous) 프로그래밍**이다.

## AJAX

- JavaScript를 이용해 비동기적으로 브라우저와 서버가 데이터를 교환할 수 있는 통신 방식
- 보통은 서버로부터 웹페이지가 반화되면 전체를 갱신해야하지만, AJAX를 통해 페이지 일부만을 갱신하여 동일한 효과를 볼 수 있다.
- 갱신이 필요한 부분만 로드해서 빠르고, 부드러운 화면 효과를 기대할 수 있다.



## Promise

- **Promise vs. Callback**

  - 둘다 비동기 처리를 위해 사용되는 패턴이다.

  - 함수의 처리 순서를 보장하기 위해 함수를 중첩해서 사용하는 Callback은, 지나친 중첩으로 발생하는 Callback hell이란 문제점이 존재한다. 에러 처리도 쉽지 않다.

  - 이를 위해 ES6부터 도입된 것이 Promise이다.

    ```js
    // Promise 객체의 생성
    const promise = new Promise((resolve, reject) => {
      // 비동기 작업을 수행한다.
    
      if (/* 비동기 작업 수행 성공 */) {
        resolve('result');
      }
      else { /* 비동기 작업 수행 실패 */
        reject('failure reason');
      }
    });
    ```

    - 비동기 처리에 성공하면 `resolve`를 호출해서 비동기 처리 결과를 후속처리 method로 전달한다.
    - 비동기 처리에 실패하면 `reject`를 호출해서 에러메시지를 후속처리 method로 전달한다.
    - 후속처리 method는 `then`과 `catch`가 있고 둘다 Promise를 반환한다. then을 가지고 method chaining을 통해서 Callback hell 문제를 해결 할 수 있다.



## Async, Await

- Promise를 더욱 쉽게 사용할 수 있도록 ES2017(ES8) 문법이다. 
- 함수의 앞부분에 `async` 키워드를 추가하고, 함수 내부에서 Promise의 앞부분에 `await` 키워드를 사용한다.
  async, await를 사용할 경우 코드가 간결해지지만, 에러처리를 잡기 위해 try catch를 사용해야한다. 
- **동기적인 코드흐름**으로 개발이 가능하다. (그렇다고 동기적이라는 뜻이 아니므로 주의!)