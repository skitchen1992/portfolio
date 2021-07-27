import s from "./MySkills.module.css";
import ContainerTitle from "../containerTitle/ContainerTitle";
import React from "react";
import MySkillsBlock from "./mySkillsBlock/MySkillsBlock";
import cssLogo from "../../img/Logo/cssLogo.svg"
import typescriptLogo from "../../img/Logo/typescriptLogo.png"
import reactLogo from "../../img/Logo/reactLogo.svg"
import javascriptLogo from "../../img/Logo/javascriptLogo.svg"
import reduxLogo from "../../img/Logo/reduxLogo.svg"
import githubLogo from "../../img/Logo/githubLogo.svg"

const MySkills = () => {
    const title: string = "My skills"
    const description: string = "Technologies I use"
    const mySkills = [
        {
            logo: reactLogo,
            title: "React",
            text: "I use class and function components. Reusable components, React Router. Really like hooks. Use local state depending on the situation."
        },
        {
            logo: reduxLogo,
            title: "Redux",
            text: "Redux helps me write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. I only use it in scalable applications."
        },
        {
            logo: typescriptLogo,
            title: "TypeScript",
            text: "I use TypeScript in all my projects. It really helps you find bugs quickly and speeds up development."
        },
        {
            logo: javascriptLogo,
            title: "JavaScript",
            text: "I use modern ES6 syntax in my projects, but I also know older syntax.  I supplement my knowledge from books and articles to solve problems more succinctly."
        },
        {
            logo: cssLogo,
            title: "CSS",
            text: "I know both native CSS and preprocessors. Animations are also used in my projects to bring applications to life."
        },
        {
            logo: githubLogo,
            title: "GitHub",
            text: "I have experience with Git. Worked both independently and as part of a team."
        },
    ]
    return (
        <div id={"MySkills"} className={s.wrapper}>
            <section >
                <ContainerTitle title={title} description={description}/>
                <div className={s.wrap}>
                    {mySkills.map(el => <MySkillsBlock logo={el.logo} title={el.title} text={el.text}/>)}
                </div>
            </section>
        </div>
    );
};
export default MySkills;