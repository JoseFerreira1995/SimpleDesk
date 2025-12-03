import { useState } from "react";
import "./TodoMainPage.css";

type Todo = {
  todo: string;
};

export default function TodoMainPage() {
  const [text, setText] = useState<string>(" ");
  const [todo, setTodo] = useState<Todo[]>([{ todo: "" }]);

  //Todo: 

  // Add checkbox to todos

  // Remove todos when click on checkbox 

  const handleClick = () => {
    todo.push({ todo: text });
    setText("");
  };

  return (
    <>
      <header>
        <div className="flex justify-center mt-[10%]">
          <h1 className="text-4xl font-landing">Todo List</h1>
        </div>
      </header>
      <section>
        <div className="flex flex-col mt-[10%] ">
          <h2>Add Todo</h2>
          <input
            className="bg-amber-200"
            value={text}
            onChange={(event) => setText(event.target.value)}
          ></input>
          <button
            className="border-b-orange-950 border-s-2"
            onClick={() => handleClick()}
          >
            Add
          </button>
        </div>
        <div className="border border-b-amber-900 m-[20%] text-center ">
          <ul>
            {todo.map((todos) => (
              <li>{todos.todo}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
