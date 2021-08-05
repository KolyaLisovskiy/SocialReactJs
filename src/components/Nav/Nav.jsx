import n from './Nav.module.scss';
import UserName from './UserName/UserName';

const Nav = () => {
    return(  
        <nav className={n.nav}>
          <UserName></UserName>
        <a href="/profile">Профиль</a>
        <a href="/dialogs">Сообщения</a>
        <a href="/news">Новости</a>
        <a href="/music">Музыка</a>
        <a href="/settings" className={n.nav_last}>Настройки</a>
      </nav>
       );
    }
    export default Nav;