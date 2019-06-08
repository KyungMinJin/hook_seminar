import React, { useState, useRef, useCallback } from "react";
import "./App.css";
import TodoListTemplate from "./components/TodoListTemplate";
import TodoForm from "./components/TodoForm";
import TodoItemList from "./components/TodoItemList";

const App = () => {
  const id = useRef(3);
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([
    { id: 0, text: " 리액트 소개", checked: false },
    { id: 1, text: " 리액트 sdddd", checked: true },
    { id: 2, text: " sddd 소개", checked: false }
  ]);

  const handleChange = useCallback(e => {
    setInput(e.target.value);
  }, []);

  const handleCreate = useCallback(() => {
    setTodos(todos =>
      todos.concat({
        id: id.current++,
        text: input,
        checked: false
      })
    );
    setInput("");
  }, [input]);

  const handleKeyPress = useCallback(
    e => {
      // 눌려진 키가 Enter 면 handleCreate 호출
      if (e.key === "Enter") {
        handleCreate();
      }
    },
    [handleCreate]
  );

  const handleToggle = useCallback(id => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }, []);
  const handleRemove = useCallback(id => {
    const { todos } = this.state;
    setTodos({
      todos: todos.filter(todo => todo.id !== id)
    });
  }, []);

  return (
    <TodoListTemplate
      form={
        <TodoForm
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      }
    >
      <TodoItemList
        todos={todos}
        onToggle={handleToggle}
        onRemove={handleRemove}
      />
    </TodoListTemplate>
  );
};

export default App;
