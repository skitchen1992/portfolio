import React from 'react';
import s from "./Works.module.css";
type WorksType = {
    logo:any,
    title:string,
    text:string
}
const Works = (props:WorksType) => {
    return (
        <a className={s.wrapper} href={"http://htmlbook.ru/faq/kak-sdelat-chtoby-sloy-tselikom-byl-ssylkoy"}>
            <img className={s.img} src={props.logo } />
            <div className={s.skillName}>{props.title}</div>
            <div className={s.text}>{props.text}</div>
        </a>
    );
};

export default Works;