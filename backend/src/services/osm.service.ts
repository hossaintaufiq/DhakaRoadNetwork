import osmRead from 'osm-read'
import path from "path"

const nodes: any[]= []

export const loadMap= ( )=>{
    const filePath = path.resolve('data', 'bangladesh-260706.osm.pbf')
    osmRead.parse({
        filePath, 

        node: (node:any)=>{
            if(node.length<10){
                nodes.push(node)
            }
                
        }, 
        endDocument: ()=>{
            console.log(`loaded ${nodes.length} nodes`)
        }, 
        error: (err:any)=>{
            console.log(err)
        }
    })
}

export const getNodes= ()=>{
    return nodes
}