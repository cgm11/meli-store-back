import express from 'express'

import itemsRouter from './routes/items'

const PORT = 3000
const app = express()

app.use(express.json())

app.get('/', (_req, res) => {
    console.log('test')
    res.send('test')
})

app.use('api/items', itemsRouter)

app.listen(PORT, () => {
    console.log(`Server runnig on port ${PORT}`)
})