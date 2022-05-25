import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import figlet from 'figlet'
import dotenv from 'dotenv'
import http from 'http'
import makeCallBack from './express-callback'
import { filesController } from './controllers'

dotenv.config()
const app = express()
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

/** ENDPOINTS */

app.get('/', function (req, res) {
  res.status(200).send({
    project: 'Toolbox',
    version: 'V1'
  })
})

/** ********FILES ENDPOINTS***********/
app.get('/api/v1/files/data', makeCallBack(filesController.getFilesData))
app.get('/api/v1/files/list', makeCallBack(filesController.getFilesList))
/***************************************/

/** ********NOT FOUND********************/
app.use(function (req, res) {
  return res.status(404).send({
    code: 404,
    message: 'Endpoint Not Found'
  })
}) /***************************************/

const server = http.createServer(app)
const port = process.env.PORT || 3000

server.listen(port, () => console.log(`App running on port ${port}`))
figlet('TOOLBOX API TEST', function (err, data) {
  if (err) {
    return
  }
  console.log(data)
})
