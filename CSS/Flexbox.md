# Flexbox

> 박스를 정렬하는 방식



## Flexbox 개요

- 컨테이너와 아이템들이 함께 있는 상태가 flexbox의 기본이다.
- item들을 열 방향으로 늘어놓을지, 행 방향으로 늘어놓을지 결정할 수 있다.

```css
.container {
    display: flex;
}
```



## 용어 - flex container, flex item, main axis, cross axis

- container - item
  - 부모 자식 관계
  - 컨테이너 내부에 정렬할 아이템들을 보관
- main-axis(주축), cross-axis(교차축)
  - 주축은 변경이 가능하다.
  - 교차축은 주축에 따라 자동으로 변경.



## Container - display

- 그동안 다뤘던 block, inline, inline-block은 자기 자신 주위의 환경에 맞춰가기 위한 용도

- flex 속성은 자기 내부의 item들에 영향을 미치는 요소이다.

- 따라서 두가지 속성을 동시에 지정할 수 있다.

  ```css
  .container {
      display: inline flex;
  }
  
  /* 하이푼으로 연결해서 지정도 가능 */
  .container {
      display: inline-flex;
  }
  ```

  

## Container - flex-direction

- 주축 및 방향 지정
  - row, row-reverse, column, column-reverse



## Container - flex-wrap, flex-flow (shorthand)

- flex-wrap
  - item들을 강제로 한 줄에 배치할지, 아니면 가능한 영역을 벗어나지 않고 여러행으로 나누어 배치할지 결정
  - `nowrap` - 기본값, 한 줄에만 배치
  - `wrap` - 여러 행에 걸쳐서 배치
  - `wrap-reverse` - wrap과 비슷하나, 시작점과 끝점의 기준이 반대로 배치
- flex-flow
  - flex-direction과 flex-wrap을 한꺼번에 작성하는 단축 속성



## Item - order

> flex 혹은 grid 컨테이너 내에서 현재 아이템의 배치 순서 지정

- order는 integer 값으로 지정
- 오름차순 order 값으로 순서가 정해지고, order가 같은 요소끼린 소스 코드 순서대로 정렬된다.
- 논리적인 순서나 탭 순서와는 전혀 관련 없고, 단지 보이는 순서에만 영향을 준다.



## Item - flex-grow

> item 요소가 container 요소 내부에서 할당 가능한 공간의 정도를 선언

- 남은 공간을 item들 각각의 flex-grow 값 비율로 나눠가지며 차지하게 된다.
- 기본값 `0` 은 남은 공간을 할당 받지 않는다는 의미이다.



## Item - flex-shrink

> flex-grow와는 반대로 수축되는 특성
>
> item 요소의 크기가 container 요소보다 클 때, 얼마나 축소되어야 하는지 지정
>
> 즉 줄어든 크기를 나눠 갖는다 생각하면 된다

- 기본값 `1` 
- `0`을 지정하면, 줄어들지 않고 자기의 원래 크기를 고수한다.



## Item - flex-basis

> flex 아이템의 초기 크기를 지정
>
> 즉 grow 되지 않고, shrink도 되지 않은 기본 크기

- width 값
  - length, 퍼센트, auto 중 하나를 지정할 수 있다. 음수는 유효하지 않다.
- content
  - content를 지정하면, flex item의 컨텐츠 크기에 따라 자동으로 크기가 변한다.



## Item - flex (shorthand)

> https://developer.mozilla.org/ko/docs/Web/CSS/flex

- flex-grow, flex-shrink, flex-basis 순으로 작성해야 한다.
  - 지정하지 않으면 기본값으로 들어간다.
    - flex-grow: 0
    - flex-shrink: 1
    - flex-basis: auto
      - 다만 한 개 또는 두 개의 단위 없는 숫자 값을 사용할 때, flex-basis의 값은 auto가 아니라 0이 된다.
  - 값이 한 개일 때, 그 값은 다음 중 하나여야 한다.
    - number를 지정하면 flex-grow이다.
    - length, percentage를 지정하면 flex-basis이다.
    - none, auto, initial 중 하나를 지정할 수 있다.



## Container - justify-content

> 주축을 기준으로 어떻게 아이템들을 정렬할지

- flex-start 
  - 주축이 시작되는 위치부터 정렬
- flex-end  
  - 주축이 끝나는 위치에 정렬
- center
  - 주축을 기준으로 가운데 자리 잡는다.
- space-between
  - 아이템 사이 간격을 동일하게 분배, 첫 번째와 마지막 아이템은 처음과 끝에 딱 붙어 있다.
- space-around
  - 아이템 각각의 앞뒤로 동일한 간격을 지정해서 분배.



## Container - align-items

> 교차축을 기준으로 한 정렬
>
> 한 줄 요소들에 사용하는 속성이다.

- stretch
  - 기본값
  - 교차축의 flex-start부터 flex-end까지 모든 공간을 차지한도록 배치
- flex-start
  - 교차축의 시작점을 기준으로 배치
- flex-end
  - 교차축의 끝점을 기준으로 배치
- center
  - 교차축의 가운데로 배치



## Container - align-content

- wrap 상태인 items 뭉치에 적용할 속성이다. (즉, 여러 줄 요소에 사용하는 속성이다.)
- 따라서 align-items와는 다르게 space-around, space-between 속성을 가질 수 있다.



## Item - align-self

- align-items는 items 전부에 적용되는 속성
- align-self는 item 하나하나에 각각 적용되는 속성