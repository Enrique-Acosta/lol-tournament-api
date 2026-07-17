import express from 'express'
import healthRouter from './routes/healthRouter.js'
import eventsRouter from './routes/eventsRouter.js'
import sessionRouter from './routes/sessionRouter.js'
const app = express()

app.use(express.json())
app.use('/api/health', healthRouter)
app.use('/api/events', eventsRouter)
app.use('/api/session', sessionRouter)
export default app