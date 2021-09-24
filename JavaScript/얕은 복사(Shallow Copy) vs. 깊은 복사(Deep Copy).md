# 얕은 복사(Shallow Copy) vs. 깊은 복사(Deep Copy)

- object의 값을 복사하려 한다.

- 하지만 원본 객체를 그대로 할당하는 방식은 다음과 같은 문제가 생긴다. (복제)

  ```js
  let user = {
      name: "jay",
      age: 29,
  };
  
  let admin = user; // 그대로 할당
  
  admin.name = "lee";
  
  console.log(admin.name); // output: "lee"
  console.log(user.name); // output: "lee"
  
  user.age = 30;
  
  console.log(user.age); // output: 30
  console.log(admin.age); // output: 30
  ```

  - 본래 변경하고자 하던 프로퍼티 외에 복제한 객체의 프로퍼티에도 영향을 끼친 것을 볼 수 있다.
  - 이는 원본 객체를 그대로 할당할 때, 대상 전체가 아닌 **object 내 주소 값을 할당**하기 때문이다.
  - 따라서 복제된 객체와 원본 객체는 같은 주소를 바라보고 있으므로, 프로퍼티의 값을 변경하면 서로에게 영향을 끼치는 것이다.
  - 이렇게 복제가 아닌, 진짜 복사를 하기 위한 방법이 있다. 바로 얕은 복사와 깊은 복사이다.



## 얕은 복사

- for문을 통해 객체 복사

  ```js
  for (let key in user) {
      admin[key] = user[key];
  }
  
  admin.name = "lee";
  
  console.log(admin.name); // output: "lee"
  console.log(user.name); // output: "jay"
  ```

- Object.assign() 함수를 이용한 복사

  ```js
  let admin_obj = Object.assign({}, user);
  ```

- ES6에서 부터 지원하는 **전개 연산자**를 이용한 복사

  ```js
  let admin_spread = { ...user };
  ```

- 하지만 얕은 복사에는 문제점이 있다.

  ```js
  let user = {
      sizes: {
          height: 180,
          weight: 70,
      },
  };
  
  let admin_obj = Object.assign({}, user);
  admin_obj.sizes.weight++;
  --admin_obj.sizes.height;
  
  console.log(admin_obj.sizes.weight) // output: 71
  console.log(admin_obj.sizes.weight) // output: 179
  console.log(user.sizes.height) // output: 71
  console.log(user.sizes.height) // output: 179
  ```

  - 객체 내에 또 다른 객체가 있을 경우, 그 객체는 복사되지 않는다. 위의 예시에서 sizes라는 key는 복사했으나, sizes에 할당된 값은 여전히 가리키고 있는 객체의 주소값이므로 복사되지 않은 것이다.

  - 이를 위해 깊은 복사가 필요하다.



## 깊은 복사

- 재귀 함수를 이용한 깊은 객체 복사

  ```js
  function copyObj(obj) {
      let result = {};
      for (let key in obj) {
          if (typeof obj[key] === "object") result[key] = copyObj(obj[key]);
          else result[key] = obj[key];
      }
      return result;
  }
  
  let admin = copyObj(user);
  ```

- JSON 객체를 이용한 깊은 복사

  ```js
  let admin_json = JSON.parse(JSON.stringify(user));
  ```

  - stringify 함수는 객체를 문자열로 변환하는데, 이때 참조하던 원본 객체와의 관계가 끊긴다.