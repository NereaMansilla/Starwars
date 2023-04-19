import express from 'express'
import cors from 'cors'
import route from './routes/getCharacters.js'



export const app = express()
app.use(cors({
    origin: "*"
  }))
app.use(route)
