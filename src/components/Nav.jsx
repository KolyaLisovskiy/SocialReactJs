import './scss/Nav.scss';

const Nav = () => {
    return(  
        <nav className="nav">
        <a href="#">Профиль</a>
        <a href="#">Сообщения</a>
        <a href="#">Новости</a>
        <a href="#">Музыка</a>
        <a href="#" className="nav-last">Настройки</a>
      </nav>
       );
    }
    export default Nav;