import React from 'react';
import './TodoForm.css';

const Form = ({
    value, 
    onChange, 
    onCreate, 
    onKeyPress
}) => {  //props 4개 받아오기
  return (
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
      <div className="create-button" onClick={onCreate}>
        추가
      </div>
    </div>
  );
};

export default Form;