import express from 'express'
// import mapRouter from './routes/map.route.js'
import router from './routes/index.js'

const app = express(); 
app.use(express.json())
app.use(router) 



export default app; 