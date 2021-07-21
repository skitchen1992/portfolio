import React, {useState} from 'react';
import s from './App.module.css'
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import AboutMe from "./components/aboutMe/AboutMe";
import MySkills from "./components/mySkills/MySkills";

type MenuType = {
    title: string,
    href: string
}
export type ItemsType = MenuType[]

function App() {
    const items: ItemsType = [
        {title: "About", href: "/About"},
        {title: "What I Do", href: "/What I Do"},
        {title: "Works", href: "/Works"},
        {title: "Contact", href: "/Contact"},
    ]
    const [menuActive, setMenuActive] = useState<boolean>(false)

    const isBurgerActive = () => {
        setMenuActive(!menuActive)
    }


    return (
        <>
            <div className={s.page}>
                <Header items={items} active={menuActive} isBurgerActive={isBurgerActive}/>
                <Menu active={menuActive} isBurgerActive={isBurgerActive} items={items}/>
                <h1 className={s.title}>
                    <span>React developer</span>
                </h1>
            </div>
            <AboutMe/>
            <MySkills/>
        </>

    );
}

export default App;
