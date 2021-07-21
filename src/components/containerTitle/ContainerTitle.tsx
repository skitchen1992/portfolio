import React from 'react';
import s from "./ContainerTitle.module.css";

type ContainerTitleType = {
    title:string
    description:string
}

const ContainerTitle = (props:ContainerTitleType) => {
    return (
        <div className={s.title}>
            <h3 className={s.h3}>{props.title}</h3>
            <p className={s.subTitle}>{props.description}</p>
        </div>
    );
};

export default ContainerTitle;