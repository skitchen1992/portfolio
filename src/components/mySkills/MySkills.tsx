import s from "./Technologies.module.css";
import ContainerTitle from "../containerTitle/ContainerTitle";
import React from "react";
import MySkillsBlock from "./mySkillsBlock/MySkillsBlock";


const MySkills = () => {
    const title: string = "My skills"
    const description: string = "Some text"
    return (
        <div className={s.wrapper}>
            <section>
                <ContainerTitle title={title} description={description}/>
                <MySkillsBlock/>
            </section>
        </div>
    );
};
export default MySkills;