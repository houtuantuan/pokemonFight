const express=require("express")
const router=express.Router();
const {getAllPokemons,getOnePokemon,getInfo, getPokScores} = require("../controllers/pokemonController")

router
.get("/",getAllPokemons)
.get("/scores", getPokScores)
.get("/:id",getOnePokemon)
.get("/:id/:info",getInfo);


module.exports=router;