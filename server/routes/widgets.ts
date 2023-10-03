import express from 'express'
import {
  getWidgets,
  addWidget,
  getWidgetById,
  updateWidget,
  deleteWidget,
} from '../db/db.ts'

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

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  getWidgetById(id)
    .then((widget) => {
      res.json(widget)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.post('/', async (req, res) => {
  const widget = req.body
  const addedWidget = await addWidget(widget)
  res.json(addedWidget)
})

router.patch('/', async (req, res) => {
  const widget = req.body
  const updatedWidget = await updateWidget(widget)
  res.json(updatedWidget)
})

router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  await deleteWidget(id)
  res.sendStatus(200)
})

export default router
