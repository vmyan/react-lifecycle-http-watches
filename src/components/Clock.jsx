import React, { Component } from "react";

class Clock extends Component {
  state = { now: new Date() };

  componentDidMount() {
    this.timer = setInterval(() => this.setState({ now: new Date() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  getLocalTime = () => {
    const { now } = this.state;
    const { timezone } = this.props; // смещение от UTC в часах

    const hoursUTC = now.getUTCHours();
    const minutesUTC = now.getUTCMinutes();
    const secondsUTC = now.getUTCSeconds();

    let hours = (hoursUTC + timezone) % 24;
    if (hours < 0) hours += 24;

    return { hours, minutes: minutesUTC, seconds: secondsUTC };
  };

  render() {
    const { name, id, onRemove } = this.props;
    const { hours, minutes, seconds } = this.getLocalTime();

    const hh = String(hours).padStart(2, "0");
    const mm = String(minutes).padStart(2, "0");
    const ss = String(seconds).padStart(2, "0");

    return (
      <div className="clock">
        <div className="clock-header">
          <h3>{name}</h3>
          <button className="remove-btn" onClick={() => onRemove(id)}>×</button>
        </div>
        <div className="time">
          {hh}:{mm}:{ss}
        </div>
      </div>
    );
  }
}

export default Clock;
