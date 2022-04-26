import React, {Component} from 'react';

export default class DeletableInputWithButton extends Component {
    state = {
        input: "",
        labelValue: ""
    
      };
    onInputChange = event => {
        this.setState({ input: event.target.value });
        document.getElementById("label").innerHTML = this.state.input;
    }

    delete = () =>
    {
        document.getElementById("input").value = "";
        document.getElementById("label").innerHTML = "";
    }
    
    render() {
        return (
          <div>
            <input id="input" onChange={this.onInputChange}></input>
            
            <button onClick={this.delete} >Delete</button>
            <label id="label"></label>
          </div>
        );
      }
}

