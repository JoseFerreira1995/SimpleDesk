import { useState } from "react";
import { Input } from "../components/ui/input";
import { Checkbox } from "../components/ui/checkbox";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import "./TodoMainPage.css";
import { HomeIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Todo = {
  id: number;
  todo: string;
  isChecked: boolean;
  day: number;
  month: number;
};

let nextId: number = 0;

export default function TodoMainPage() {
  const navigate = useNavigate();
  const [text, setText] = useState<string>("");
  const [todo, setTodo] = useState<Todo[]>([]);

  const handleClick = () => {
    const time = new Date();
    const day = time.getDate();
    const month = time.getMonth();
    setTodo([
      ...todo,
      { id: nextId++, todo: text, isChecked: false, day: day, month: month },
    ]);
    setText("");
  };

  const handleDeleteTodo = (itemsId: number) => {
    const deleteTodo = todo.filter((obj) => obj.id !== itemsId);
    setTodo(deleteTodo);
  };

  const handleChangeBox = (item: number) => {
    const change = todo.map((element) =>
      element.id === item
        ? { ...element, isChecked: !element.isChecked }
        : element
    );
    setTodo(change);
  };

  const inputTodo = todo.map((todos) => (
    <Card className="w-full max-w-sm bg-amber-50">
      <CardHeader>
        <CardTitle className="flex gap-2 justify-center items-center">
          {todos.todo === "" ? (
            <span className="font-landing text-3xl text-red-300">
              {todos.isChecked ? "No I'm not" : "Am I procrastinating?"}
            </span>
          ) : (
            <span
              className="font-landing text-3xl"
              style={{
                textDecoration: todos.isChecked ? "line-through" : "none",
              }}
            >
              {todos.todo}
            </span>
          )}
          <Checkbox
            className="bg-white"
            checked={todos.isChecked}
            onClick={() => handleChangeBox(todos.id)}
          ></Checkbox>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <span className="font-landing text-2xl">
          Date: {todos.day}/{todos.month}
        </span>
      </CardContent>

      <CardFooter className="flex-col gap-2">
        <Button
          className="w-full bg-red-600 text-amber-50 font-landing text-2xl hover:bg-red-400"
          onClick={() => handleDeleteTodo(todos.id)}
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  ));

  return (
    <>
      <header>
        <HomeIcon className="m-[3%]" onClick={() => navigate("/")}></HomeIcon>
        <div className="flex justify-center mt-[5%]">
          <h1 className="text-5xl font-landing font-bold">Todo List</h1>
        </div>
      </header>
      <section>
        <div className="flex justify-center mt-[10%] ml-[36%] max-w-sm items-center gap-2 ">
          <Label className="font-landing text-2xl">Add Todo</Label>
          <Input
            className=" text-center bg-amber-50 "
            value={text}
            onChange={(event) => setText(event.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleClick();
              }
            }}
          ></Input>
          <Button
            className="font-landing font-bold "
            onClick={() => handleClick()}
          >
            Add
          </Button>
        </div>

        <div className="grid grid-cols-3 m-[15%] text-center gap-2 ">
          {inputTodo}
        </div>
      </section>
    </>
  );
}
