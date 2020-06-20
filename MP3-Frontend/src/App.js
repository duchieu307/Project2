import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Header from "./components/Header"
import Home from "./containers/Home"
import SignUp from "./containers/SignUp"
import Login from "./containers/Login"

export default class App extends Component {
    render() {
        return (
            <div>
                <Container>

                    <Router>
                        <Header />
                        <Route exact path="/" component={Home} />
                        <Route path="/signup" component={SignUp} />
                        <Route path="/login" component={Login} />
                    </Router>
                </Container>
            </div>
        )
    }
}