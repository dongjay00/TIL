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

