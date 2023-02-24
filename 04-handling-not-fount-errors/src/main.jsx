import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import Root from './routes/root.jsx'

import './index.css'
/** existing import */
import ErrorPage from './error-page.jsx'
import ErrorBoundary from './useRouteError.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    // errorElement: <ErrorPage/> // 错误展示组件
    errorElement: <ErrorBoundary />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
