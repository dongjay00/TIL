# 스택(Stack)

> 나중에 넣은 데이터가 먼저 나오는 LIFO(Last In First Out) 기반의 선형 자료 구조
>
> 콜 스택(Call Stack) - 프로그램의 서브루틴에 대한 정보를 저장
>
> 스택 오버플로(Stack Overflow) - 꽉 찬 스택에 요소를 추가하려 하면, 스택의 요소가 넘쳐서 에러 발생
>
> 사용 예시: 뒤로 가기 기능, `Ctrl` + `z`, 배달 알림 등



## 구현 메서드(method)

- 데이터 전체 획득
  - Stack.getBuffer()
- 비어있는지 여부 확인
  - Stack.isEmpty()
- 추가 / 삭제 / 마지막 데이터 조회 / 크기 확인
  - Stack.push(), Stack.pop(), Stack.peak(), Stack.size()
- 데이터 위치 / 존재 여부 확인
  - Stack.indexOf() / Stack.includes()



## JavaScript로 구현하기

```js
// Stack(): 생성자 함수로 초기 데이터 설정
function Stack(array) {
    this.array = array ? array : [];
}

// getBuffer(): 객체 내 데이터 셋 반환
Stack.prototype.getBuffer = function () {
    return this.array.slice();
}

// isEmpty(): 객체 내 데이터 존재 여부 파악
Stack.prototype.isEmpty = function () {
    return this.array.length == 0;
}

// push(): 데이터 추가
Stack.prototype.push = function (element) {
    return this.array.push(element);
}

// pop(): 데이터 삭제
Stack.prototype.pop = function () {
    return this.array.pop();
}

// peek(): 가장 끝 데이터 반환
Stack.prototype.peek = function () {
    return this.array[this.array.length - 1];
}

// size(): 스택 내 데이터 개수 확인
Stack.prototype.size = function () {
    return this.array.length;
}

// indexOf(): 매개변수로 넘어온 element 위치 확인
Stack.prototype.indexOf = function (element, position = 0) {
    // return this.array.indexOf(element, position);
    for (let i = position; i < this.array.length; i++) {
        if (element === this.array[i]) return i;
    }
    return -1;
}

// includes(): 데이터 존재 여부 확인
Stack.prototype.includes = function (element, position = 0) {
    // return this.array.includes(element);
    for (let i = position; i < this.array.length; i++) {
        if (element === this.array[i]) return true;
    }
    return false;
}
```



