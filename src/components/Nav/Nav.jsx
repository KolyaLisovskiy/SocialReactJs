import n from './Nav.module.scss';
import UserName from './UserName/UserName';
import { NavLink } from 'react-router-dom';
const Nav = () => {
  return (
    <nav className={n.nav}>
      <UserName></UserName>
      <NavLink to="/profile" activeClassName={n.active}>Профиль</NavLink>
      <NavLink to="/dialogs"activeClassName={n.active} >Сообщения</NavLink>
      <NavLink to="/news"activeClassName={n.active} >Новости</NavLink>
      <NavLink to="/music"activeClassName={n.active} >Музыка</NavLink>
      <NavLink to="/settings" activeClassName={n.active} className={n.nav_last}>Настройки</NavLink>
    </nav>
  );
}
export default Nav;