import { Outlet } from 'react-router-dom'
import Nav from './Nav'
function App() {
  return (
    <main>
      <Nav />
      <Outlet />
    </main>
  )
}

export default App
