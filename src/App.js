import React, { Component } from 'react';
import TodoListTemplate from './components/TodoList/TodoListTemplate';
import Form from './components/Form/Form';
import TodoItemList from './components/TodoItemList/TodoItemList';
import Palette from './components/Palette/Palette';

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

class App extends Component {
  
  state = {
    input: '',
    todos: [
      { id: 0, text: '메일 확인', checked: false },
      { id: 1, text: 'shipgo/www git pull, git check', checked: false },
      { id: 2, text: '소스 리팩토링/공부', checked: false },
      { id: 3, text: 'react admin ', checked: false }
    ],
  }
  id = 4;
  
  handleChange = (e) => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  }

  
  /* 
  배열에 항목 추가하는방법
  1. spread  연산자 [...];
  2. concat
  */
  handleCreate = () => {
    const { input, todos, color } = this.state;
    if (!!input) {
      this.setState({
        input: '', // 인풋 비우고
        // concat 을 사용하여 배열에 추가
        todos: todos.concat({
          id: this.id++,
          text: input,
          checked: false,
          color
        })
      });
    } else {
      alert('input에 입력값을 넣어주세요');
    }
  }

  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // 선택한 객체

    const nextTodos = [...todos]; // 배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextTodos[index] = { 
      ...selected, 
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  handleSelectColor = (color) => {
    this.setState({
      color
    })
  }

  render() {
    const { input, todos, color } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleSelectColor
    } = this;

    return (
      <TodoListTemplate form={(
        <Form 
          value={input}
          color={color}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}
        palette={(
          <Palette colors={colors} selected={color} onSelect={handleSelectColor}/>
        )}>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </TodoListTemplate>
    );
  }
}

export default App;
