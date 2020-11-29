import React, { Component } from "react";
import About from "./About";
import Home from "./Home";
import "./style.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<Router>
				<Route path="/" exact component={Home} />
				<Route path="/about" component={About} />
			</Router>
		);
	}
}

export default App;
