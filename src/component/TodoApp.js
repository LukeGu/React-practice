import React, { Component } from "react";
import Task from "./Task";

class TodoApp extends Component {
  state = {
    todoList: [],
    filterList: [],
    taskName: ""
  };

  handleTaskNameChange = e => {
    this.setState({ taskName: e.target.value });
  };

  onAddTaskHandler = () => {
    const newTask = {
      id: Math.random(),
      name: this.state.taskName,
      status: "Pending"
    };
    this.setState(prevState => {
      return {
        todoList: prevState.todoList.concat(newTask),
        filterList: prevState.filterList.concat(newTask)
      };
    });
  };

  onDeletedHandler = taskId => {
    this.setState(prevState => {
      return {
        todoList: prevState.todoList.filter(task => task.id !== taskId),
        filterList: prevState.filterList.filter(task => task.id !== taskId)
      };
    });
  };

  onChangeHandler = taskId => {
    this.state.filterList.map(task => {
      if (task.id === taskId) {
        if (task.status === "Pending") {
          task.status = "Completed";
        } else {
          task.status = "Pending";
        }
      }
      return this.state.filterList;
    });
    console.log(this.state.filterList);
  };

  onCheckHandler = checkType => {
    this.setState({ filterList: this.state.todoList });
    this.setState(prevState => {
      return {
        filterList: prevState.filterList.filter(
          task => task.status !== checkType
        )
      };
    });
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <input
              type="text"
              value={this.state.taskName}
              onChange={event => this.handleTaskNameChange(event)}
            />
            <button onClick={this.onAddTaskHandler}>Add task</button>
          </div>

          <button onClick={() => this.onCheckHandler("All")}>All</button>
          <button onClick={() => this.onCheckHandler("Pending")}>
            Completed
          </button>
          <button onClick={() => this.onCheckHandler("Completed")}>
            Pending
          </button>
        </div>
        {this.state.filterList.map(task => (
          <Task
            key={task.id}
            name={task.name}
            status={task.status}
            changeStatus={() => this.onChangeHandler(task.id)}
            deleted={() => this.onDeletedHandler(task.id)}
          />
        ))}
      </div>
    );
  }
}

export default TodoApp;
