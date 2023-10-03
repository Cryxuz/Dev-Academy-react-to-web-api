import { useState, useEffect, FormEvent, ChangeEvent } from 'react'
import { useParams } from 'react-router'

import { getWidgetById, editWidget } from '../apiClient'

const initialFormData = {
  id: 0,
  name: '',
  price: 0,
  mfg: '',
  inStock: 0,
}

export default function EditWidget() {
  const [form, setForm] = useState(initialFormData)
  const { id } = useParams()

  useEffect(() => {
    async function getWidget(): Promise<void> {
      const widget = await getWidgetById(Number(id))
      setForm(widget)
    }

    try {
      getWidget()
    } catch (err: any) {
      console.error(err.message)
    }
  }, [id])

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    const newForm = { ...form, [name]: value }
    setForm(newForm)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    await editWidget(form)
    setForm(initialFormData)
  }
  return (
    <>
      <h1>Edit a widget:</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="id">id: </label>
          <input type="number" id="id" name="id" value={form.id} disabled />
        </p>
        <p>
          <label htmlFor="name">name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </p>
        <p>
          <label htmlFor="price">Price: </label>
          <input
            type="number"
            id="price"
            name="price"
            value={form.price}
            onChange={handleChange}
            required
          />
        </p>
        <p>
          <label htmlFor="mfg">mfg: </label>
          <input
            type="text"
            id="mfg"
            name="mfg"
            value={form.mfg}
            onChange={handleChange}
            required
          />
        </p>
        <p>
          <label htmlFor="inStock">in stock: </label>
          <input
            type="number"
            id="inStock"
            name="inStock"
            value={form.inStock}
            onChange={handleChange}
            required
          />
        </p>
        <button>Save Widget</button>
      </form>
    </>
  )
}
