# package.json

> 배포한 모듈 정보를 담고자 만들어진 파일

- Node.js로 확장 모듈을 작성하면, npm을 통해 중앙 저장소로 배포할 수 있다.
- 꼭 확장 모듈 형태로 배포하기 위한 것이 아니더라도, 애플리케이션을 개발할 때 package.json 파일을 이용하면 **사용하는 확장 모듈에 대한 의존성 관리가 가능**하기 때문에 편리하다.

[참고사이트](https://edu.goorm.io/learn/lecture/557/%ED%95%9C-%EB%88%88%EC%97%90-%EB%81%9D%EB%82%B4%EB%8A%94-node-js/lesson/174371/package-json)



## devDependencies vs. dependencies

> 개발용 의존성 vs. 일반 의존성

- package.json에서 관리하는 패키지는 위와 같이 두 종류로 구분된다.

  ```json
  "devDependencies": {
      "parcel-bundler": "^1.12.4"
  },
  "dependencies": {
      "lodash": "^4.17.21"
  }
  ```

  - `devDependencies`
    - 개발 단계에서만 필요하고 브라우저에서 렌더링 할 때는 필요하지 않은 패키지
  - `dependencies`
    - 브라우저에 반드시 렌더링 되어야 하는 패키지

- 일반적으로 npm i 만으로 설치하면, 일반 의존성 설치가 된다.
- 개발용 의존성 설치를 하고 싶다면, `-D` 혹은 `--save-dev` 옵션을 주면 된다.
  -  `npm i parcel-bundler -D`