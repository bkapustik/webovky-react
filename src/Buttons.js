import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Label, Input, InputGroup } from 'reactstrap';

export default class DeletableInputWithButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: "",
  
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.delete = this.delete.bind(this);
  }
    
    onInputChange(event) {
        this.setState({ input: event.target.value });
    }

    delete = () =>
    {
        document.getElementById("input").value = "";
        document.getElementById("label").innerHTML = "";
    }
    
    render() {
        return (
            <div class="row">
              <InputGroup class="justify-content-center">
                <Input id="input" onChange={this.onInputChange}></Input>
                
                <Button color="dark" onClick={this.delete} >Delete</Button>
              </InputGroup>
              <Label id="label">{this.state.input}</Label>
            </div>
        );
      }
}

