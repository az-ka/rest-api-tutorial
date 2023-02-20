import { Router, type Request, type Response, type NextFunction } from 'express'
import { logger } from '../utils/logger'

export const JokesRouter: Router = Router()

JokesRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('Success Get Data Jokes')
  res.status(200).send({
    status: true,
    statusCode: 200,
    data: [{ pertanyaan: 'Sabun, sabun apa yang paling genit?', jawaban: 'Sabun colek dong' }]
  })
})

JokesRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('Success Add Data Jokes')
  res.status(200).send({ status: true, statusCode: 200, data: req.body })
})
