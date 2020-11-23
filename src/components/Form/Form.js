import React, { useEffect } from 'react';
import './Form.css';

const Form = ({value, color, onChange, onCreate, onKeyPress}) => {

  useEffect(() => {
    console.log('value 값이 설정됨');
    console.log(value);
    console.log(color);
    return () => {
      console.log('value 가 바뀌기 전..');
      console.log(value);
      console.log(color);
    };
  });
  // 리액트 컴포넌트는 기본적으로 부모 컴포넌트가 리렌더링되면 바뀐사항이 없더라도 자식 컴포넌트 또한 리렌더링이 된다.
  
  return (
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress} style={{color}}/>
      <div className="create-button" onClick={onCreate}>
        추가
      </div>
    </div>
  );
};

export default Form;