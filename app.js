import express from 'express'
import mustacheExpress from 'mustache-express'
import path from 'path'

import { dirname } from "node:path"
import { fileURLToPath } from "node:url"

import localConfig from './config.js'
import errorHandle from './error.js'

//routes
import indexRoute from './routes/indexRoute.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()

//static file
app.use(express.static(path.join(__dirname,localConfig.path.static)))

//template
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, localConfig.path.views));

app.use('/',indexRoute)

//404 page
app.get('*',(req,res)=>{
    res.redirect('404.html')
})

//handle error
app.use(errorHandle.logErrors);
app.use(errorHandle.clientError);
app.use(errorHandle.errorHandler);


app.listen(localConfig.address.port,localConfig.address.host,()=>{
    console.log('Service is running on port',localConfig.address.port)
})

