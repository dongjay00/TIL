# JavaScript

> 헷갈리는 JavaScript 개념 연습장



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





## 13. Getter & Setter

> 가령, 사용자가 나이를 -1로 설정한다면...이게 말이 되나요?
>
> 클래스를 사용자가 바보같이 잘못 사용해도, 우리가 조금 더 방어적인 자세로 만들수 있도록 해주는 것이 Getter와 Setter이다.

```js
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this.age;
  }

  set age(value) {
    this.age = value;
  }
}
```

- getter를 정의 하는 순간, constructor의 `this.age`는 메모리에 있는 값을 읽어오는 것이 아니라 getter를 바로 호출하게 된다.

- setter를 정의 하는 순간, constructor의 `= age`을 호출할 때(값을 할당할 때) 바로 메모리에 할당하는 것이 아니라 setter를 호출하게 된다.

  - setter 안에서 전달된 value를 `this.age`에 할당할 때, 메모리에 값을 업데이트 하는 것이 아니라 setter를 호출하게 된다.  (무한 반복에 빠지게 된다.) => `Maximum call stack size exceeded`

- getter와 setter 내의 변수를 조금 다르게 적어줘야 한다.

  ```js
  get age() {
      return this._age;
    }
  
    set age(value) {
      this._age = value;
    }
  ```

- User 클래스 내에는 고로, `firstName`, `lastName`, `_age` 세 개의 필드가 존재한다.

- 이제 setter가 있기 때문에 다음과 같이 방어할 수 있다.

  ```js
  set age(value) {
      if (value < 0) {
        throw Error('age can not be negative');
      }
      this._age = value;
    }
  ```

  



## 14. Fields (public vs. private)

> 최근에 추가된 js 문법
>
> 너무 최신 문법이라, 아직 적용 안되는 브라우저도 많음 (쓰려면 Babel을 써야 한다.)

- **public**
  - 그냥 일반적인 필드 선언
  - 외부에서 접근 가능
- **private**
  - `#` 기호를 붙여서 선언
  - 내부에서만 접근 가능





## 15. Static

- Object와 상관없이, class 고유의 값과 메서드가 있을 수 있다.
- `static` 을 붙여서 선언.
- static 요소는 Object로는 접근할 수 없다. (undefined)





## 16. instanceof

> `object instanceof class`

- 해당 object가 특정 class의 instance인지 아닌지 여부를 확인

  - true or false

  - `Object` : 우리가 사용하는 모든 class들은 javascript `Object` class를 상속받아 만들어 진 것임을 유의

    ```js
    console.log(triangle instanceof Object); // true
    ```

    



## 17. object

- js는 **dynamically type language**
  - 동적으로 type이 runtime때 결정되는 언어 (Runtime: 프로그램이 동작하고 있을때)
  - 뒤늦게 object에 하나의 property를 **추가/삭제**할 수 있다. (가급적이면 피할 것, 유지보수 어렵다.)



- `object.assign`

  ```js
  const fruit1 = { color: 'red' };
  const fruit2 = { color: 'blue', size: 'big' };
  const mixed = Object.assign({}, fruit1, fruit2);
  console.log(mixed.color); // blue
  console.log(mixed.size); // big
  ```

  - fruit2가 fruit1을 덮어 씌운다.
  - 뒤쪽에 있는 인자가 앞에 있는 인자를 덮어 씌우는 구조.
