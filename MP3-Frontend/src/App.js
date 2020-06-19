import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Header from "./components/Header"
import Home from "./containers/Home"
import SignUp from "./containers/SignUp"

export default class App extends Component {
    render() {
        return (
            <div>
                <Container>

                    <Router>
                        <Header />
                        <Route exact path="/" component={Home} />
                        <Route path="/signup" component={SignUp} />
                    </Router>
                </Container>
            </div>
        )
    }
}