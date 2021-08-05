import React from 'react';
import s from './Header.module.css'
import {ItemsType} from "../../App";
import {Link} from "react-scroll";


type MenuType = {
    items: ItemsType
    active: boolean
    isBurgerActive: () => void
    isHeader: boolean
    scrollToHeader:()=>void
}

const Header = (props: MenuType) => {

    const finalClassBurger = `${props.active && s.open} ${s.menuBtn}`
    const finalClassHeader = `${props.isHeader ? s.header : s.header2}`
    const finalClassLogo = `${props.isHeader ? s.logo : s.logo2}`
    const finalClassNav = `${props.isHeader ? s.a : s.a2}`

    return (
        <div className={finalClassHeader}>
            <section>
                <nav className={s.nav}>
                    <div><a className={finalClassLogo} onClick={props.scrollToHeader} href="#">N.</a></div>
                    <div className={s.topMenu}>
                        <ul className={s.ul}>
                            {props.items.map(el => <li><Link offset={-78} spy to={el.href} activeClass={s.active}
                                                             className={finalClassNav} href="#">{el.title}</Link></li>)}
                        </ul>
                    </div>
                    {props.isHeader
                        ? <div className={finalClassBurger} onClick={props.isBurgerActive}>
                            <div className={s.menuBtnBurger}></div>
                        </div>
                        : <div className={finalClassBurger} onClick={props.isBurgerActive}>
                            <div className={s.menuBtnBurger2}></div>
                        </div>
                    }
                </nav>
            </section>
        </div>
    );
};

export default Header;