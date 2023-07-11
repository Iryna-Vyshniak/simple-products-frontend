import { Link, NavLink } from 'react-router-dom';
import { SiDeepnote } from 'react-icons/si';
import { AuthNav } from './AuthNav';
import { UserNav } from './UserNav';

const Header = () => {
  return (
    <div className='sticky top-0 z-40 bg-white border-b shadow-sm'>
      <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
        <div>
          <Link to='/'>
            <SiDeepnote className='h-5 cursor-pointer text-red-700 hover:text-blue-700' />
          </Link>
        </div>
        <nav className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
          <AuthNav />
          <UserNav />
        </nav>
      </header>
    </div>
  );
};

export default Header;
