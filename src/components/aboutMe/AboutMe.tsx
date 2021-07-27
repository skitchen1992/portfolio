import React from 'react';
import s from './AboutMe.module.css'
import Photo from "../../photo/Photo.jpg"
import ContainerTitle from "../containerTitle/ContainerTitle";

const AboutMe = () => {
    const title: string = "About me"
    const description: string = "Junior react developer based in Russia"
    return (
        <div id={"AboutMe"} className={s.wrapper}>
            <section>
                <ContainerTitle title={title} description={description}/>
                <div className={s.aboutMe}>
                    <div className={s.photo}>
                        <img className={s.img} src={Photo}/>
                    </div>
                    <div className={s.info}>
                        <h4 className={s.name}>I'm Nikita Lavrentev</h4>
                        <h5 className={s.sumName}>I love programming and learning about new technologies.</h5>
                        <p>I’m a frontend developer who has
                            a results-focused attitude to creating SPA, using React(JS/TS), Redux.
                            I would like to find project work
                            and full-time employment in a company with
                            a modern approach to development and a
                            collaborative team.
                            My free time is dedicated to <a className={s.a}
                                                            href={"https://www.codewars.com/users/skitchen"} target="_blank">CodeWars</a>,
                            programming tutorials, and becoming familiar with NodeJS, because, in the future, I see
                            myself as a Full Stack Developer.
                            Ready to consider project work and full-time employment.</p>
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
                                    <div className={s.aboutListRowValue}><a href="mailto:skitchen1992@gmail.com?subject=Предложение о работе">skitchen1992@gmail.com</a></div>
                                </div>
                                <div className={s.aboutListRow}>
                                    <div className={s.aboutListRowTitle}>Phone</div>
                                    <div className={s.aboutListRowValue}>+7(999) 977-65-50</div>
                                </div>
                                <div className={s.aboutListRow}>
                                    <div className={s.aboutListRowTitle}>LinkedIn</div>
                                    <div className={s.aboutListRowValue}><a href={"https://www.linkedin.com/in/nikitalavrentev/"} target="_blank">in/NikitaLavrentev</a></div>
                                </div>
                                <div className={s.aboutListRow}>
                                    <div className={s.aboutListRowTitle}>Telegram</div>
                                    <div className={s.aboutListRowValue}><a href="tg://resolve?domain=niklavrentev">@niklavrentev</a></div>
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