# DOM

> Document Object Model

- 웹 문서는 텍스트 파일 => 브라우저가 이해할 수 있는 구조로 메모리에 올려야 함
- 브라우저의 렌더링 엔진은 웹 문서를 로드, 파싱하여 메모리에 적재
  - 이것을 DOM이라고 한다.
- DOM 트리 구조
  - 모든 요소와 요소의 어트리뷰트, 텍스트를 각각 객체로 만든다.
  - 이들 객체를 트리 구조를 구성한다. (부자 관계 표현)
- DOM은 JavaScript에 의해 동적으로 변경될 수 있다.
  - 웹 문서의 동적 변경을 위해, DOM은 JavaScript에 API를 제공
  - 이 API를 DOM API라고 한다.
  - DOM API는 JavaScript 객체로 제공된다. (프로퍼티, 메소드)



## DOM tree

> 브라우저가 HTML 문서를 로드 후 파싱하여 생성하는 모델. 객체의 트리로 구조화 되어있다.

- DOM 트리의 구성 요소
  - 문서 노드(Document Node)
    - 트리 최상위 노드. DOM 트리의 진입점이다.
  - 요소 노드(Element Node)
    - HTML 요소를 표현. 중첩에 의해 부자 관계를 가지며, 이 부자 관계로 정보를 구조화 한다.
    - 요소별 특성을 표현하기 위해, HTMLElement 객체를 상속한 객체로 구성된다.
  - 어트리뷰트 노드(Attribute Node)
    - HTML 요소의 어트리뷰트 표현
    - 어트리뷰트 노드는 지정된 요소의 자식이 아니라, 그 요소의 일부로 표현된다.
  - 텍스트 노드(Text Node)
    - HTML 요소의 텍스트. 요소 노드의 자식이다.
    - DOM tree의 최종단이다.