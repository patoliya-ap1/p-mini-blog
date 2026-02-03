import { useMemo, useState } from 'react'
import BlogCard from '../Component/BlogCard'
import MessageContainer from '../Component/MessageContaner'
import { useBloggingContext } from '../Context/BloggingContext/BloggingContext'
import { FaDrumSteelpan, FaPlusCircle } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
const BlogList = () => {
  const {
    values: { blogs },
  } = useBloggingContext()

  console.log(blogs)

  const [searchInput, setSearchInput] = useState('')
  const [categoryInput, setCategoryInput] = useState('')

  // eslint-disable-next-line react-hooks/preserve-manual-memoization
  const searchFilter = useMemo(() => {
    return searchInput
      ? blogs.filter(({ title }) => {
          return title.toLowerCase().includes(searchInput.toLowerCase())
        })
      : blogs
  }, [searchInput, categoryInput, blogs])

  const categoryFilter = categoryInput
    ? searchFilter.filter(({ category }) => {
        return category === categoryInput
      })
    : searchFilter

  return (
    <div>
      <h2 className="mb-2">Blog</h2>

      <div className="mb-4 flex flex-wrap items-center gap-2">
        <div>
          <input
            type="text"
            placeholder="Search blog"
            className="p-3 shadow-md outline-none"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <div>
          <select
            className="p-3 shadow-md"
            value={categoryInput}
            onChange={(e) => setCategoryInput(e.target.value)}
          >
            <option value="">Filter By Category</option>
            <option value="Technology">Technology</option>
            <option value="Cooking">Cooking</option>
            <option value="Travelling">Travelling</option>
            <option value="Coding">Coding</option>
            <option value="Trading">Trading</option>
          </select>
        </div>
        <div>
          <NavLink
            to="/create-blog"
            className="bg-slate-700 p-3 text-slate-200 rounded-md flex items-center space-x-1"
          >
            <span>Create Blog</span> <FaPlusCircle />
          </NavLink>
        </div>
      </div>

      {blogs.length > 0 && categoryFilter.length == 0 && (
        <MessageContainer
          message="Blog not found with your selected Filter or Search"
          type="error"
        />
      )}

      {blogs?.length === 0 && (
        <MessageContainer message="Please add at least one Blog" />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {categoryFilter?.map(
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
  )
}
export default BlogList
