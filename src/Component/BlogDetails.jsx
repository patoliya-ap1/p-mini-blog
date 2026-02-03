import { useParams } from 'react-router-dom'
import { useBloggingContext } from '../Context/BloggingContext/BloggingContext'
import BlogCard from './BlogCard'

const BlogDetails = () => {
  const { blogId } = useParams()

  const {
    values: { blogs },
  } = useBloggingContext()

  const blog = blogs.find(({ id }) => blogId == id)

  const author = blog.user.split('@')[0]

  const relatedPost = blogs.filter(({ category, id }) => {
    return blog.category == category && blogId != id
  })

  const formatDate = new Date(blog.created_at).toDateString('default', {
    month: 'short',
  })

  return (
    <div>
      <h2 className="text-2xl text-slate-700">{blog.title}</h2>
      <div className="text-slate-600 flex flex-wrap space-x-3">
        <p>Author: {author}</p>
        <p className="text">Category: {blog.category}</p>
        <p className="text">Post Date: {formatDate}</p>
      </div>
      <div className="mt-5 text-slate-700">
        <pre className="whitespace-pre-wrap">{blog.content}</pre>
      </div>
      <div className="mt-5">
        <p>Related Post</p>
        <div className="grid md:grid-cols-2 gap-3">
          {relatedPost.length > 0 &&
            relatedPost.map(
              ({ id, title, content, category, user, created_at }) => {
                return (
                  <BlogCard
                    key={id}
                    id={id}
                    title={title}
                    content={content}
                    category={category}
                    user={user}
                    created_at={created_at}
                  />
                )
              }
            )}
        </div>
      </div>
    </div>
  )
}
export default BlogDetails
