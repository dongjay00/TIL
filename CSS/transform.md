# transform



## transform(변형) 개요

> 회전, 크기 조절, 기울이기, 이동 효과 부여

- transform-function
  - 요소에 적용할 하나 이상의 CSS 변형 함수.
  - 변형 함수는 왼쪽에서 오른쪽으로 곱해진다.
  - 즉, 요소에 변형을 오른쪽부터 왼쪽으로 하나씩 순서대로 적용하는 것과 같다.



## 크기 - scale

```css
transform: scale(0.5); /* 보이는 너비 높이 모두 0.5배로 줄어든다. 하지만 원래 공간은 계속 차지한다 */
transform: scale(1.5, 0.5); /* 앞이 x축 비율, 뒤가 y축 비율 */
transform: scaleX(0.6); /* x축만 적용. scaleX, scaleZ도 있다. */
```



## 회전 - rotate

- angle 자료형

  - **deg** - degree(도)
  - **turn** - 바퀴

- rotate - 각도만큼 회전 시킨다.

  ```css
  transform: rotate(90deg);
  transform: rotate(0.5turn);
  ```

  - 음수값도 가능



## 이동 - translate

> (0, 0) 기준으로 얼만큼 이동시킬지 결정

```css
transform: translate(100px, 200px);
transform: translate(50%, 30%); /* 원래 크기 기준으로 비율을 잡는다. */
transform: translateX(100px);
transform: translateY(50px);
```



## 기울이기 - skew

```css
transform: skew(15deg); /* 다른 속성과는 다르게, 값을 하나만 입력하면 x축에만 적용된다. */
transform: skew(15deg, 18deg)
transform: skewX(15deg);
transform: skewY(15deg);
```



## 기준점 - transform-origin. 

> 기준점을 변경하는 속성

```css
transform-origin: center; /* 기본값. */ 
transform-origin: top left;
transform-origin: bottom right;
transform-origin: 50px 100px;
```

