import React, {Component } from "react";
import {Navbar, Nav, } from 'react-bootstrap';
import { 
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Buttons from './Buttons';
import SecondPage from "./SecondPage";
import PageOne from "./NewPage1";
import PageTwo from "./NewPage2";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class NavbarComp extends Component {
    state = {
        counter: 0
    }

    change(item)
    {
        this.setState({
            counter: item
        })

    }
 
    render () {
        return (
            <Router>
            <div>
                <Navbar>
                    <Nav className='m-auto'>
                        <Nav.Link as={Link} to={"/buttons"} >Buttons</Nav.Link>
                        <Nav.Link as={Link} to={"/secondPage"} >SecondPage</Nav.Link>
                        <Nav.Link as={Link} to={"/newPage1"} >Counter1</Nav.Link>
                        <Nav.Link as={Link} to={"/newPage2"} >Counter2</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
            <div>
                <Routes>
                    <Route exact path='/buttons' element={< Buttons />}></Route>
                    <Route exact path='/secondPage' element={< SecondPage />}></Route>
                    <Route exact path='/newPage1' element={< PageOne data={ {counter: this.state.counter, change:this.change.bind(this)}} />}></Route>
                    <Route exact path='/newPage2' element={< PageTwo data={ {counter: this.state.counter, change:this.change.bind(this)}} />}></Route>
                </Routes>
            </div>
            </Router>
        )
    }
}