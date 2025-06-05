
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className="flex flex-row items-center justify-center sm:justify-start gap-4 sm:gap-11 py-3 sm:py-4 px-3 sm:px-11 border-b  border-b-gray-300">
        <div className="font-bold sm:text-xl">
          <NavLink to="/">
            <span className="text-black">REGIO</span>
            <span className="text-indigo-700">Explorer</span>
          </NavLink>
        </div>
        <div className="hidden sm:block w-0.5 h-6 bg-gray-400"></div>
        <ul className="text-gray-600   flex gap-3.5 items-center">
          <li className='hover:underline hover:text-gray-900 font-medium sm:text-lg'><NavLink to="/">Home</NavLink></li>
          <li className='hover:underline hover:text-gray-900 font-medium sm:text-lg'><NavLink to="/countries">Countries</NavLink></li>
          <li className='hover:underline hover:text-gray-900 font-medium sm:text-lg'><NavLink to="/about">About</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
