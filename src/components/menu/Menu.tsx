import React from 'react';
import s from './Menu.module.css'
import {ItemsType} from "../../App";
import {Link} from "react-scroll";


type MenuType = {
    items: ItemsType
    active: boolean
    isBurgerActive: () => void
}

const Menu = (props: MenuType) => {
    return (
        <div className={`${s.menuContent} ${props.active && s.active}`} onClick={e => e.stopPropagation()}>

            <ul className={s.ul}>
                {props.items.map(el => <li className={s.li}><Link onClick={props.isBurgerActive} offset={-78}
                                                                  spy={true} duration={500} to={el.href}
                                                                  activeClass={s.active} className={s.a}
                                                                  href="#">{el.title}</Link></li>)}
            </ul>

        </div>
    );
};

export default Menu;

