import { FormEvent, useState } from 'react'
import { addWidget, getWidgets } from '../apiClient'
import { NewWidget, Widget } from '../../models/Widget'

const placeHolderForm: NewWidget = {
  name: '',
  price: 0,
  mfg: '',
  inStock: 0,
}
interface Props {
  setWidgets: (value: React.SetStateAction<Widget[]>) => void
}

export function AddWidget(props: Props) {
  const [form, setForm] = useState(placeHolderForm)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    await addWidget(form)

    setForm(placeHolderForm)
    const widgets = await getWidgets()
    props.setWidgets(widgets)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div>
      <h1>Add new widget</h1>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <p>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </p>
        <p>
          <label htmlFor="price">Price:</label>
          <input type="text" name="price" id="price" />
        </p>
        <p>
          <label htmlFor="mfg">mfg:</label>
          <input type="text" name="mfg" id="mfg" />
        </p>
        <p>
          <label htmlFor="inStock">inStock Qty:</label>
          <input type="text" name="inStock" id="inStock" />
        </p>
        <button onClick={handleSubmit}>Create</button>
      </form>
    </div>
  )
}
