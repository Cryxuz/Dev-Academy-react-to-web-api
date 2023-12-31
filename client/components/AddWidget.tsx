import { useState, FormEvent, ChangeEvent } from 'react'
import { addWidget } from '../apiClient'

const initialFormData = {
  name: '',
  price: 0,
  mfg: '',
  inStock: 0,
}

export default function AddWidget() {
  const [form, setForm] = useState(initialFormData)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    const newForm = { ...form, [name]: value }
    setForm(newForm)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const addedWidget = await addWidget(form)
    setForm(initialFormData)
  }
  return (
    <>
      <h1>Add a new widget:</h1>
      <form onSubmit={handleSubmit}>
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
        <button>Add Widget</button>
      </form>
    </>
  )
}
