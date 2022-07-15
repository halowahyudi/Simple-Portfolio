import myPicture from "../public/images/yd.jpg";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 lg:max-w-4xl md:max-w-3lg mx-auto shadow">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52"
            >
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Hubungi Saya</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost upper-case text-xl">Wahyudi</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Hubungi Saya</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Image
            src={myPicture}
            alt="My Picture"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
