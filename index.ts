import express, { Express, Request, Response, NextFunction } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import probabilityRouter from './routes/personRouter'

dotenv.config()

const app: Express = express()
const { PORT } = process.env

app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('OK')
})

app.use('/probability', probabilityRouter)

app.listen(5000, () => {
  console.log(`Server running on port ${PORT || 5000}`)
})
