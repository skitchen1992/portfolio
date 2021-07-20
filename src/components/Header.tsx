import React from 'react';
import s from './Header.module.css'
import {ItemsType} from "../App";

type MenuType = {
    items: ItemsType
    active:boolean
    isBurgerActive:()=>void
}

const Header = (props:MenuType) => {



    return (
        <div className={s.header}>
            <section>
                <nav className={s.nav}>
                    <div><a className={s.logo} href="#">H.</a></div>
                    <div className={s.topMenu}>
                        <ul className={s.ul}>
                            {props.items.map(el=><li><a className={s.a} href="#">{el.title}</a></li>)}
                        </ul>
                    </div>
                    <div className={s.burger} onClick={props.isBurgerActive}><span/></div>
                </nav>
            </section>

        </div>
    );
};

export default Header;