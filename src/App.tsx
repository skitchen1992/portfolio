import React, {useEffect, useState} from 'react';
import s from './App.module.css'
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import AboutMe from "./components/aboutMe/AboutMe";
import MySkills from "./components/mySkills/MySkills";
import RecentWorks from "./components/RecentWorks/RecentWorks";
import Footer from "./components/footer/Footer";

type MenuType = {
    title: string,
    href: string
}
export type ItemsType = MenuType[]

function App() {
    const items: ItemsType = [
        {title: "About Me", href: "AboutMe"},
        {title: "My Skills", href: "MySkills"},
        {title: "Recent Works", href: "RecentWorks"},
    ]
    const [menuActive, setMenuActive] = useState<boolean>(false)
    const isBurgerActive = () => {
        setMenuActive(!menuActive)
    }
    const [isHeader, setHeader] = useState(true)
    const listenScrollEvent = (event:any) => {
        if (window.scrollY < 10) {
            return setHeader(true)
        } else if (window.scrollY > 10) {
            return setHeader(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, []);


    return (
        <>
            <div className={s.page}>
                <Header items={items} active={menuActive} isBurgerActive={isBurgerActive} isHeader={isHeader}/>
                <Menu active={menuActive} isBurgerActive={isBurgerActive} items={items}/>
                 <section>
                     <h1 className={s.title}>
                        <span>React developer</span>
                     </h1>
                 </section>
            </div>

            <AboutMe/>
            <MySkills/>
            <RecentWorks/>
            <Footer/>

        </>

    );
}

export default App;
