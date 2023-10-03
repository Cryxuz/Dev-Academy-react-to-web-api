import connection from './connection.ts'

import { NewWidget, Widget } from '../../models/Widget.ts'

const db = connection

export function getWidgets(): Promise<Widget[]> {
  return db<Widget>('widgets').select()
}

export function getWidgetById(id: number): Promise<Widget> {
  return db<Widget>('widgets').select().where('id', id).first()
}

export function addWidget(widget: NewWidget): Promise<Widget[]> {
  return db('widgets')
    .insert({ ...widget })
    .returning(['id', 'name', 'price', 'mfg', 'inStock'])
}

export function updateWidget(widget: Widget): Promise<Widget[]> {
  return db('widgets')
    .returning(['id', 'name', 'price', 'mfg', 'inStock'])
    .update({ ...widget })
    .where('id', widget.id)
}

export function deleteWidget(id: number): Promise<void> {
  return db('widgets').delete().where('id', id)
}
