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

## 유닛 테스트 함수

- 컴포넌트로 부터 분리되어있는 함수들
  - 몇개의 컴포넌트로부터 사용이 되므로
  - 논리가 다소 복잡하기 때문에

### 유닛 테스트가 사용되는 경우

- 테스트를 하기에는 논리가 너무 복잡한 경우
- 함수로 처리할 수 있을 때
- 더욱 복잡한 함수의 경우에는 모든 엣지 케이스들을 처리할 수 있음.
- 기능 테스트의 실패 원인을 판단할 수 있음.
- 기능 테스트가 아주 높은 수준에 있어 코드를 리팩토링하게 되면 실패에 저항력이 생김. (코드가 구현되는 구조 방식은 변경했으나 코드의 동작은 그대로인 경우)
- 복잡한 함수가 있고 해당하는 함수의 유닛 테스트 실행 시 그 함수에 대한 유닛 테스트가 실패할 시 해당 요소로 인해 테스트가 실패했다는 점을 알 수 있음.

### jest에서 사용되는 용어들

- `fireEvent` (test interactivity)
- jest-dom assertions:
  - `toBeEnabled()`
  - `toBeDisabled()`
  - `toBeChecked()`
- getByRole option `{name : }`
- Jest describe to group tests
- Unit testing functions

## screen Query Methods

### command[All]ByQueryType

#### command

-`get` : 요소가 DOM 내에 있을 것을 expect한다.

- `query` : 요소가 DOM 안에 있지 않을 것을 expect한다.
- `find` : 요소가 비동기적으로 나타나기를 expect한다.

#### [All]

- 하나 이상의 match를 expect하는 경우 [All]을 포함시켜 전체 배열을 얻을 수 있도록 함.

#### QueryType

- 무엇으로 검색을 하는지를 의미한다.
- `Role` (most prefered)
- `AltText` (images)
- `Text`(display elements)
- Form elements

  - `PlaceholderText`
  - `LabelText`
  - `DisplayValue`

  ex) `getAllByText`, `findByAltText` 등

## Mock Service Worker

- Mock Service Worker 의 사용 목적
- 네트워크 호출을 가로채서 지정된 응답을 반환해야 하기 위해
- 테스트하는 동안 발생하는 모든 네트워크 호출을 막는다.
- 서버 응답에 기반한 테스트 조건을 설정한다.

### Mock Service Worker Setup

- `npm install msw`
- 핸들러 생성 : 특정한 url과 라우트에 무엇을 반환할지 결정하는 함수
- 테스트 서버 생성
- 테스트하는 동안 테스트 서버가 항상 수신 대기 중인지 인터넷으로 나가는 호출을 가로채고 있는지 확인해야 함.
  - 같은 파일에서 각 테스트 후에 서버 핸들러를 재설정 한다.
