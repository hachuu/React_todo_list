import React from 'react';
import './Form.css';

const Form = ({value, color, onChange, onCreate, onKeyPress}) => {
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