import express from 'express'
let router = express.Router()

import contacts from './contacts'
import contact from './contact'

router.use('/api/v1', contacts)
router.use('/api/v1', contact)

export default router