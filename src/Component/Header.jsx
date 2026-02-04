import { NavLink } from 'react-router-dom'
import { useBloggingContext } from '../Context/BloggingContext/BloggingContext'
import { IoCreate } from 'react-icons/io5'
import { useState } from 'react'
import { IoMdMenu } from 'react-icons/io'
import { IoIosCloseCircle } from 'react-icons/io'
import logo from '../assets/blog.png'

const Header = () => {
  const [dropDownState, setDropDownState] = useState(false)

  const {
    values: { isLoggedIn, userInfo, sidebarStatus },
    handleLogin,
    toggleSiderbar,
  } = useBloggingContext()

  const handleLogout = () => {
    handleLogin('logout')
  }

  const handleDropdown = () => {
    setDropDownState((prev) => !prev)
  }

  const userChar = userInfo?.email?.charAt(0).toUpperCase()

  return (
    <header className="bg-sky-900 p-3 flex justify-center shadow-xl sticky top-0 z-30">
      <div className="flex justify-between w-[100%] sm:w-[90%] text-slate-300 items-center">
        <NavLink to="/" className="flex items-end space-x-1">
          <img src={logo} alt="logo" className="w-10" />
          <span className="text-sm text-slate-400">Blog</span>
        </NavLink>
        <nav className="">
          <ul className="flex space-x-3 items-center">
            {isLoggedIn && (
              <>
                <li className="hidden sm:block">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'text-slate-400' : 'text-slate-300'
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="hidden sm:block">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'text-slate-400' : 'text-slate-300'
                    }
                    to="/blog"
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="hidden sm:block">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'text-slate-400' : 'text-slate-300'
                    }
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li className="hidden sm:block z-30">
                  <button
                    className={`h-5 w-5  p-5  rounded-full flex justify-center items-center text-xl relative cursor-pointer hover:bg-sky-950 ${dropDownState ? 'bg-sky-950' : 'bg-sky-700'}`}
                    onClick={handleDropdown}
                  >
                    <span>{userChar}</span>
                    {dropDownState && (
                      <ul className="absolute top-13 bg-sky-950 p-4 w-60 rounded-md  h-35 space-y-2 ">
                        <li>
                          <p
                            className="flex items-center space-x-2 justify-center p-2 shadow-md"
                            to="/create-blog"
                          >
                            <span>{userInfo.email}</span>
                          </p>
                        </li>
                        <li>
                          <NavLink
                            className="flex items-center space-x-2 justify-center bg-sky-800 hover:bg-sky-600 p-2 rounded-md"
                            to="/create-blog"
                          >
                            <span>Create Blog</span> <IoCreate />
                          </NavLink>
                        </li>
                      </ul>
                    )}
                  </button>
                </li>
                <li className="hidden sm:block">
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
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'text-slate-400' : 'text-slate-300'
                  }
                  to="login"
                >
                  Login
                </NavLink>
              </li>
            )}
            <li className="sm:hidden">
              <button
                className={`h-10 w-10 flex justify-center bg-sky-700 rounded-full items-center text-xl cursor-pointer hover:bg-sky-950 ${sidebarStatus ? 'bg-sky-950' : ''}`}
                onClick={toggleSiderbar}
              >
                {sidebarStatus ? <IoIosCloseCircle /> : <IoMdMenu />}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
export default Header
