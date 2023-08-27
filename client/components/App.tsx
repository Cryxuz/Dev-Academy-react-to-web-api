import { useState, useEffect } from 'react'
import * as Models from '../../models/Widget'
import { getWidgets, delWidget as deleteWidget } from '../apiClient'
import { AddWidget } from './AddWidget'

function App() {
  const [widgets, setWidgets] = useState([] as Models.Widget[])

  useEffect(() => {
    try {
      const fetchWidgets = async () => {
        const fetchedWidgets = await getWidgets()
        setWidgets(fetchedWidgets)
      }

      fetchWidgets()
    } catch (err) {
      console.log(err)
    }
  }, [])

  const handleDelete = async (id: number) => {
    try {
      await deleteWidget(id)
      // this is updating the widget list after you delete something/.
      const updatedWidgets = widgets.filter((widget) => widget.id !== id)
      setWidgets(updatedWidgets)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      {widgets.map((widget: Models.Widget) => (
        <div key={widget.id}>
          <h2>name: {widget.name}</h2>
          <p>price: ${widget.price}</p>
          <p>mfg: {widget.mfg}</p>
          <p>instock: {widget.inStock}</p>
          <button onClick={() => handleDelete(widget.id)}>Delete</button>
        </div>
      ))}
      <h1>Widgets for the win!</h1>
      <AddWidget setWidgets={setWidgets} />
    </div>
  )
}

export default App
