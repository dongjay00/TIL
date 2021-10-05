# ES modules

> import와 export 알아보기

```js
// 이 4가지 코드의 차이는?
import { Module } from "./module";
import Module from "./module";
import * as Module from "./module";
const Module = await import("./module");
```



## Named Export

> 많은 것들을 export / import 하고 싶을 때 사용하게 된다.

- 파일 혹은 모듈이 원하는 만큼 많은 수의 named exports를 가질 수 있다.

  ```js
  // math.js
  export const plus = (a, b) => a + b;
  export const minus = (a, b) => a - b;
  export const divide = (a, b) => a / b;
  ```

- import 하려면 반드시 syntax import를 써야 한다.

  ```js
  // main.js
  import { plus } from "./math";
  ```

  - 중괄호 안에 module에서 import하고 싶은 함수의 이름을 쓰면 된다.

  - 여러 개의 함수를 import 하고 싶다면 아래와 같이 하면 된다.

    ```js
    // main.js
    import { plus, minus, divide } from "./math";
    ```

- **import한 이름은 반드시 export된 이름과 같아야 한다.**

- 만약에 import한 이름을 다르게 사용하고 싶다면, `as` 키워드를 사용하면 된다.

  ```js
  // main.js
  import { plus as add } from "./math";
  
  add(3, 4); // 7
  ```



## Default Export

> **각 파일마다 단 한 개의 default export만 존재할 수 있다.**
>
> 한 개의 파일에서 모든 걸 export 하고, 또한 모든 걸 import 하는 방법.

- 모든 함수를 지니고 있는 한 개의 객체를 default로 export 한다.

  ```js
  // math.js
  const plus = (a, b) => a + b;
  const minus = (a, b) => a - b;
  const divide = (a, b) => a / b;
  export default { plus, minus, divide };
  ```

- 이제 중괄호를 쓸 필요 없고, default를 **우리가 원하는 이름으로 import 할 수 있다.**

  ```js
  // main.js
  import myMath from "./math";
  
  myMath.plus(2, 3);
  ```

- 파일에서 단 1개의 함수만 export 하고 싶을 때도 활용할 수 있다.

  ```js
  // db.js
  const connectToDB = () => {/*magic*/};
  export default connectToDB;
  ```

  ```js
  // main.js
  import connect from "./db";
  ```

- named export와 default export가 섞여있는 경우엔, 아래와 같이 import 할 수 있다.

  ```js
  // db.js
  const connectToDB = () => {/*magic*/};
  export const getUrl = () => {/*magic*/};
  export default connectToDB;
  ```

  ```js
  // main.js
  import connect, { getUrl } from "./db";
  ```

  

## Asterisk (*)

> all을 의미
>
> 즉, 모든 export 된 내용들을 import 하고 싶을 때 사용
>
> **단, default export가 없는 경우에만 사용 가능하다.**

- 아래와 같이 syntax를 쓰면, 모듈의 모든 함수를 한 번에 import 할 수 있다.

  ```js
  // main.js
  import * as myMath from "./math";
  myMath.plus(2, 2);
  ```

  - math 모듈에서 모든 함수를 import 해서 myMath 객체에 넣는다.



## 로딩을 빠르게 하기 위해선?

- **필요한 것만 import 하기**
  - 즉, named export를 사용하는 것이 낫다.

- **Dynamic import**

  - **로딩이 필요할때 까지를 기다려주는 방식**

  - 보통의 import 방식은 파일의 위에서부터 모든 걸 import 한다. 

  - 이는 로딩 속도를 느리게 하는 주범이다. 왜냐하면 유저가 사용하건 사용하지 않건, 웹사이트의 모든 코드를 모두 다운로드 해야하기 때문이다.

  - Dynamic import를 사용하면, 실제로 유저가 사용할 모듈만 import 할 수 있다.

    ```js
    function doMath() {
        import("./math")
        .then(math => math.plus(2, 2));
    }
    btn.addEventListener("click", doMath);
    ```

    - 이 예시에선, 유저가 버튼을 클릭하길 기다리고 있다.
    - 만약 유저가 버튼을 클릭하면, math 모듈을 import하고 사용하게 된다.
    - 즉, 요청이 있을 때마다 모듈을 로딩하게 된다. 

  - async/await를 사용해, 코드를 더 깔끔하게 정리할 수 있다.

    ```js
    async function doMath() {
        const math = await import("./math");
        math.plus(2, 2);
    }
    btn.addEventListener("click", doMath);
    ```

    