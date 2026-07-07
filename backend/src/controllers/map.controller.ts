import type {Request , Response} from 'express'
import { getNodes } from '../services/osm.service.js'

export const getAllNodes= (req:Request, res:Response)=>{
    res.json({
        success:true, 
        count: getNodes().length, 
        data: getNodes()
    })
}