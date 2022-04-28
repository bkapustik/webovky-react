import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Label } from 'reactstrap';

export default class PageTwo extends Component {
    state = {
        counter: this.props.data.counter
    }  
    
    change = () => {
        this.props.data.change(this.state.counter-1);
        this.setState({counter: this.state.counter-1});
        document.getElementById("label").innerHTML = this.state.counter;
    }
    
    render() {
        return (
          <div>
            <div>
              <Button color='primary' onClick={this.change} >Change counter</Button>
            </div>
            <Label id="label">{this.state.counter}</Label>
          </div>
        );
    }
}