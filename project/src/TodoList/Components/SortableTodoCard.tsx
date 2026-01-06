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
      <Card className=" w-full bg-amber-50 border border-amber-200 rounded-xl shadow-sm hover:shadow-md transition hover:scale-99 ">
        <div className="flex justify-end px-3 pt-2">
          <div
            {...listeners}
            className="cursor-grab text-amber-500 opacity-60 hover:opacity-100"
          >
            <GripVertical />
          </div>
        </div>

        <CardHeader className="pb-2">
          <div className="flex items-start gap-3">
            <Checkbox
              className="bg-white dark:bg-amber-400 mt-1"
              checked={todo.isChecked}
              onCheckedChange={() => onToggle(todo.id)}
            />
            <CardTitle
              className={`font-landing text-3xl leading-snug ${
                todo.isChecked ? "line-through opacity-50" : ""
              }`}
            >
              {todo.todo || (
                <span className="italic opacity-70">
                  {todo.isChecked ? "No I'm not" : "Am I procrastinating?"}
                </span>
              )}
            </CardTitle>
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          <span className="text-sm text-amber-700 opacity-70">
            Date: {todo.day}/{todo.month}
          </span>
        </CardContent>

        <CardFooter className="pt-2">
          <Button
            className="text-red-600 hover:bg-red-50 ml-auto"
            onClick={() => onDelete(todo.id)}
          >
            Delete
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
