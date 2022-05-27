# 싱글톤 패턴 (Singleton Pattern)

> 하나의 클래스에 오직 하나의 인스턴스만 가지는 패턴



## 특징

- 하나의 인스턴스를 만들어 놓고, 해당 인스턴스를 다른 모듈들이 공유하며 사용
  - 인스턴스 생성 시 드는 비용이 줄어든다.
- 의존성이 높아지는 단점 존재
- 데이터베이스 연결 모듈에 활용 (ex) mongoDB 연결 모듈)