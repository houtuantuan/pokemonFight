const express=require("express")
const router=express.Router();
const {getAllPokemons,getOnePokemon,getInfo, getPokScores, getUpdatePokScore, postUpdatePokScore, } = require("../controllers/pokemonController")

router
.get("/",getAllPokemons)
.get("/scores", getPokScores)
.get("/scores/:id/:score", getUpdatePokScore)
.get("/:id",getOnePokemon)
.get("/:id/:info",getInfo)
.post("/scores", postUpdatePokScore);  // send data in body-header  

module.exports=router;