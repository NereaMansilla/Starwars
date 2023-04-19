import { Movies } from "../JSON.js"


 export function getMovies (req,res){
res.send(Movies)
} 

export async function getIdMovie (req,res){
const { id } = req.params
const movie =  Movies.filter((c)=> c.id.toString() === id.toString())

res.json(movie)
}