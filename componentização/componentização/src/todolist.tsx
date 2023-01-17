import * as React from "react";
import { Todo } from "./todo";

interface Todo {
    text: string;
    isCompleted: boolean;
}

interface Props {
    todos: Todo[];
    onTodoClick: (index: number) => void;
}

export const TodoList: React.FC<Props> = ({ todos, onTodoClick }) => {
    return (
        <ul>
            {todos.map((todo, index) => (
                <Todo
                    key={index}
                    text={todo.text}
                    isCompleted={todo.isCompleted}
                    onClick={() => onTodoClick(index)}
                />
            ))}
        </ul>
    );
};
