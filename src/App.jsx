import { Outlet } from 'react-router-dom'
import Header from './Component/Header'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './Component/ErrorFallback'
import { useBloggingContext } from './Context/BloggingContext/BloggingContext'
import { useEffect } from 'react'
import SideBar from './Component/Sidebar'

function App() {
  const { updateBlogFromStorage } = useBloggingContext()

  useEffect(() => {
    if (localStorage.getItem('blogs')) {
      const localBlogs = JSON.parse(localStorage.getItem('blogs'))
      updateBlogFromStorage(localBlogs)
    }
  }, [])

  return (
    <>
      <Header />
      <SideBar />
      <div className="p-4 flex justify-center">
        <div className="w-[90%]">
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Outlet />
          </ErrorBoundary>
        </div>
      </div>
    </>
  )
}

export default App
