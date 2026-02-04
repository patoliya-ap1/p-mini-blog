import { NavLink } from 'react-router-dom'
import { useBloggingContext } from '../Context/BloggingContext/BloggingContext'
import { LuCircleUser } from 'react-icons/lu'
import { FaPlusCircle } from 'react-icons/fa'

const SideBar = () => {
  const {
    values: { userInfo, isLoggedIn, sidebarStatus },
    handleLogin,
  } = useBloggingContext()

  const handleLogout = () => {
    handleLogin('logout')
  }

  const author = isLoggedIn && userInfo.email.split('@')[0]

  return (
    <div
      className={`h-screen fixed bg-sky-950 w-[50%] z-25 top-10 right-0 transform-transition duration-300 transform sm:w-[50%] sm:translate-x-full ${!sidebarStatus && 'translate-x-full'} p-5`}
    >
      <div className="flex flex-col items-center p-4 space-y-8 mt-5 shadow-md">
        {isLoggedIn && (
          <div className="">
            <div className="w-20 h-20 text-slate-300 bg-sky-700 p-5 rounded-full text-5xl flex justify-center items-center mb-2 shadow-md">
              <LuCircleUser />
            </div>
            <h5 className="text-center text-2xl text-slate-200">{author}</h5>
          </div>
        )}

        <nav className=" ">
          <ul className="text-slate-300 space-y-5">
            {isLoggedIn && (
              <>
                <li>
                  <NavLink
                    to="/create-blog"
                    className="bg-slate-700 p-3 text-slate-200 rounded-md flex items-center space-x-1 hover:bg-slate-800"
                  >
                    <span>Create Blog</span> <FaPlusCircle />
                  </NavLink>
                </li>

                <li className="hover:text-gray-400">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'text-slate-500' : 'text-slate-300'
                    }
                    to={'/'}
                  >
                    Home
                  </NavLink>{' '}
                </li>

                <li className="hover:text-gray-400">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'text-slate-500' : 'text-slate-300'
                    }
                    to={'/blog'}
                  >
                    Blogs
                  </NavLink>{' '}
                </li>

                <li className=" hover:text-gray-400">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'text-slate-500' : 'text-slate-300'
                    }
                    to={'/about'}
                  >
                    About
                  </NavLink>{' '}
                </li>

                <li className="">
                  <button
                    className="bg-red-500 p-2 rounded-md cursor-pointer hover:bg-red-700"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}

            {!isLoggedIn && (
              <li className="">
                <NavLink
                  to={'/login'}
                  className="bg-red-500 p-2 rounded-md cursor-pointer hover:bg-red-700"
                  onClick={handleLogout}
                >
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  )
}
export default SideBar
