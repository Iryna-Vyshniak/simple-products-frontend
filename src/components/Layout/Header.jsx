import { Link } from 'react-router-dom';
import { SiDeepnote } from 'react-icons/si';
import Navbar from './Navbar';
import { UserNav } from './UserNav';
import { useSelector } from 'react-redux';
import { isUserLogin } from '../../../store/auth/selectors';

const Header = () => {
  const isLogin = useSelector(isUserLogin);

  return (
    <div className='sticky top-0 z-40 bg-white border-b shadow-sm'>
      <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
        <div>
          <Link to='/' className='flex flex-col items-center justify-center'>
            <SiDeepnote className='h-5 cursor-pointer text-blue-700 hover:text-red-700' />
            <span className='mr-2 text-blue-700 font-semibold'>WorkShopDev</span>{' '}
          </Link>
        </div>
        <nav className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
          <Navbar />
        </nav>
        {isLogin && <UserNav />}
      </header>
    </div>
  );
};

export default Header;
