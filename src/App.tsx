import React, {useState} from 'react'
import './App.css'
import Header from './Components/Header/Header'
import HeaderArticleBlocks from './Components/HeaderArticaleBlocks/HeaderArticleBlocks'
import InfoBlocks from './Components/InfoBlocks/InfoBlocks'

const App = () => {

    const [darkTheme, ChangeTheme] = useState(false);

    const ChangeThemeFC = () => {
        darkTheme ? ChangeTheme(false) : ChangeTheme(true)
    };

    return (
        <div>
            <Header darkTheme={darkTheme} ChangeTheme={ChangeThemeFC} />
            <HeaderArticleBlocks darkTheme={darkTheme} ChangeTheme={ChangeThemeFC} />
            <InfoBlocks darkTheme={darkTheme} ChangeTheme={ChangeThemeFC} />
        </div>
    )
};

export default App;
