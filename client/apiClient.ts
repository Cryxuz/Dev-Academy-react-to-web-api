/* eslint-disable @typescript-eslint/no-unused-vars */
import request from 'superagent'

const widgetUrl = '/api/v1/widgets/'

export async function getWidgets() {
  const dbWidgets = await request.get(widgetUrl)
  console.log(dbWidgets)
  return dbWidgets.body
}

export function addWidget(newWidget: any): Promise<any> {
  return request
    .post(widgetUrl)
    .send(newWidget)
    .then((response) => {
      console.log(response.body)
      return response.body
    })
}

export async function delWidget(id: number) {
  await request.delete(widgetUrl + id)
}

export async function updateWidget(id: number, updatedWidget: any) {
  const response = await request.patch(widgetUrl + id).send(updatedWidget)
  return response.body
}
