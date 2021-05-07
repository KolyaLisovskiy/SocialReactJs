
import React from 'react';
import s from './Header.module.scss';

const Header = () => {
return(  
<header className={s.header}>
<div className={s.header_content}>
<img className={s.header_content_logo} src="#" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/IMG_%28business%29.svg/1200px-IMG_%28business%29.svg.png" alt="bla"></img>
</div>
</header> );
}
export default Header;