import {Router} from 'express'
import { getAllNodes } from '../controllers/map.controller.js'

const router= Router()

router.get('/nodes', getAllNodes)
export default router; 