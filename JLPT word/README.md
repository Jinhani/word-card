# 일본어 단어 카드

일본어 단어를 추가, 수정, 삭제, 검색하고 외움 상태를 관리할 수 있는 간단한 단어 카드 앱입니다.

현재는 CSS보다 JavaScript의 기본 동작 원리와 DOM 조작 흐름을 이해하는 것을 목표로 구현했습니다.

## 구현 기능

- 단어 추가
- 단어 수정
- 단어 삭제
- 단어 검색
- 외움 / 미외움 상태 변경
- 전체 / 외움 / 미외움 필터
- localStorage를 이용한 데이터 저장
- 새로고침 후에도 단어 목록과 외움 상태 유지

## 사용 기술

- HTML
- JavaScript
- DOM API
- localStorage

## 구현 내용

- `querySelector`를 사용해 DOM 요소 선택
- `addEventListener`로 클릭 이벤트 처리
- `createElement`와 `appendChild`를 사용해 요소 생성 및 화면 추가
- 함수를 분리해 중복 로직 감소
- `localStorage`에 데이터를 저장하고 불러오기
- `JSON.stringify()`와 `JSON.parse()`를 사용해 객체 배열 저장 및 복구
- 문자열 배열에서 객체 배열로 데이터 구조 확장
- `{ text, memorized }` 형태로 단어 데이터와 외움 상태 관리
- 외움 상태에 따라 단어 카드를 필터링

## 주요 개선 흐름

처음에는 단어를 문자열 배열로 저장했으나 이후 외움 상태를 함께 관리하기 위해 객체 배열 구조로 변경했습니다.

또한 단어 텍스트와 버튼 기능이 섞이지 않도록, 단어 텍스트는 span으로 분리하고 외움 버튼에는 .memorized-button 클래스를 부여했습니다.

## 학습한 핵심 개념

Vanilla JavaScript에서는 DOM 요소를 직접 선택하고, 요소를 생성한 뒤 appendChild로 화면에 추가했습니다.

React에서는 이 흐름을 직접 DOM 조작이 아니라 state, map, filter 중심으로 바꿀 예정입니다.

예상되는 전환 흐름은 다음과 같습니다.

createElement / appendChild → map 렌더링
card.remove() → 배열 filter
input.value → useState
localStorage 저장 구조 → React 상태와 동기화

## 다음 개선 목표

React + TypeScript로 같은 기능 재구현
CSS 또는 TailwindCSS를 적용해 카드 UI 개선
단어 입력 폼 구조 개선
외움 상태 필터와 검색 기능을 React 상태 기반으로 재구성
