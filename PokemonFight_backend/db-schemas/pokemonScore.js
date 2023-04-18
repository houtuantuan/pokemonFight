const mongoose = require('mongoose');
const Schema = mongoose.Schema; 	// const { Schema } = mongoose;

// db: pokemon.pokemon-score

const pokScoreSchema = new Schema({
	pok_id: {
    type: Number,
	 unique : true,
    required: true,
  },
  pok_name: {
    type: String,
	 unique : true,
    required: true,
    trim: true,
  },
  pok_score: {
    type: Number,
    required: true,
  },
});

// The next step is compiling our schema into a Model.

module.exports = mongoose.model('PokScores', pokScoreSchema);

