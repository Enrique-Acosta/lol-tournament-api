import express from 'express'
import healthRouter from './routes/healthRouter.js'
import eventsRouter from './routes/eventsRouter.js'
const app = express()

app.use(express.json())
app.use('/api/health', healthRouter)
app.use('/api/events', eventsRouter)
export default app