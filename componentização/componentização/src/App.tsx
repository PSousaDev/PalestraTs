import * as React from "react";
import { TodoList } from "./todolist";

interface Todo {
    text: string;
    isCompleted: boolean;
}

interface State {
    todos: Todo[];
}

export class App extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            todos: [
                { text: "Learn React", isCompleted: true },
                { text: "Learn TypeScript", isCompleted: false },
                { text: "Build an app", isCompleted: false }
            ]
        };
    }

    handleTodoClick = (index: number) => {
        const todos = [...this.state.todos];
        todos[index].isCompleted = !todos[index].isCompleted;
        this.setState({ todos });
    }

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <TodoList todos={this.state.todos} onTodoClick={this.handleTodoClick} />
            </div>
        );
    }
}
