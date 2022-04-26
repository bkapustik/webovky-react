import React, {Component} from 'react';

export default class PageOne extends Component {
  state = {
    counter: this.props.data.counter
}  

change = () => {
    this.props.data.change(this.state.counter+1);
    this.setState({counter: this.state.counter+1});
    document.getElementById("label").innerHTML = this.state.counter;
}

render() {
    return (
      <div>
        <button onClick={this.change} >Change counter</button>
        <label id="label">{this.state.counter}</label>
      </div>
    );
}
}