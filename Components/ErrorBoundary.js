import React , { Component } from 'react';



class ErrorBoundary extends Component {

	constructor(props) {
		super(props)
		this.state = {
			ErrorBoundary: false
		};
	};

	componentDidCatch() {
		if(true) {
			this.setState({ErrorBoundary:true});
		};
	};



	render(props) {

		if (this.state.ErrorBoundary) {
			return(
				<>
				<h1>Error Loading the program</h1>
				<h3 className="f3 white tc">Try Again later</h3>
				</>
			)
		} 

		return(props.children)
	}

}




export default ErrorBoundary;