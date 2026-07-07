import osmRead from 'osm-read'
import path from 'path' 

const filepath= path.resolve('data', 'bangladesh-260706.osm.pbf')

let roadCount= 0 

osmRead.parse({
    filepath, 
    way:(way:any)=>{
        if(!way.tags?.higway) return
        roadCount++; 
        if(roadCount<= 10 ){
            console.log({
                id:way.id, 
                name:way.tags.name??"Unnamed Road", 
                highway: way.tags.highway, 
                totalNodes: way.nodeRefs.length
            })
        }

        endDocument:()=>{
            console.log(`\nTotal Roads: ${roadCount}`)
        }
        error: (err:any)=>{
            console.log(err)
        }
    }
})