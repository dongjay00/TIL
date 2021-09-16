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

> grid-row(column)-start와 grid-row(column)-end의 단축 속성

```css
/* 앞이 start 뒤가 end */
.item:first-child {
 	grid-row: 1 / -1;   
  	grid-column: 1 / 3;
}
```

- grid-row와 grid-column의 값들은 몇 번째 칸을 의미하는 것이 아니라, 몇 번째 선인지를 의미하는 것이다.

  - 선은 0번째가 아니고 1번째부터 시작한다.
  - 음수로도 지정이 가능하다. 이 때 -1은 맨 마지막 선을 뜻한다.

- start부터 몇 칸 임을 지정하고 싶다면 span을 이용한다.

  ```css
  grid-row: 2 / span 2;
  ```



## Item - grid-area

> 영역의 이름을 지정

- grid-template-area에 사용하려고 쓰기도 했다.

- 하지만 본질은 grid-row-start, grid-column-start, grid-row-end, grid-column-end 값을 한번에 설정하는 shorthand이기도 하다. (순서는 위에 써놓은 대로 start 2개 뒤에 end 2개 순이므로 주의!)

  ```css
  grid-area: 1 / 1 / -1 / 3;
  ```

  

## Item - order

> 플렉스 혹은 그리드 컨테이너 안에서 현재 요소의 배치 순서를 지정

- flex에서 설명했던 order와 같은 기능
  - 값이 작을수록 앞으로 온다.
  - 정수값만 가능(음수도 가능)

- order가 같다면 markup 순으로 정렬



## Item - z-index

> 위치 지정 요소와 그 자손 혹은 하위 아이템의 Z축 순서를 지정

- 더 큰 z-index 요소가 작은 요소 위를 덮는다.



## Grid 단위 - fr, min-content, max-content

- fr 
  - 비율로 나눌 때 사용
- min-content
  - content 중 가장 긴 단어에 맞춰서,  그 길이보단 더 이상 줄어들 수 없게 지정한다.
- max-content
  - content를 한 줄에 최대한 집어넣어 보여준다.



## Grid 단위 - auto-fill, auto-fit

- auto-fill

  - 남는 공간이 생기면, 자동으로 다음 열 혹은 행으로 채워주는 속성

  - 반응형에 있어 중요

  - minmax와의 조합으로 꽉찬 반응형을 구현 할 수 있다.

    ```css
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-auto-rows: 50px;
    ```

- auto-fit

  - 남는 공간을 전부 꽉 채워주는 속성

  - 마찬가지로 minmax와의 조합으로 자주 사용된다.

    ```css 
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-auto-rows: 50px;
    ```

