import app from './app.js'
import { loadMap } from "./services/osm.service.js";

const PORT:number = 3000 

loadMap()

app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`)
})
