import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Blog from './Pages/Blog.jsx'
import About from './Pages/About.jsx'
import BloggingContextProvider from './Context/BloggingContext/BloggingContextProvider.jsx'
import CreateBlog from './Component/CreateBlog.jsx'
import UpdateBlog from './Component/UpdateBlog.jsx'
import ProtectedRoute from './Component/ProtectedRoute.jsx'
import Login from './Pages/Login.jsx'
import LoggedInProtectedRoute from './Component/LoggedInProtectedRoute.jsx'
import BlogDetails from './Component/BlogDetails.jsx'

const route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: '/login',
        element: (
          <LoggedInProtectedRoute>
            <Login />
          </LoggedInProtectedRoute>
        ),
      },
      {
        path: 'blog',
        element: (
          <ProtectedRoute>
            <Blog />
          </ProtectedRoute>
        ),
      },
      {
        path: 'blogDetails/:blogId',
        element: (
          <ProtectedRoute>
            <BlogDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: 'about',
        element: (
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        ),
      },
      {
        path: 'create-blog',
        element: (
          <ProtectedRoute>
            <CreateBlog />
          </ProtectedRoute>
        ),
      },
      {
        path: 'update-blog',
        element: (
          <ProtectedRoute>
            <UpdateBlog />
          </ProtectedRoute>
        ),
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <BloggingContextProvider>
    <RouterProvider router={route} />
  </BloggingContextProvider>
)
