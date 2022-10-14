import React from 'react';
import './App.css';
import './rigth.css';
import Rigth from './components/Rigth';
import Left from './components/Left';

function App() {
	return (
		<div className="container">
			<Left />
			<Rigth />
		</div>
	);
}

export default App;
