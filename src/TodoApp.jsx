import React from "react";
import TodoList from "./TodoList";

class TodoApp extends React.Component {
    constructor() {
        super();
        this.state = { text: "", items: [] };
    }
    
    render() {
        return (
            <div>
                <h2>TODO</h2>
                <form>
                    <label htmlFor="newTodo">What needs to be done?</label>
                    <br />
                    <input type="text" />
                    <button>Add #!</button>
                </form>
                <TodoList items={this.state.items} />
            </div>
        )
    }
}

export default TodoApp;