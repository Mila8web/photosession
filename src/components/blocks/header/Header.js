import s from './Header.module.scss';
import logo from './../../../assets/img/logo.svg';
import user from './../../../assets/img/user.png';


function Header() {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.inner}>
                    <div className={s.wrap}>
                        <img src={logo} alt="" className={s.logo} />
                        <a href="tel:88001231212" className={s.moscowPhone}>Москва</a>
                        <div className={s.phone}>
                            <span>Телефон:</span>
                            <a href="tel:88001231212" className={s.phoneLink}>8(800)-123-12-12</a>
                        </div>
                    </div>
                    <a href="">
                        <img src={user} alt="" className={s.user} />
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;