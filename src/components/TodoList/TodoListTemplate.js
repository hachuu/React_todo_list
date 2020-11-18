import React from 'react';
import Palette from '../Palette/Palette';
import './TodoListTemplate.css';

const TodoListTemplate = ({form, children, onChange}) => {

  const today = new Date();
  const year = today.getFullYear();
  const month = (1 + today.getMonth() >= 10 ? 1 + today.getMonth() : `0${1 + today.getMonth()}`);
  const day = today.getDate() >= 10 ? today.getDate() : `0${today.getDate()}`;
  const todate = `${year}/${month}/${day}`;
  const colors = [
    { id: 0, value: '#343a40'}, 
    { id: 1, value: '#f03e3e'}, 
    { id: 2, value: '#12b886'},
    { id: 3, value: '#228ae6'}
  ];

  return (
    <main className="todo-list-template">
      <div className="title">
        {todate} To do List
      </div>
      <Palette colors={colors} onChange={onChange}></Palette>
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