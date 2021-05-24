import n from './Nav.module.scss';
import UserName from './UserName/UserName';

const Nav = () => {
    return(  
        <nav className={n.nav}>
          <UserName></UserName>
        <a href="#">Профиль</a>
        <a href="#">Сообщения</a>
        <a href="#">Новости</a>
        <a href="#">Музыка</a>
        <a href="#" className={n.nav_last}>Настройки</a>
      </nav>
       );
    }
    export default Nav;