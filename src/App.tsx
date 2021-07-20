import React, {useState} from 'react';
import s from './App.module.css'
import Header from "./components/Header";
import Menu from "./components/Menu";

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

        <div className={s.page}>
            <Header items={items} active={menuActive} isBurgerActive={isBurgerActive}/>
            <Menu active={menuActive} isBurgerActive={isBurgerActive} items={items}/>
        </div>


    );
}

export default App;
