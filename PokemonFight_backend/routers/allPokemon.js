const express=require("express")
const router=express.Router();
const {getAllPokemons,getOnePokemon,getInfo}=require("../controllers/pokemonController")

router
.get("/",getAllPokemons)
.get("/:id",getOnePokemon)
.get("/:id/:info",getInfo);


module.exports=router;