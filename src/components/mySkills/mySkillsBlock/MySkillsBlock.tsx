import React from 'react';
import s from "./MySkillsBlock.module.css"
import Logo from "../../../img/Logo/cssLogo.svg"
const MySkillsBlock = () => {
    return (
        <div className={s.wrapper}>
            <img src={Logo }/>
        </div>
    );
};

export default MySkillsBlock;