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
    const description: string = "Some text"
    const mySkills = [
        {
            logo: reactLogo,
            title: "some title",
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
        },
        {
            logo: reduxLogo,
            title: "some title",
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
        },
        {
            logo: typescriptLogo,
            title: "some title",
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
        },
        {
            logo: javascriptLogo,
            title: "some title",
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
        },
        {
            logo: cssLogo,
            title: "some title",
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
        },
        {
            logo: githubLogo,
            title: "some title",
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
        },
    ]
    return (
        <div className={s.wrapper}>
            <section>
                <ContainerTitle title={title} description={description}/>
                <div className={s.wrap}>
                    {mySkills.map(el => <MySkillsBlock logo={el.logo} title={el.title} text={el.text}/>)}
                </div>
            </section>
        </div>
    );
};
export default MySkills;