import React from 'react';
import s from "./RecentWorks.module.css"
import ContainerTitle from "../containerTitle/ContainerTitle";
import Works from "./works/Works";
import SocialNetwork from "../../img/socialNetwork.jpg"
import TaskManager from "../../img/todolist.jpg"
import Counter from "../../img/counter.jpg"
import ReactTasks from "../../img/react_tasks.jpg"

const RecentWorks = () => {
    const title: string = "Recent Works"
    const description: string = "Follow the link to the site or just look at the code."
    const myWorks = [
        {
            logo: SocialNetwork,
            title: "Social network",
            text: "The project is written using React, Redux, TS, RestAPI, Thunk, Material UI, Hooks, Class Components.",
            demo: "https://skitchen1992.github.io/socialNetworkOnReactTypeScript/#/login",
            code: 'https://github.com/skitchen1992/socialNetworkOnReactTypeScript',
        },
        {
            logo: TaskManager,
            title: "Task Manager",
            text: "The project is written using React, Redux, TS, RestAPI, Thunk, Material UI, Hooks, Class Components.",
            demo: "",
            code: '',
        },
        {
            logo: Counter,
            title: "Counter",
            text: "The project is written using React, Redux, Hooks",
            demo: "",
            code: '',
        },
        {
            logo: ReactTasks,
            title: "React tasks",
            text: "The project is written using React, Redux, TS, RestAPI, Thunk, Unit Tests",
            demo: "https://skitchen1992.github.io/tasks",
            code: 'https://github.com/skitchen1992/tasks',
        },
    ]
    return (
        <div id="RecentWorks" className={s.wrapper}>
            <section>
                <ContainerTitle title={title} description={description}/>
                <div className={s.wrap}>
                    {myWorks.map(el => <Works logo={el.logo} title={el.title} text={el.text} demo={el.demo}
                                              code={el.code}/>)}
                </div>
            </section>
        </div>
    );
};

export default RecentWorks;