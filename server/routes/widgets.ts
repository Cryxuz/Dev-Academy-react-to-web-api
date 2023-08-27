import express from 'express'
import { addWidgets, getWidgets, updateWidget } from '../db/db.ts'
import * as db from '../db/db.ts'
const router = express.Router()

router.get('/', (req, res) => {
  getWidgets()
    .then((widgets) => {
      res.json(widgets)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.post('/', async (req, res) => {
  const newWidget = req.body
  await addWidgets(newWidget)
  res.json(newWidget)
})

router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  const result = await db.delWidget(id)
  console.log(result)
  res.json(result)
})

router.patch('/:id', async (req, res) => {
  const id = Number(req.params.id)
  const updatedWidget = req.body

  const result = await updateWidget(id, updatedWidget)
  res.json(result)
})
export default router
