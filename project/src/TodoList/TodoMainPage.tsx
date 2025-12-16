import { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";

import { HomeIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { closestCenter, DndContext, type DragEndEvent } from "@dnd-kit/core";
import {
  arrayMove,
  rectSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import type { Todo } from "./types";
import SortableTodoCard from "./Components/SortableTodoCard";

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

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    setTodo((items) => {
      const oldIndex = items.findIndex((i) => i.id === active.id);
      const newIndex = items.findIndex((i) => i.id === over.id);
      return arrayMove(items, oldIndex, newIndex);
    });
  };

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

        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={todo.map((t) => t)}
            strategy={rectSortingStrategy}
          >
            <div className="grid grid-cols-3 m-[15%] text-center gap-2 ">
              {todo.map((todos) => (
                <SortableTodoCard
                  key={todos.id}
                  todo={todos}
                  onDelete={handleDeleteTodo}
                  onToggle={handleChangeBox}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </section>
    </>
  );
}
