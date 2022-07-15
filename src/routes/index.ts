import express from 'express'
import { getItems } from '../controller/itemsController'
import { getItem } from '../controller/itemController'

const router = express.Router()

router.get('/', getItems)
router.get('/:id', getItem)

export default router