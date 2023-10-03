import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import { useParams } from 'react-router-dom'

import App from './components/App'
import Home from './components/home'
import ListWidgets from './components/ListWidgets'
import AddWidget from './components/AddWidget'
import EditWidget from './components/updateWidget'

// export const router = createBrowserRouter(
//   createRoutesFromElements(<Route path="/" element={<App />}>
//     <Route index element{<Home />} />
//   </Route>)
// )

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="/widgetlist" element={<ListWidgets />} />
    <Route path="/addwidget" element={<AddWidget />} />
    <Route path="/editwidget/:id" element={<EditWidget />} />
  </Route>
)

const router = createBrowserRouter(routes)

export default router
