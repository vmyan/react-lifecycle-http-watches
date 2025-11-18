import React, { Component } from "react";

class AddClockForm extends Component {
  state = {
    name: "",
    timezone: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, timezone } = this.state;

    if (!name || timezone === "") {
      alert("Введите название и смещение");
      return;
    }

    if (isNaN(Number(timezone))) {
      alert("Смещение должно быть числом");
      return;
    }

    this.props.onAddClock(name.trim(), Number(timezone));
    this.setState({ name: "", timezone: "" });
  };

  render() {
    return (
      <form className="add-form" onSubmit={this.handleSubmit}>
        <input
          name="name"
          placeholder="Название"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          name="timezone"
          placeholder="Смещение UTC (например 3 или -5)"
          type="number"
          value={this.state.timezone}
          onChange={this.handleChange}
        />
        <button type="submit">Добавить</button>
      </form>
    );
  }
}

export default AddClockForm;
