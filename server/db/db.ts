import connection from './connection.ts'

import { NewWidget, Widget } from '../../models/Widget.ts'
const db = connection

// setting the type for getWidgets function
export function getWidgets(): Promise<Widget[]> {
  return db<Widget>('widgets').select()
}

// add
export function addWidgets(newWidget: any) {
  return db<NewWidget>('widgets').insert({ ...newWidget })
}

//delete
export function delWidget(id: number) {
  return db<Widget>('widgets').where('id', id).delete()
}

// edit
export async function updateWidget(id: number, widgetPatch: object) {
  return await db('widgets').where('id', id).update(widgetPatch).returning()
}
