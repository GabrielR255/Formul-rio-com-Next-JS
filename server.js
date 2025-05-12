import express from 'express'
import routerpublic from './routes/public.js'
import routerprivate from './routes/private.js'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())



app.use('/', routerpublic)
app.use('/', routerprivate)

app.listen(8000, () => console.log('Servidor ligado!'))
