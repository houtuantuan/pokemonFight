const express=require("express")
const router=express.Router();
const {getAllPokemons,getOnePokemon,getInfo, getPokScores, updatePokScore} = require("../controllers/pokemonController")

router
.get("/",getAllPokemons)
.get("/scores", getPokScores)
.get("/scores/:id/:score", updatePokScore)
.get("/:id",getOnePokemon)
.get("/:id/:info",getInfo);


module.exports=router;