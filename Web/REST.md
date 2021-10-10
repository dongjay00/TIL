# REST

> Representational State Transfer
>
> - 웹의 장점을 최대한 활용할 수 있는 아키텍처

[참고자료](https://poiemaweb.com/js-rest-api)



## REST API 중심 규칙

1. URI는 자원을 표현하는 데에 집중할 것

   - 리소스명은 명사를 사용할 것. 행위에 대한 표현(동사)는 지양.

     ```sh
     # bad
     GET /getTodos/1
     GET /todos/show/1
     
     # good
     GET /todos/1
     ```

     

2. 자원에 대한 행위는 HTTP Method로 표현할 것

   - GET, POST, PUT, DELETE 등

     ```sh
     # bad
     GET /todos/delete/1
     
     # good
     DELETE /todos/1
     ```

     

## HTTP Method

> 5가지 메서드를 통해 CRUD를 구현함

| Method | Action         | 역할                     | 페이로드 |
| :----- | :------------- | :----------------------- | :------: |
| GET    | index/retrieve | 모든/특정 리소스를 조회  |    x     |
| POST   | create         | 리소스를 생성            |    ○     |
| PUT    | replace        | **리소스의 전체를 교체** |    ○     |
| PATCH  | modify         | **리소스의 일부를 수정** |    ○     |
| DELETE | delete         | 모든/특정 리소스를 삭제  |    x     |

- PUT과 PATCH의 차이에 주의하자.



## REST API의 구성

> - 자원, 행위, 표현 3가지 요소로 구성
> - REST API만으로 요청을 이해할 수 있다.

| 구성 요소       | 내용                    | 표현 방법            |
| :-------------- | :---------------------- | :------------------- |
| Resource        | 자원                    | HTTP URI             |
| Verb            | 자원에 대한 행위        | HTTP Method          |
| Representations | 자원에 대한 행위의 내용 | HTTP Message Payload |



## 제대로 설계하는 REST API

- URL에서는 동사를 사용하지 않는다.
  - add, edit, delete 같은 단어 쓰지 않는다.
- 즉 명사를 활용한다.
  - Collections (+ 고유 식별자) 활용
  - ex) `/movies` , `/movies/inception`
- HTTP methods와 결합하여 인터랙션 한다.
  - ex) GET + `/movies` , DELETE + `/movies/inception`
  - 이렇게 하면 위와 같은 단 2개의 URL만 가지고, CRUD를 구현할 수 있다.
- 객체들의 관계 인터랙션을 위해 URL을 사용할 수도 있다.
  - ex) GET + `/movies/inception/actors`

- 세부적인 것은 query parameter를 활용하자.
  - ex) `/movies?min_rating=9.8`
  - 페이지네이션도 적용 가능
    - ex) `/movies?page=5`
