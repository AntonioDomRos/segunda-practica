import { useState } from 'react';

export const CardCreator = () => {
	const [newCard, setNewCard] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		localStorage.setItem('card', newCard);
		setNewCard('');
	};

	const styles = {
		width: '600px',
		justifyContent: 'center',
		padding: '20px',
		display: 'flex',
	};

	return (
		<form onSubmit={handleSubmit} className="my-2 row">
			<div className="input-group col-9" style={styles}>
				<span className="input-group-text">Text Area</span>
				<input
					className="form-control"
					type="text"
					value={newCard}
					onChange={(e) => setNewCard(e.target.value)}
					placeholder="Escribe aqui"
				/>
			</div>
			<div className="mb-3">
				<button className="btn btn-secondary md-5">Boton</button>
			</div>
		</form>
	);
};
