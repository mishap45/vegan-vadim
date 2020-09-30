import React, {useState} from 'react'
import './App.css'
import Header from './Components/Header/Header'
import HeaderArticleBlocks from './Components/HeaderArticaleBlocks/HeaderArticleBlocks'
import InfoBlocks from './Components/InfoBlocks/InfoBlocks'
import SideBar from './Components/SideBar/SideBar'

const App = () => {

    const [darkTheme, ChangeTheme] = useState(false);
    const [visible, ChangeVisible] = useState(false);
    const [scroll, SetScroll] = useState(true);

    const ChangeVisibleFC = () => {
        visible ? ChangeVisible(false) : ChangeVisible(true);
        visible ? SetScroll(true) : SetScroll(false)
    };

    const ChangeThemeFC = () => {
        darkTheme ? ChangeTheme(false) : ChangeTheme(true)
    };

    return (
        <div className={scroll ? 'scrollTrue' : 'scrollFalse'}>
            <SideBar darkTheme={darkTheme} visible={visible} ChangeVisible={ChangeVisibleFC} />
            <Header darkTheme={darkTheme} ChangeTheme={ChangeThemeFC} ChangeVisible={ChangeVisibleFC} />
            <HeaderArticleBlocks darkTheme={darkTheme} ChangeTheme={ChangeThemeFC} />
            <InfoBlocks darkTheme={darkTheme} ChangeTheme={ChangeThemeFC} />
        </div>
    )
};

export default App;
