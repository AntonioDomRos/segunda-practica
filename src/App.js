import { useEffect, useState } from 'react';
import './App.css';
import { CardCreator } from './components/CardCreator';

function App() {
	const [cardsItems, setCardsItems] = useState('');

	useEffect(() => {
		const card = localStorage.getItem('card');
		if (card) {
			setCardsItems(JSON.parse(card));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('card', JSON.stringify(cardsItems));
	}, [cardsItems]);

	return (
		<div className="App">
			<h2>Hola programador</h2>
			<CardCreator />
		</div>
	);
}

export default App;
