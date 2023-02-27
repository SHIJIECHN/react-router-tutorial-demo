import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import './index.css'
import ErrorPage from './error-page.jsx' // 错误页面组件
import Root, {
  loader as rootLoader,
  action as rootAction
} from './routes/root.jsx'
/** existing import */
import Contact, {
  loader as contactLoader
} from './routes/contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />, // 错误展示组件
    loader: rootLoader, // <Root>组件的loader
    action: rootAction, // <Root>组件的action
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />,
        loader: contactLoader
      }
    ]
  },
]);
/** existing import */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
