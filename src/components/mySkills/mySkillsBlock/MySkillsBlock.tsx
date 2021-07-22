import React from 'react';
import s from "./MySkillsBlock.module.css"


type MySkillsBlock = {
    logo:any,
    title:string,
    text:string
}

const MySkillsBlock = (props:MySkillsBlock ) => {
    return (
        <div className={s.wrapper}>
            <img className={s.img} src={props.logo }/>
            <div className={s.skillName}>{props.title}</div>
            <div className={s.text}>{props.text}</div>
        </div>
    );
};

export default MySkillsBlock;