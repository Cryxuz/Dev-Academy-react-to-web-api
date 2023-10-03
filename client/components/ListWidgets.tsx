import { useState, useEffect, FormEvent, MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { Widget } from '../../models/Widget'
import { getWidgets, addWidget, deleteWidget } from '../apiClient'

const initialWidgets = [] as Widget[]

export default function ListWidgets() {
  const [widgets, setWidgets] = useState(initialWidgets)

  useEffect(() => {
    async function fetchWidgets() {
      try {
        const dbWidgets = await getWidgets()
        setWidgets(dbWidgets)
      } catch (error) {
        console.error(error)
      }
    }

    fetchWidgets()
  }, []) // No need to include handleDelete in the dependency array

  async function handleDelete(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault() // Prevent the default form submission behavior
    const id = Number(event.currentTarget.name)
    await deleteWidget(id)
    // Update the widgets state to reflect the deletion
    setWidgets(widgets.filter((widget) => widget.id !== id))
  }

  return (
    <>
      <h1>Widgets for the win!</h1>
      <ul>
        {widgets.map((widget: Widget) => {
          return (
            <li key={widget.id}>
              <h2>Name: {widget.name}</h2>
              <p>
                <span>Price:</span> ${widget.price} <span>MFG:</span>{' '}
                {widget.mfg} <span>In Stock:</span> {widget.inStock}
              </p>
              <button name={String(widget.id)} onClick={handleDelete}>
                Delete
              </button>
              <Link type="button" to={`/editwidget/${widget.id}`}>
                Edit
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
