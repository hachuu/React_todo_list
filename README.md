# React_todo_list
React Todo List

[참조 링크](https://velopert.com/3480)

## 깃 허브 페이지로 배포하기

1. npm install -g gh-pages
2. npm run deploy

## 추가 작업해야할 것
1. Palette 컴포넌트를 만드세요
2. TodoListTemplate 에서 Palette 가 들어갈 자리를 만드세요
3. 색상 ['#343a40', '#f03e3e', '#12b886', '#228ae6'] 를 Palette 컴포넌트의 props 로 전달하고, 이를 컴포넌트 배열로 변환하세요.
4. App 의 state 에 color 값을 추가하세요
5. color 를 변경하는 메소드를 만드세요
6. 필요한 props 를 Palette 에 전달하세요.
7. handleCreate 에서 새 Todo 를 만들 때 color 값을 집어넣도록 설정하세요
8. Form 의 input 텍스트가 현재 선택된 색으로 보여지게 하세요
9. TodoItem 이 렌더링 될 때 텍스트를 주어진 색으로 보여지게 하세요


### 의도한 바와 비교해보기
make palette section in todoItemList.js
App.js color define
make color div array
make palete array by color array
change palette color background
when palette is clicked input text color is changed
