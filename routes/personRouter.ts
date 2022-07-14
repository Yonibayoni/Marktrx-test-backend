import express from 'express'
import { calcNationalProbability } from '../controllers/personController'

const router = express.Router()

router.get('/country/:name', calcNationalProbability)

export default router