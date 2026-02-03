import { ErrorBoundary } from 'react-error-boundary'
import BlogList from '../Component/BlogList'
import ErrorFallback from '../Component/ErrorFallback'

const Blog = () => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <BlogList />
      </ErrorBoundary>
    </>
  )
}
export default Blog
