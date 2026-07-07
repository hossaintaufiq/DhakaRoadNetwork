import {Router} from 'express'

import mapRouter from './map.route.js'

const router = Router()

router.use('/map', mapRouter)

export default router; 