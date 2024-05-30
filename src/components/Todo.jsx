import React from "react";

const Todo = ({ todo, removeTodo, completedTodo }) => {
  return (
    <div
      className="todo"
      style={{
        textDecoration: todo.isCompleted ? "line-through" : "",
        backgroundColor:
          todo.category === "Trabalho"
            ? "#FEE1DD"
            : "" || todo.category === "Pessoal"
            ? "#B8D8E3"
            : "" || todo.category === "Estudos"
            ? "#9DB0CE"
            : "",
      }}
    >
      <div className="content">
        <p className="text">{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div>
        <button className="complete" onClick={() => completedTodo(todo.id)}>
          <i class="fa-solid fa-check"></i>
        </button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>
          <i class="fa-solid fa-x"></i>
        </button>
      </div>
    </div>
  );
};

export default Todo;
