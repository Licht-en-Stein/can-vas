import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    isDrawing: false,
    lastX: 0,
    lastY: 0,
    hue: 0,
    direction: true
  };

  draw = (e) => {
    console.log(e);

    /* if (!this.state.isDrawing) return;
    ctx.strokeStyle = `hsl(${this.state.hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(this.state.lastX, this.state.lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [this.state.lastX, this.state.lastY] = [e.offsetX, e.offsetY];
    this.state.hue++;

    if (this.state.hue >= 360) {
      this.setState({
        hue: 0
      })
    }

    if (ctx.lineWidth >= 10 || ctx.lineWidth <= 1) {
      this.setState(prevState => {
        return { direction: !prevState.direction };
        // [lastX, lastY] = [e.offsetX, e.offsetY];
      });
    }

    if (this.state.direction) {
      ctx.lineWidth++;
    } else {
      ctx.lineWidth--;
    } */
  };

  mousedown = e => {
    this.setState(prevState => {
      return {isDrawing: !prevState.isDrawing};
      // [lastX, lastY] = [e.offsetX, e.offsetY];
    });
  };

  mousemove = e => {
    this.draw();
  };

  mouseup = e => {
    this.setState({
      isDrawing: false
    });
  };

  mouseout = e => {
    this.setState({
      isDrawing: false
    });
  };

  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.strokeStyle = '#800080';
    ctx.lineJoin = 'round';
    // ctx.lineCap = 'round';
    ctx.lineWidth = 1;
    ctx.globalCompositeOperation = 'overlay';
  }

  render() {
    return (
      <div className="App">
        <canvas
          ref="canvas"
          width="800"
          height="800"
          onPointerDown={this.mousedown}
          onPointerMove={this.mousemove}
          onPointerUp={() => this.mouseup}
          onPointerOut={() => this.mousout}
        />
      </div>
    );
  }
}

export default App;
