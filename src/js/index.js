import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

	render() {
		return (
			<h1>React is cool :)</h1>
		);
	}
}


const app = document.getElementById('app');
ReactDOM.render(<App/>, app);
