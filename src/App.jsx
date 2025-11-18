import React, { Component } from "react";
import AddClockForm from "./components/AddClockForm";
import Clock from "./components/Clock";

class App extends Component {
  state = {
    clocks: [],
  };

  handleAddClock = (name, timezone) => {
    this.setState((prev) => ({
      clocks: [
        ...prev.clocks,
        {
          id: Date.now(),
          name,
          timezone: Number(timezone),
        },
      ],
    }));
  };

  handleRemoveClock = (id) => {
    this.setState((prev) => ({
      clocks: prev.clocks.filter((clock) => clock.id !== id),
    }));
  };

  render() {
    return (
      <div className="app">
        <h1>Мировые часы</h1>

        <AddClockForm onAddClock={this.handleAddClock} />

        <div className="clocks-container">
          {this.state.clocks.map((clock) => (
            <Clock
              key={clock.id}
              id={clock.id}
              name={clock.name}
              timezone={clock.timezone}
              onRemove={this.handleRemoveClock}
            />
          ))}

          {this.state.clocks.length === 0 && (
            <p>Добавьте часы, используя форму выше.</p>
          )}
        </div>
      </div>
    );
  }
}

export default App;
