import React from 'react';
import s from './Menu.module.css'
import {ItemsType} from "../../App";


type MenuType = {
    items: ItemsType
    active: boolean
    isBurgerActive: () => void
}

const Menu = (props: MenuType) => {
    return (
        <div className={`${s.menuContent} ${props.active && s.active}`} onClick={e => e.stopPropagation()}>

            <ul className={s.ul}>
                {props.items.map(el => <li className={s.li}><a className={s.a} href="#">{el.title}</a></li>)}
            </ul>


        </div>
    );
};

export default Menu;

