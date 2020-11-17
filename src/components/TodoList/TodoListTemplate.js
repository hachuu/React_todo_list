import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({form, children}) => {

  const today = new Date();
  const year = today.getFullYear();
  const month = (1 + today.getMonth() >= 10 ? 1 + today.getMonth() : `0${1 + today.getMonth()}`);
  const day = today.getDate() >= 10 ? today.getDate() : `0${today.getDate()}`;
  const todate = `${year}/${month}/${day}`;

  return (
    <main className="todo-list-template">
      <div className="title">
        {todate} To do List
      </div>
      <section className="form-wrapper">
        {form}
      </section>
      <section className="todos-wrapper">
        { children }
      </section>
    </main>
  );
};

export default TodoListTemplate;