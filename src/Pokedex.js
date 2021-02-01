import Pokecard from './Pokecard';
import './Pokedex.css';

const Pokedex = ({ pokeArr, isWinner }) => {
	const pokeCards = pokeArr.map((p) => (
		<Pokecard key={p.id} id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} />
	));
	return (
		<div className="Pokedex">
			<h1 className="Pokedex-title">Pokedex</h1>
			<div className="Pokedex-cards">{pokeCards}</div>
			<div className="Pokedex-win">{isWinner ? 'THIS HAND WINS!' : ''}</div>
		</div>
	);
};

export default Pokedex;
