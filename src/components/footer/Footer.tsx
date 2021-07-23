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
                    <a href={"https://github.com/skitchen1992"}><GitHubIcon/></a>
                    <a  href={"https://www.linkedin.com/in/%D0%BD%D0%B8%D0%BA%D0%B8%D1%82%D0%B0-%D0%BB%D0%B0%D0%B2%D1%80%D0%B5%D0%BD%D1%82%D1%8C%D0%B5%D0%B2-a7a40a188/"}><LinkedInIcon/></a>
                    <a href={"https://www.facebook.com/lavrentevNikita"}><FacebookIcon/></a>
                </div>
            </section>
        </div>
    );
};

export default Footer;