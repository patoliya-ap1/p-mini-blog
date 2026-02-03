import { MdDelete } from 'react-icons/md'
import { useBloggingContext } from '../Context/BloggingContext/BloggingContext'
import { FaEdit } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import { memo } from 'react'

const BlogCard = ({ id, title, content, category, user, created_at }) => {
  const {
    values: { userInfo },
    removeBlog,
  } = useBloggingContext()

  const handleDelete = (id) => {
    removeBlog(id)
  }

  const userChar = user.charAt(0).toUpperCase()

  const formatDate = new Date(created_at).toDateString('default', {
    month: 'short',
  })

  console.log(created_at)

  return (
    <div className="border border-slate-300 p-4 rounded-md relative mb-2 shadow-md">
      <div className="flex flex-col">
        <div>
          <NavLink to={`/blogDetails/${id}`}>
            <div className="overflow-hidden">
              <h5 className="text-xl text-slate-800 h-8">
                {title.slice(0, 50)}...
              </h5>
            </div>
            <div className="flex space-x-2 text-slate-500 flex-wrap mb-4 text-sm">
              <p className=" ">
                {' '}
                Posted At:
                <span className="text-slate-600 ms-2">{formatDate}</span>{' '}
              </p>
              <p className="">
                Category:{' '}
                <span className="text-slate-600 ms-2">{category}</span>{' '}
              </p>
            </div>

            <div className="overflow-hidden mb-3">
              <p className="text-sm text-gray-700 h-15">
                {content.slice(0, 250)}...
              </p>
            </div>
          </NavLink>
        </div>

        <div className="grid grid-cols-2  p-2 items-center rounded-md  gap-2">
          <div className="col-span-2 flex justify-end  space-x-4 ">
            {user == userInfo.email && <div className="text-blue-950 w-10 h-10 text-lg cursor-pointer bg-slate-200 p-2 rounded-full hover:bg-slate-300 flex justify-center items-center">
              <Link
                to={'/update-blog'}
                state={{ id, title, content, category }}
              >
                <FaEdit />
              </Link>
            </div>}

            {user == userInfo.email && (
              <div className="">
                <button
                  onClick={() => handleDelete(id)}
                  className="text-red-500 text-md cursor-pointer bg-slate-200 p-2 rounded-full hover:bg-slate-300 w-10 h-10 flex justify-center items-center"
                >
                  <MdDelete />
                </button>
              </div>
            )}
            <div className=" bg-sky-300 rounded-full text-xl p-4 w-10 h-10 flex justify-center items-center">
              <span className="">{userChar}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default memo(BlogCard)
