import express from 'express'
import cors from 'cors'
import { createRouter } from './routes'
import ServerConfig, { ServerConfigParams } from './config'

const createRequestLoggingMiddleware = (cfg: ServerConfig): express.RequestHandler => {
  return (req, res, next) => {
    cfg.logger.info(`${req.method} ${req.url}`)
    next()
  }
}

export async function initApp(config: ServerConfigParams = {}): Promise<{ app: express.Application, cfg: ServerConfig }> {
	const cfg = new ServerConfig(config)
	const app = express()
	app.use(cors({ origin: '*' }))
	app.use(createRequestLoggingMiddleware(cfg))
	app.use('/api', await createRouter(cfg))

	return { app, cfg }
}
