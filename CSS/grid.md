# grid



## Grid 개요

> flex는 1차원이 원칙
>
> Grid는 본격적으로 2차원을 다룸

- 그리드는 수평선과 수직선으로 이루어진 집합체로, 디자인 요소를 정렬할 수 있는 대상 패턴을 생성
- columns, rows로 구성되며, gutters라는 행과 열 사이의 공백이 존재



## Container - display

```css
/* box 형태 */
dispaly: grid;

/* 인라인 형태로 바꾸기 위해선 다음과 같이 지정해야 한다. */
display: inline-grid;
```



## Container - grid-template-rows, grid-template-columns

- 원하는 행이나 열의 갯수를 생각한 뒤, 그 갯수만큼 길이값을 지정해야 한다.

  ```css
  /* 열을 100px, 150px, 100px 짜리 3개로 만들고 싶을 때 */
  .container {
      display: grid;
      grid-template-columns: 100px 150px 100px;
  }
  ```

- `fr` - 비율을 설정하여 나눠가지기 위함. 즉 고정형 길이가 아니다.

  ```css
  /* 열을 1:1:1 비율로 3개로 만들고 싶을 때 */
  .container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
  }
  
  /* 같은 비율이 반복되면 repeat 함수를 사용해보자 */
  /* 위와 같은 결과이다 */
  .container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
  }
  ```

  

## Container - grid-template-areas

```html
<div class="container">
    <div class="item header">
        header
    </div>
    <div class="item main">
        main
    </div>
    <div class="item sidebar">
        sidebar
    </div>
    <div class="item footer">
        footer
    </div>
</div>
```

```css
.container {
    border: 5px dashed orange;
    width: 400px;
    height: 400px;
    
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
        "hd hd hd hd hd"
        "ma ma ma sb sb"
        "ft ft ft ft ft";
}

.item {
    background-color: paleturquoise;
    border: 3px solid blue;
    font-size: 24px;
}

.header {
    grid-area: hd;
}

.main {
    grid-area: ma;
}

.sidebar {
    grid-area: sb;
}

.footer {
    grid-area: ft;
}
```

- 비우고 싶은 칸이 있다면 `.` 을 입력하면 된다.



## Container - row-gap, column-gap, gap

> 행 또는 열 간의 간격 설정

```css
row-gap: 30px;
column-gap: 1em;

/* 단축 속성 gap: row column 순으로 지정 */
gap: 30px 1em;
```



## Container - grid-auto-rows, grid-auto-columns

> grid-template 밖으로 넘쳐나는 item들에 대한 길이 지정
>
> 넘쳐나는 item이 없으면, grid-auto로 지정한 영역은 볼 수가 없다.

```css
grid-auto-rows: 100px;
grid-auto-columns: 50px;
```



## Container - grid-auto-flow

> 위치 자동 배치 알고리즘이 어떻게 동작할지 암시적으로 조절하는 역할

- 아이템들이 흘러가는 방향을 어떤 방향으로 잡을지

- `dense` : 빈 영역을 어떻게든 꽉 채우게 만든다.

  ```css
  grid-auto-flow: column dense;
  ```

  

## Container - grid (shorthand)

- `/` 를 기준으로 앞쪽은 row, 뒤쪽은 column에 대한 내용이다.

  ```css
  grid: auto-flow / 1fr 1fr 1fr;
  ```

- 명시적, 암시적 속성은 자유롭게 작성



## Container - justify-content, align-content

> 남는 공간을 어떻게 활용하여 배치할지에 대한 속성
>
> 컨테이너에 대해 안에 있는 아이템 뭉치들을 어떻게 배치할지

- justify-content
  - 주축 기준
- align-content
  - 교차축 기준



## Container - justify-items, align-items

> grid로 만들어진 하나의 틀 내부에서 아이템 각각이 어떻게 배치될지를 결정
>
> 전체 아이템에 동시에 적용되는 속성이다.

- 기본값은 `stretch`
  - 너비 높이를 지정하지 않았다면, grid 한 칸을 꽉 채우고 있으려 한다. 



## Item - grid-row, grid-column



## Item - grid-area



## Item - order



## Item - z-index



## Grid 단위 - fr, min-content, max-content



## Grid 단위 - auto-fill, auto-fit



