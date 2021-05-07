import n from './scss/Nav.module.scss';

const Nav = () => {
    return(  
        <nav className={n.nav}>
        <a href="#">Профиль</a>
        <a href="#">Сообщения</a>
        <a href="#">Новости</a>
        <a href="#">Музыка</a>
        <a href="#" className={n.nav_last}>Настройки</a>
      </nav>
       );
    }
    export default Nav;