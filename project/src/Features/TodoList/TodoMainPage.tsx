import { useState } from "react";

import { closestCenter, DndContext, type DragEndEvent } from "@dnd-kit/core";
import {
  arrayMove,
  rectSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import type { Todo } from "./types";
import SortableTodoCard from "./Components/SortableTodoCard";
import Header from "../../components/Header";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

let nextId: number = 0;

export default function TodoMainPage() {
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
      <Header title={"Todo-list"} textColor="#ca8a04"></Header>
      <section className="min-h-screen flex justify-center py-20">
        <div className=" w-full max-w-xl">
          <div className="mb-8 rounded-2xl bg-white border shadow-sm p-4 flex items-center gap-3">
            <Input
              className="flex-1 bg-transparent border-none focus-visible:ring-0 text-black"
              placeholder="What needs to be done?"
              value={text}
              onChange={(event) => setText(event.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleClick();
                }
              }}
            ></Input>
            <Button
              className="bg-amber-600 hover:bg-amber-700 font-bold"
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
              <div className="space-y-3 ">
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
        </div>
      </section>
    </>
  );
}
