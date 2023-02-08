import React from 'react';
import s from "./RecentWorks.module.css"
import ContainerTitle from "../containerTitle/ContainerTitle";
import Works from "./works/Works";
import SocialNetwork from "../../img/socialNetwork.jpg"
import TaskManager from "../../img/todolist.jpg"
import Dog from "../../img/dod.png"
import Weather from "../../img/weather.jpg"

const RecentWorks = () => {
    const title: string = "Recent Works"
    const description: string = "Follow the link to the site or just look at the code."
    const myWorks = [
        {
            logo: SocialNetwork ,
            title: "Chat App",
            text: "The project is written using native JS, TS. Used patterns singleton, event bus. Technologies webPack, mocha, express, pug",
            demo: "https://chatnl.onrender.com/",
            code: 'https://github.com/skitchen1992/Chat',
        },
        {
            logo: Weather ,
            title: "Weather App",
            text: "The project is written using React, Redux, TS, RestAPI, Thunk, bulma, Hooks",
            demo: "https://skitchen1992.github.io/weather_app/",
            code: 'https://github.com/skitchen1992/weather_app',
        },
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
            demo: "https://skitchen1992.github.io/ToDoListOnReactTypeScript/",
            code: 'https://github.com/skitchen1992/ToDoListOnReactTypeScript',
        },
        {
            logo: Dog,
            title: "Give a dog",
            text: "The project is written using React, Hooks, TS",
            demo: "https://skitchen1992.github.io/giveadog/",
            code: "https://github.com/skitchen1992/giveadog",
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
