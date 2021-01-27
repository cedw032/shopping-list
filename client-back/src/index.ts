import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import {success} from '../../shared/contracts'
import { getStateAccess } from './stateAccess'

const state = getStateAccess()

const app = express()
const port = 9090

app.use(cors())
app.use(bodyParser.json())

// @ts-ignore
app.get('/state/:path', async (req, res) => {
  const { path } = req.params
  const retrievedState = await state.get(path)
  res.send(JSON.stringify(retrievedState))
})

// @ts-ignore
app.put('/state/:path', async (req, res) => {
  const { path } = req.params
  state.set(path, req.body)
  res.send(JSON.stringify(success))
})

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})
