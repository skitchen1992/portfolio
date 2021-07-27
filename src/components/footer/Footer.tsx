import React from 'react';
import s from "./Footer.module.css";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

const Footer = () => {
    return (
        <div className={s.wrapper}>
            <section>
                <div className={s.footerText}>© 2021 ALL RIGHTS RESERVED.</div>
                <div className={s.wrap}>
                    <a href={"https://github.com/skitchen1992"} target="_blank"><GitHubIcon/></a>
                    <a href={"https://www.linkedin.com/in/nikitalavrentev/"} target="_blank"><LinkedInIcon/></a>
                    <a href={"https://www.facebook.com/lavrentevNikita"} target="_blank"><FacebookIcon/></a>
                </div>
            </section>
        </div>
    );
};

export default Footer;