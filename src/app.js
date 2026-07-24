import express from 'express'
import healthRouter from './routes/healthRouter.js'
import eventsRouter from './routes/eventsRouter.js'
import sessionRouter from './routes/sessionRouter.js'
import cookieParser from 'cookie-parser'
import { env } from './config/env.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(env.COOKIE_SECRET))

app.use('/api/health', healthRouter)
app.use('/api/events', eventsRouter)
app.use('/api/session', sessionRouter)
export default app