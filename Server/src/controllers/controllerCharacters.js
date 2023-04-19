import axios from 'axios'
import { Movies } from '../JSON.js'


export async function getCharacters(req,res){

const characters = await axios.get('https://akabab.github.io/starwars-api/api/all.json')
res.json(characters.data)
}


export async function getCharacterByName(req,res){
const name = req.params.name

const characters = await axios.get('https://akabab.github.io/starwars-api/api/all.json')
const character =  characters.data.filter((c)=> c.name.toUpperCase() === name.toUpperCase())
if(!character || character.length === 0 ) res.status(404)
res.json(character)

}

