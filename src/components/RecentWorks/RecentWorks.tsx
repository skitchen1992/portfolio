import React from 'react';
import s from "./RecentWorks.module.css"
import ContainerTitle from "../containerTitle/ContainerTitle";
import Works from "./works/Works";
import photo from "../../img/slide-bg-1.jpg"

const RecentWorks = () => {
    const title: string = "Recent Works"
    const description: string = "Some text"
    const myWorks = [
        {
            logo: photo,
            title: "some title",
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
        },
        {
            logo: photo,
            title: "some title",
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
        },
        {
            logo: photo,
            title: "some title",
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
        },
        {
            logo: photo,
            title: "some title",
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
        },
    ]
    return (
        <div className={s.wrapper}>
            <section id="RecentWorks">
                <ContainerTitle title={title} description={description}/>
                <div className={s.wrap}>
                    {myWorks.map(el=><Works logo={el.logo} title={el.title} text={el.text}/>)}
                </div>
            </section>
        </div>
    );
};

export default RecentWorks;