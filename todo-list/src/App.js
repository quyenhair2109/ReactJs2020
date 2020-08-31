import React, { Component } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";

class App extends Component {
  constructor() {
    super();
    this.toDoItems = [
      { title: "Mua bim bim", isComplete: true},
      { title: "Mua mỳ tôm" },
      { title: "Lau dọn nhà" },
    ];
  }

  render() {
    return (
      <div className="App">
        {this.toDoItems.length > 0 && this.toDoItems.map((item, index) => (
          <TodoItem key={index} item={item}></TodoItem>
        ))}
        {this.toDoItems.length === 0 && 'Nothing here'}
      </div>
    );
  }
}

export default App;
