import { Link } from "react-router-dom";

const Navbar = () => {
  const navOption = (
    <>
      <li className="hover:text-yellow-500">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:text-yellow-500">
        <Link to="/contactus">Contact Us</Link>
      </li>
      <li className="hover:text-yellow-500">
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li className="hover:text-yellow-500">
        <Link to="/ourmenu">Our Menu</Link>
      </li>
      <li className="hover:text-yellow-500">
        <Link to="/order">Order</Link>
      </li>
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-opacity-50 bg-base-100 text-white max-w-screen-xl">
      <div className="navbar-start">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow uppercase"
          >
            {navOption}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl uppercase">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 uppercase">{navOption}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
