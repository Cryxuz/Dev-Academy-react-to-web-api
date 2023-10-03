import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <h2>Widgets</h2>
      <ul>
        <li key="widgetlist">
          <Link to="/widgetlist">View Widget List</Link>
        </li>
        <li key="addwidget">
          <Link to="/addwidget">Add Widget</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav
