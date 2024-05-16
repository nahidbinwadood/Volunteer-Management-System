import logo from "../../images/Minimalist local charity logo with helping hands.svg";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import UseAuth from "./../../Hook/UseAuth";
import "react-dropdown/style.css";

const Navbar = () => {
  const { user, logOut } = UseAuth();
  const [hovered, setHovered] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked);
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  const [theme, setTheme] = useState("light");
  //Toggle Dark Theme :
  // const handleToggle = (e) => {

  // };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");

    // add custom data-theme attribute
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  return (
    <div data-aos="fade-down"
    data-aos-anchor-placement="top-bottom"
    data-aos-easing="linear"
    data-aos-duration="1000" className="font-qs">
      <div className="navbar  bg-base-100">
        <div className="w-1/2 justify-start md:justify-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[111] p-2 shadow bg-base-100  rounded-box w-52"
            >
              <NavLink to="/" className="z-40">
                <a>Home</a>
              </NavLink>
              <NavLink to="/need-volunteer">
                <a>Need Volunteers</a>
              </NavLink>
              <NavLink>
                <a>My Profile</a>
                <ul className="p-2">
                  <Link to='/add-volunteer-post'>
                    <a>Add Volunteer Post</a>
                  </Link>
                  <Link to='/manage-my-post'>
                    <a>Manage My Post</a>
                  </Link>
                </ul>
              </NavLink>
            </ul>
          </div>
          <Link to="/" className="cursor-pointer inter flex items-center ">
            <div>
              <img
                className=" size-16 md:size-24 rounded-xl dark:size-2"
                src={logo}
                alt=""
              />
            </div>
            <div>
              <h2 className="hidden md:flex font-bold text-xl md:text-2xl">
                <span className="text-green-500">Volunteer</span>Hub
              </h2>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu gap-8 menu-horizontal px-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "rounded-xl text-[#BE042F] font-semibold"
                  : "font-bold"
              }
            >
              <button className="px-8 py-3  text-lg">Home</button>
            </NavLink>
            <NavLink
              to="/need-volunteer"
              className={({ isActive }) =>
                isActive
                  ? "rounded-xl text-[#BE042F] font-semibold"
                  : "font-bold"
              }
            >
              <button className="px-8 py-3  text-xl">Need Volunteer</button>
            </NavLink>
            <button className="font-bold ">
              <div className="dropdown dropdown-end z-50">
                <div tabIndex={0} role="button" className="">
                  <div>
                    <button className="px-8 py-3  text-xl">My Profile</button>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/add-volunteer-post" className="justify-between">
                      Add Volunteer Post
                    </Link>
                  </li>
                  <li>
                    <Link to="/manage-my-post">Manage My Post</Link>
                  </li>
                </ul>
              </div>
            </button>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <label className="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="sr-only"
            />

            <span
              className={`slider  flex h-7 w-[50px] items-center rounded-full p-1 duration-200 ${
                isChecked ? "bg-[#212b36]" : "bg-[#CCCCCE]"
              }`}
            >
              <span
                className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
                  isChecked ? "translate-x-[28px]" : ""
                }`}
              ></span>
            </span>
          </label>
          <div className="md:navbar-end">
            {user?.email ? (
              <div className="flex items-center gap-4">
                <div
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  className="w-10 relative rounded-full"
                >
                  <img
                    className="rounded-full cursor-pointer transition hover:scale-95"
                    src={
                      user.photoURL
                        ? user.photoURL
                        : "https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-1/439011287_2066347377098548_8157686076250003447_n.jpg?stp=c0.18.160.160a_dst-jpg_p160x160&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFoPHVS4MuUjKpaqCTRTXs49jcT3sWeuaL2NxPexZ65ouVvTeRM_qclM__aZCXcZCV-WlHLC1H49ESy2oFGMoYx&_nc_ohc=fwLCvDv5ouYQ7kNvgGPcPZ-&_nc_ht=scontent.fdac5-1.fna&oh=00_AfAZqQ9GY6Jj47JFOexgHg38333lX7HfIspbscIrYzc7xA&oe=6633E1CB"
                    }
                    alt={user.displayName}
                  />
                  {hovered && (
                    <div className="absolute -left-28 top-10 transition transform  bg-opacity-70 p-2 text-sm font-bold  rounded">
                      <div className=" font bold">{user.displayName}</div>
                    </div>
                  )}
                </div>

                <div className="flex  font-bold">
                  <button
                    onClick={logOut}
                    className="btn btn-sm hover:scale-125 transition  btn-secondary"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="mr-4 md:mr-0 px-4 py-2 lg:px-6 lg:py-3 rounded-lg hover:scale-105 cursor-pointer transition text-white  font-semibold lg:text-lg bg-green-500 "
              >
                Log In{" "}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
