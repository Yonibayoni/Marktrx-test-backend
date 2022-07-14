import { Request, Response, NextFunction } from 'express'
import axios, { Axios } from 'axios'
import AppError from '../utils/appError'

export const calcNationalProbability = async (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.params

  try {
    const { data } = await axios.get(`https://api.nationalize.io/?name=${name}`)
    const { data: gender } = await axios.get(`https://api.genderize.io/?name=${name}`)

    if(!data) new AppError('Can not find result', 404)

    res.status(200).json({
      ...data,
      ...gender
    })
  } catch (err) {
    console.log(err)
    next()
  }
  

}

