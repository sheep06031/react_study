/**@jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./styles";
import { IoTrash } from "react-icons/io5";

function Main({ todoList, setTodoList }) {
  const [inputValue, setInputValue] = useState("");

  const inputOnChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const deleteOnClickHanlder = (todoId) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== todoId))
  }

  const checkBoxOnChangeHandler = (e) => {
    const todoId = parseInt(e.target.value);

    setTodoList((prev) => prev.map((todo) => {
      if(todo.id === todoId) {
        return {
          ...todo,
          isComplete: !todo.isComplete,
        }
      }
      return todo;
    }))

  }



  const onKeyDownHandler = (e) => {
    if (e.keyCode !== 13) {
      return;
    }
    if (inputValue.trim().length === 0) {
      return;
    }

    setTodoList((prev) => {
      const lastId = prev.length === 0 ? 0 : prev[prev.length - 1].id;
      const newTodo = {
        id: lastId + 1,
        isComplete: false,
        content: inputValue,
      };
      return [...prev, newTodo];
    });
    setInputValue("");
  };




  return (
    <div css={s.container}>
      <div css={s.listContainer}>
        <ul>
          {todoList.map((todo) => (
            <li key={todo.id}>
              <input type="checkbox" id={`todo${todo.id}`} value={todo.id} checked={todo.isComplete} onChange={checkBoxOnChangeHandler}/>
              <label htmlFor={`todo${todo.id}`}></label>
              <label htmlFor={`todo${todo.id}`}>{todo.content}</label>
              <div css={s.hiddenTrashBox}>
                <div css={s.trashBox} onClick={() => deleteOnClickHanlder(todo.id)}>
                  <IoTrash />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div css={s.todoInputContainer}>
        <input
          type="text"
          value={inputValue}
          placeholder="할 일을 입력하세요"
          onChange={inputOnChangeHandler}
          onKeyDown={onKeyDownHandler}
        />
      </div>
    </div>
  );
}

export default Main;
