# transition



## transition (전환) 개요

> 자연스럽게 CSS에 변화를 주는



## transition-property, transition-duration

- transition-property

  - 어떤 CSS를 변경하고 싶은지, 특정 속성을 지정한다.

    ```css
    transition-property: margin-right, color;
    transition-property: all;
    transition-property: none;
    ```

- transition-duration

  - transition-property를 얼마만큼의 시간동안 바꿀지 지정

    ```css
    transition-duration: 2s, 1s;
    transition-property: margin-right, color;
    ```

  - time 자료형

    - s(초), ms(밀리초) 단위 사용



## transition-delay, transition-timing-function

- transition-delay
  - transition 요청을 받은 이후 실제로 transition 하기까지 기다려야하는 시간의 양을 지정
  - 약간의 텀이 생긴다.
- transition-timing-function
  - transition이 되는 중간 과정의 시간
  - ease(기본값), ease-in, ease-out, ease-in-out, linear, cubic-bezier() 등의 값을 지정



## transition (shorthand)

```css
/* Apply to 1 property */
/* property name | duration */
transition: margin-left 4s;

/* property name | duration | delay */
transition: margin-left 4s 1s;

/* property name | duration | timing function | delay */
transition: margin-left 4s ease-in-out 1s;

/* Apply to 2 properties */
transition: margin-left 4s, color 1s;

/* Apply to all changed properties */
transition: all 0.5s ease-out;

/* Global values */
transition: inherit;
transition: initial;
transition: unset;
```

- 순서가 매우 중요하다.
  - 시간으로 해석될 수 있는 값이 첫번째에 위치한다면 [`transition-duration` (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration) 로 적용되고, 두번째에 위치한다면 [`transition-delay`](https://developer.mozilla.org/ko/docs/Web/CSS/transition-delay) 로 적용됩니다. 
  - 맨 앞에는 되도록 transition-property를 적어주도록 하자



## transition + transform 활용 예

> 둘을 활용해 다양한 애니메이션 효과를 줄 수 있다.

