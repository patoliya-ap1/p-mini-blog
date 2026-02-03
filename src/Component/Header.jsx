import { NavLink } from "react-router-dom";
import { useBloggingContext } from "../Context/BloggingContext/BloggingContext";
import { IoCreate } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [dropDownState, setDropDownState] = useState(false);

  const {
    values: { isLoggedIn, userInfo },
    handleLogin,
  } = useBloggingContext();

  const handleLogout = () => {
    handleLogin("logout");
  };

  const handleDropdown = () => {
    setDropDownState((prev) => !prev);
  };

  const userChar = userInfo?.email?.charAt(0).toUpperCase();

  return (
    <header className="bg-sky-900 p-3 flex justify-center shadow-xl">
      <div className="flex justify-between w-[90%] text-slate-300 items-center">
        <NavLink to="/">
          <h2>Blog App</h2>
        </NavLink>
        <nav className="">
          <ul className="flex space-x-3 items-center">
            {isLoggedIn && (
              <>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-slate-400" : "text-slate-300"
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-slate-400" : "text-slate-300"
                    }
                    to="/blog"
                  >
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-slate-400" : "text-slate-300"
                    }
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <button
                    className="h-5 w-5  p-5 bg-slate-800 rounded-full flex justify-center items-center text-xl relative cursor-pointer"
                    onClick={handleDropdown}
                  >
                    <span>{userChar}</span>
                    {dropDownState && (
                      <ul className="absolute top-13 bg-sky-950 p-4 w-60 rounded-md z-10">
                        <li>
                          <NavLink
                            className="flex items-center space-x-2 justify-center"
                            to="/create-blog"
                          >
                            <span>Create Post</span> <IoCreate />
                          </NavLink>
                        </li>
                      </ul>
                    )}
                  </button>
                </li>
                <li>
                  <button
                    className="bg-red-500 p-2 rounded-md cursor-pointer"
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
                    isActive ? "text-slate-400" : "text-slate-300"
                  }
                  to="login"
                >
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
