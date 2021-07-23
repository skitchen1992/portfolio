import React from 'react';
import s from './AboutMe.module.css'
import Photo from "../../photo/Photo.jpg"
import ContainerTitle from "../containerTitle/ContainerTitle";

const AboutMe = () => {
    const title: string = "About me"
    const description: string = "Junior react developer based in Russia"
    return (
        <div id={"AboutMe"} className={s.wrapper}>
            <section >
                <ContainerTitle title={title} description={description}/>
                <div className={s.aboutMe}>
                    <div className={s.photo}>
                        <img className={s.img} src={Photo}/>
                    </div>
                    <div className={s.info}>
                        <h4 className={s.name}>I'm Nikita Lavrentev</h4>
                        <h5 className={s.sumName}>Junior react developer based in Russia</h5>
                        <p>I design and develop services for customers of all sizes, specializing in creating stylish,
                            modern websites, web services and online stores. My passion is to design digital user
                            experiences through the bold interface and meaningful interactions. Check out my
                            Portfolio</p>
                        <div className={s.aboutList}>
                            <div className={s.birthInformation}>
                                <div className={s.aboutListRow}>
                                    <div className={s.aboutListRowTitle}>Birthday</div>
                                    <div className={s.aboutListRowValue}>26 january 1992</div>
                                </div>
                                <div className={s.aboutListRow}>
                                    <div className={s.aboutListRowTitle}>Age</div>
                                    <div className={s.aboutListRowValue}>29</div>
                                </div>
                                <div className={s.aboutListRow}>
                                    <div className={s.aboutListRowTitle}>Residence</div>
                                    <div className={s.aboutListRowValue}>Russia</div>
                                </div>
                                <div className={s.aboutListRow}>
                                    <div className={s.aboutListRowTitle}>Address</div>
                                    <div className={s.aboutListRowValue}>Moscow</div>
                                </div>
                            </div>
                            <div className={s.contacts}>
                                <div className={s.aboutListRow}>
                                    <div className={s.aboutListRowTitle}>E-mail</div>
                                    <div className={s.aboutListRowValue}>skitchen1992@gmail.com</div>
                                </div>
                                <div className={s.aboutListRow}>
                                    <div className={s.aboutListRowTitle}>Phone</div>
                                    <div className={s.aboutListRowValue}>+7(999) 977-65-50</div>
                                </div>
                                <div className={s.aboutListRow}>
                                    <div className={s.aboutListRowTitle}>LinkedIn</div>
                                    <div className={s.aboutListRowValue}>Niki</div>
                                </div>
                                <div className={s.aboutListRow}>
                                    <div className={s.aboutListRowTitle}>Telegram</div>
                                    <div className={s.aboutListRowValue}>@niklavrentev</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutMe;