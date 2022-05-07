import React, { Component } from 'react';
import CardsList from '../Components/CardsList.js';
import SearchField from '../Components/SearchField.js';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';


class App extends Component {


	constructor() {
		super();
		this.state = {
			robots: [],
			SearchField: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=>this.setState({robots: users}));
	}

	collectSearchVal = (event)  => {
		this.setState({SearchField: event.target.value})
	

	}

	filteredRobots = () => {
		const newRobotsArray =  this.state.robots.filter(
				(current) => {
					return current.name.toLowerCase().includes(this.state.SearchField.toLowerCase())
				}
			)
		
		return newRobotsArray;
	};


	
	render() {

		if (this.state.robots.length === 0) {
		
			return(
					<h1 className="white f1 tc">LOADING</h1>
				)

		} else {

			return(

				<div class="tc">

					<h1 className="f1 white">RoboFriends</h1>
					<SearchField onSearchChange={this.collectSearchVal} />
					<ErrorBoundary>
						<Scroll>
							<CardsList robots={this.filteredRobots()} />
						</Scroll>
					</ErrorBoundary>
				</div>
				)
		}
	};
	};


export default App;