
import { NavLink,Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-12 py-1.5 sm:py-4 px-11">
        <div className="font-bold text-xl">
          <NavLink to="/">
          <span className="text-black">REST</span>
          <span className="text-indigo-700">Explorer</span>
          </NavLink>
        </div>
        <ul className="text-gray-600  gap-3.5 flex items-center">
          <li className='hover:underline hover:text-gray-900 font-medium'><NavLink to="/">Home</NavLink></li>
          <li className='hover:underline hover:text-gray-900 font-medium'><NavLink to="/countries">Countries</NavLink></li>
          <li className='hover:underline hover:text-gray-900 font-medium'><NavLink to="/about">About</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
