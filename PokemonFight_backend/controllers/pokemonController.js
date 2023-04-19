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
		const pokScores = await PokScores.find({}); // [filter] - not specified -> returns all documents
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
		const newPokScore = await PokScores.create({
			pok_id,
			pok_name,
			pok_score,
		});
		res.json(newPokScore);
	} catch (error) {
		console.log(error);
	}
};


const getUpdatePokScore = async (req, res) => {
	try {
		console.log('update:', req.params.id, req.params.score)
		const filter = { pok_id: req.params.id };
		const update = { pok_score: req.params.score }; 

		// console.log('update:', req.body.id, req.body.score)
		// const filter = { pok_id: req.body.id };
		// const update = { pok_score: req.body.score }; req.params.id

		const updatedPokScore = await PokScores.findOneAndUpdate(filter, update, {
			new: true
		});
	  res.json(`PokScore updated with: ${updatedPokScore}`);
	} catch (error) {
		console.log(error);
	}
};


const postUpdatePokScore = async (req, res) => {
	try {
		console.log('update:', req.body.id, req.body.score)
		const filter = { pok_id: req.body.id };
		const update = { pok_score: req.body.score }; req.params.id

		// console.log('update:', req.params.id, req.params.score)
		// const filter = { pok_id: req.params.id };
		// const update = { pok_score: req.params.score }; 

		const updatedPokScore = await PokScores.findOneAndUpdate(filter, update, {
			new: true
		});
	  res.json(`PokScore updated with: ${updatedPokScore}`);
	} catch (error) {
	  console.log(error);
	}
};



module.exports = { 
	getAllPokemons, 
	getOnePokemon, 
	getInfo, 
	getPokScores, 
	createPokScore, 
	getUpdatePokScore,
	postUpdatePokScore
 }


