import Pokedex from './Pokedex';
import { choice, remove } from './helpers';

const Pokegame = ({
	pokeCards = [
		{ id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
		{ id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
		{ id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
		{ id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
		{ id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
		{ id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
		{ id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
		{ id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
	]
}) => {
	const hand1 = [];
	const hand2 = [];
	while (pokeCards.length > 0) {
		let c1 = choice(pokeCards);
		hand1.push(c1);
		remove(pokeCards, c1);
		let c2 = choice(pokeCards);
		hand2.push(c2);
		remove(pokeCards, c2);
    }
    let score1 = hand1.reduce(((acc, hand1) => acc + hand1.base_experience),0)
    let score2 = hand2.reduce(((acc, hand2) => acc + hand2.base_experience),0)

    return (
     <>
        <Pokedex pokeArr={hand1} isWinner={score1 > score2 ? true : false} />
        <Pokedex pokeArr={hand2} isWinner={score2 > score1 ? true : false}/>
     </>
 )
};
 

 export default Pokegame