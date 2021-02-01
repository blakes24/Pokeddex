import './Pokecard.css';

const Pokecard = ({ id, name, type, base_experience }) => (
	<div className="Pokecard">
		<h3 className="Pokecard-name">{name}</h3>
		<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
		<div>
			<p>Type: {type}</p>
			<p>EXP: {base_experience}</p>
		</div>
	</div>
);

export default Pokecard;
