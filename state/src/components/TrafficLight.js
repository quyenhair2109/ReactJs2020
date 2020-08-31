import React, { Component } from "react";
import './TrafficLight.css';
import classNames from 'classnames';

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class TrafficLight extends Component {
  constructor() {
    super();
    this.currentColor = RED;

    setInterval(()=>{
        this.currentColor = this.getNextColor(this.currentColor);
    }, 1000)
  }

  getNextColor(color) {
    switch (color) {
      case RED:
        return ORANGE;
      case ORANGE:
        return GREEN;
      default:
        return RED;
    }
  }

  render() {
    return <div className="TrafficLight">
        <div className={classNames=('buld', 'red', {
            active: this.currentColor === RED
        })}/>
        <div className={classNames=('buld', 'orange', {
            active: this.currentColor === ORANGE
        })}/>
        <div className={classNames=('buld', 'green', {
            active: this.currentColor === GREEN
        })}/>
    </div>;
  }
}

export default TrafficLight;
