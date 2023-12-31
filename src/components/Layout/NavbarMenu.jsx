import { useSelector } from 'react-redux';
import { isUserLogin } from '../../store/auth/selectors';
import items from '../../share/menu-items.json';
import { NavLink } from 'react-router-dom';

const NavbarMenu = () => {
  const isLogin = useSelector(isUserLogin);

  const activeLink =
    'cursor-pointer py-3 text-sm font-semibold text-black-700 border-b-[3px] border-b-blue-700 transition duration-200 ease-in-out';

  const nav = !isLogin ? items.filter((item) => !item.private) : items;

  const li = nav.map(({ id, link, text }) => {
    return (
      <li key={id} className='mb-5 md:ml-8 md:mb-0 py-3'>
        <NavLink
          to={link}
          className={({ isActive }) =>
            isActive
              ? activeLink
              : 'cursor-pointer py-3 text-sm font-semibold text-slate-400 border-b-[3px] border-b-transparent'
          }
        >
          {text}
        </NavLink>
      </li>
    );
  });

  return <ul className='md:flex md:items-center'>{li}</ul>;
};

export default NavbarMenu;
