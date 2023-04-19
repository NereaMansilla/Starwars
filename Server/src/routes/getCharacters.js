import { Router } from "express"
import { getCharacters, getCharacterByName } from "../controllers/controllerCharacters.js"
import { getMovies, getIdMovie } from "../controllers/controllerGetMovies.js" 
const route = Router()


route.get('/', getCharacters)
route.get('/movies', getMovies)
route.get('/:name', getCharacterByName)
route.get('/movies/:id', getIdMovie)

export default route