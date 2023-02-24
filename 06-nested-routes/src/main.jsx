import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Root from './routes/root.jsx'
import './index.css'
import ErrorPage from './error-page.jsx' // 错误页面组件
/** existing import */
import Contact from './routes/contact.jsx'
import { Children } from 'react'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage/>, // 错误展示组件
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact/>
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
