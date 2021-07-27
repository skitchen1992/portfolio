import React from 'react';
import s from "./Works.module.css";
type WorksType = {
    logo:any,
    title:string,
    text:string,
    demo:string,
    code:string,
}
const Works = (props:WorksType) => {
    return (
        <>
        <div className={s.wrapper} >
            <img className={s.img} src={props.logo } />
            <div className={s.skillName}>{props.title}</div>
            <div className={s.text}>{props.text}</div>
            <div><a href={props.demo} target="_blank">View demo</a></div>
            <div><a href={props.code} target="_blank">View code</a></div>
        </div>

        </>
    );
};

export default Works;