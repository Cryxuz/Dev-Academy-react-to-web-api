/* eslint-disable @typescript-eslint/no-unused-vars */
import request from 'superagent'
import { Widget, NewWidget } from '../models/Widget'
const widgetUrl = '/api/v1/widgets/'

export async function getWidgets(): Promise<Widget[]> {
  const dbWidgets = await request.get(widgetUrl)
  return dbWidgets.body
}

export async function getWidgetById(id: number): Promise<Widget> {
  const dbWidget = await request.get(widgetUrl + id)
  return dbWidget.body
}

export async function addWidget(widget: NewWidget): Promise<Widget[]> {
  const addedWidget = await request.post(widgetUrl).send(widget)
  return addedWidget.body
}

export async function editWidget(widget: Widget): Promise<Widget[]> {
  const editedWidget = await request.patch(widgetUrl).send(widget)
  return editedWidget.body
}

export async function deleteWidget(id: number): Promise<void> {
  console.log(widgetUrl + id)
  await request.delete(widgetUrl + id)
}
