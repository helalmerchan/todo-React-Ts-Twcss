import { Todo } from "../types/todo";
import Todoitem from "./Todoitem";

interface TodoListProps {
    todos: Todo[];
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}

export default function TodoList({
    todos,
    onCompletedChange,
    onDelete
}: TodoListProps) {
    const todosSorted = todos.sort((a, b) => {
        if (a.completed === b.completed) {
            return b.id - a.id;
        }
        return a.completed ? 1 : -1;
    });

    return (
        <>
            <div className="space-y-2">
                {todosSorted.map((todo) => (
                    <Todoitem
                        key={todo.id}
                        todo={todo}
                        onCompletedChange={onCompletedChange}
                        onDelete={onDelete} />
                ))}
            </div>
            {todos.length === 0 && (
                <p className="text-center text-sm to-gray-500">
                    No todo list yet!
                </p>
            )}
        </>
    )
}
