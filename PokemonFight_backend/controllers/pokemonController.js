let jsonData = require('../file.json')

const getAllPokemons = function (req, res, next) {
  const mappedData = jsonData
    .slice(req.query.itemOffset, req.query.endOffset)
    .map(el => {
      return { id: el.id, name: el.name.english }
    })
  res.send({
    total: jsonData.length,
    current: mappedData
  })
}

const getOnePokemon = function (req, res, next) {
  console.log('getOnePokemon', typeof jsonData)
  const pokemons = jsonData

  //const pokemon = pokemons.filter(el => el.id == req.params.id)
  const pokemon = pokemons.find(el => el.id == req.params.id)
  res.send(pokemon)
  console.log(pokemon)
}

const getInfo = function (req, res, next) {
  const pokemons = jsonData
  const infomation = req.params.info
  const pokemon = pokemons.filter(el => el.id == req.params.id)
  console.log(pokemon[0])
  res.send(pokemon[0][infomation])
}


/* ---- pokemon Scores ------------------ */

const PokScores = require('../db-schemas/pokemonScore.js');

const getPokScores = async (req, res, next) => {
	try {
		const pokScores = await PokScores.find({});
		console.log('============ pokScores', typeof pokScores)
		console.log('pokScores:', pokScores )
		res.json(pokScores);
	} catch (error) {
		next(error);
	}
}; 
 
const createPokScore = async (req, res) => {
	try {
		const { pok_id, pok_name, pok_score } = req.body;			// app.use(express.json())
		const newPokScore = await Student.create({
			pok_id,
			pok_name,
			pok_score,
		});
		res.json(newPokScore);
	} catch (error) {
	  console.log(error);
	}
 };

 const updatePokScore = async (req, res) => {
	try {
	  const updatedPokScore = await Student.updateMany(
		 {
			pok_id: '??id',
		 },
		 { $set: { pok_score: '??score' } }
	  );
	  res.json('PokScore updated with ...');
	} catch (error) {
	  console.log(error);
	}
 };


module.exports = { getAllPokemons, getOnePokemon, getInfo, getPokScores, createPokScore, updatePokScore }


