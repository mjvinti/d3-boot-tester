import React, { Component } from 'react';

import SvgIntro from './components/SvgIntro/SvgIntro';
import BarIntro from './components/BarIntro/BarIntro';
import BarChart from './components/BarChart/BarChart';
import data from './data/test';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<BarChart data={data} />
			</div>
		);
	}
}

export default App;
