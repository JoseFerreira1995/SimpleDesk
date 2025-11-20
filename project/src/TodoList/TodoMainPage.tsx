import { useState } from "react";
import "./TodoMainPage.css";

export default function TodoMainPage() {
  const [text, setText] = useState<string>(" ");

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
            onClick={() => setText("")}
          >
            Add
          </button>
        </div>
      </section>
    </>
  );
}
