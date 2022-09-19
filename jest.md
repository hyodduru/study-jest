## Jest 기본 문법

- render : 인수로 제공하는 jsx에 관한 virtual DOM 생성함.
- assertion

## Jest-DOM 단언 (assertion)

- 단언 : 테스트의 통과 여부를 결정

`expect(linkElement).toBeInTheDocument()`

- expect : jest global, starts the assertion
- expect의 인수 : 예측에 들어맞는지 확인하고자 jest에서 확인하는 것
- matcher : type of assertion, this matcher comes from Jest-DOM (toBeInTheDocument를 가리킴)

### 단언 패턴

- `expect(element.textContext).toBe('hello')`
- `expect(elementsArray).toHaveLength(7)`

### jest-dom

- create-react-app과 제공되며 create-react-app과 함께 설치된다.
- setupTests.js 파일을 사용해 각 테스트 전에 jest-dom을 가져옴.
- DOM을 기반으로 한 매처
  - ex) toBeVisible() or toBeChecked()

## Watch 모드와 테스트가 작동하는 방식

- React Testing Library

  - 컴포넌트를 가상 DOM으로 렌더링하는데 도움이 된다.
  - 가상 DOM을 검색하는 데 도움이 된다.
  - 가상 DOM과 상호작용을 하며 요소를 클릭하거나 텍스트를 입력함.
  - Test runner를 필요로함. (테스트를 찾고 실행하며 단언할 무언가가 필요)

- Jest
  - create-react-app과 함께 제공됨.

### Jest Watch Mode

- Watch 모드는 Jest를 실행하는 방법으로 마지막 커밋 이후 파일의 모든 변경 사항을 확인해서 마지막 커밋 이후 변경된 파일과 연관된 테스트만 실행

### Jest 작동 방식

- global text의 첫번째 인수 : 테스트를 식별하는, 설명하는 문자열, 두번째 인수 : test function
- Test fails if error is thrownwhen running function
- No error => test passes!

## TDD(Test-Driven Development)

- 코드 작성 전 테스트를 작성, 이후 테스트를 통과시키기 위해 테스트 코드 작성
- "레드-그린 테스트"라고 함.
  - 코드 작성 전에 테스트에 실패하는 레드 테스트를 먼저 실행하고, 코드 작성 후에는 통과하는 테스트로 그린 테스트를 확인하는 것

### Why TDD?

- 코드 변경 사항이 생길 때마다 모든 테스트를 다시 실행해서 자동 회귀 테스트 가능

## Functional Test vs Unit Test

- Unit Test

  - 테스트를 최대한 격리시킴.
  - 실패를 쉽고 정확하게 파악할 수 있음.
  - 하지만, 사용자가 소프트웨어와 상호 작용하는 방식과는 거리가 멀다.
  - 리팩토링으로 실패할 가능성도 있음.

- Functional Testing
  - 유저 플로우와 연관된 모든 단위를 포함.
  - 사용자가 소프트웨어와 상호 작용하는 방식이 밀접.
  - 하지만, 실패한 테스트를 디버깅하기 어려움.

## 테스팅 라이브러리가 포함된 ESLint와 Prettier

`npm install eslint-plugin-testing-library eslint-plugin-jest-dom`
