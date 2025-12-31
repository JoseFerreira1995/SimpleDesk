import { useSortable } from "@dnd-kit/sortable";

import type { Todo } from "../types";
import { GripVertical } from "lucide-react";

import { Button } from "../../components/ui/button";
import { CSS } from "@dnd-kit/utilities";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Checkbox } from "../../components/ui/checkbox";

export default function SortableTodoCard({
  todo,
  onDelete,
  onToggle,
}: {
  todo: Todo;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: todo.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes}>
      <Card className="w-full max-w-sm bg-amber-50 ">
        <div className="flex justify-center pt-2">
          <div
            {...listeners}
            className="cursor-grab active:cursor-grabbing dark:text-black"
          >
            <GripVertical />
          </div>
        </div>

        <CardHeader>
          <CardTitle className="flex gap-2 justify-center items-center">
            {todo.todo === "" ? (
              <span className=" font-landing text-3xl ">
                {todo.isChecked ? "No I'm not" : "Am I procrastinating?"}
              </span>
            ) : (
              <span
                className="font-landing text-3xl dark:text-black"
                style={{
                  textDecoration: todo.isChecked ? "line-through" : "none",
                }}
              >
                {todo.todo}
              </span>
            )}

            <Checkbox
              className="bg-white dark:bg-amber-400"
              checked={todo.isChecked}
              onCheckedChange={() => onToggle(todo.id)}
            />
          </CardTitle>
        </CardHeader>

        <CardContent>
          <span className="font-landing text-2xl dark:text-black">
            Date: {todo.day}/{todo.month}
          </span>
        </CardContent>

        <CardFooter>
          <Button
            className="w-full bg-red-600 text-amber-50"
            onClick={() => onDelete(todo.id)}
          >
            Delete
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
