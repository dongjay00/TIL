# Closure

> **함수의 실행이 끝난 뒤에도 함수에 선언된 변수의 값을 접근할 수 있는 성질**

- 자바스크립트 뿐 아니라, 함수형 프로그래밍 언어에서 자주 사용되는 개념이다.

- 아래 예시를 보자

  ```javascript
  function addCounter() {
    var counter = 0;
  
    return function() {
      return counter++;
    };
  }
  ```

  - 함수를 `return` 할 수 있는 이유는, 함수가 자바스크립트의 **일급 객체**에 속하기 때문이다.

  - counter 변수는 스코프가 함수 내부이기 때문에, 외부에서 console을 찍으면 오류가 발생한다.

    ```javascript
    console.log(counter); // Uncaught ReferenceError: counter is not defined
    ```

  - 만약 addCounter 함수를 실행한 결과를 console로 찍으면 다음과 같은 결과가 나온다.

    ```javascript
    console.log(addCounter());
    // ƒ () { return counter++;}
    ```

    - `addCounter()` 함수의 역할은 `addCounter()` 함수를 실행했을 때 함수를 반환하는 것이기 때문이다.

  - 물론 여전히 외부에서 counter 변수에 접근할 순 없다.

  - 하지만, 아래 코드를 실행해보면 재밌는 결과를 얻을 수 있다.

    ```javascript
    function addCounter() {
      var counter = 0;
    
      return function() {
        return counter++;
      };
    }
    
    var add = addCounter();
    add(); // 0
    add(); // 1
    add(); // 2
    ```

    - 위와 같이 동작하는 이유는, `addCounter()`라는 함수가 반환한 함수를 `add`라는 변수에 담아놨기 때문에 `add` 변수 자체가 함수처럼 동작하는 것이다. 즉, add 변수가 addCounter()가 반환한 함수를 참조하고 있다.

  - 이처럼 함수의 실행이 끝나고 나서도 함수 안의 변수를 참조할 수 있는게 바로 클로져이다.





