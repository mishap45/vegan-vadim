import React, {useState} from 'react'
import header from './header.module.css'
import burgerMenu from '../../Icons/Menu.svg'
import burgerMenuDark from '../../Icons/MenuOnDarkTheme.svg'
import burgerMenuHover from '../../Icons/MenuLightThemeHover.svg'
import burgerMenuDarkHover from '../../Icons/MenuDarkThemeHover.svg'
import lightThemeIcon from '../../Icons/LightTheme.svg'
import lightThemeIconHover from '../../Icons/LightThemeHover.svg'
import darkThemeIcon from '../../Icons/DarkTheme.svg'
import darkThemeIconHover from '../../Icons/DarkThemeHover.svg'
import UnderLine from '../Utils/UnderLine/UnderLine'
import {HeaderPersonalTypes} from '../../Types/Types'
import UnderLineDark from '../Utils/UnderLineDark/UnderLineDark'

const Header: React.FC<HeaderPersonalTypes> = ({darkTheme, ChangeTheme, ChangeVisible}) => {

    const [hover, ChangeHover] = useState(true);
    const [hoverBurger, ChangeHoverBurger] = useState(true);

    return (
        <div>
            <div className={darkTheme ? header.mainBlockDark : header.mainBlock}>
                <div onMouseMove={() => {
                    ChangeHoverBurger(false)
                }} onMouseLeave={() => {
                    ChangeHoverBurger(true)
                }}>
                    {hoverBurger
                        ? <img src={darkTheme ? burgerMenuDark : burgerMenu} alt="Burger menu"
                               className={darkTheme ? header.burgerMenuDark : header.burgerMenu}
                               onClick={ChangeVisible}/>
                        : <img src={darkTheme ? burgerMenuDarkHover : burgerMenuHover} alt="Burger menu"
                               className={darkTheme ? header.burgerMenuDark : header.burgerMenu}
                               onClick={ChangeVisible}/>}
                </div>

                <div>
                    {
                        window.innerWidth < 735
                            ? <p className={darkTheme ? header.mainTextDark : header.mainText}>Веб-сайт у
                                інтернеті <br/> Міші і Вадима</p>
                            :
                            <p className={darkTheme ? header.mainTextDark : header.mainText}>Веб-сайт у інтернеті Міші і
                                Вадима</p>
                    }
                </div>


                {
                    window.innerWidth < 735
                        ? <div onTouchStart={() => {
                            ChangeHover(false)
                        }} onTouchEnd={() => {
                            ChangeHover(true)
                        }}>
                            {hover
                                ? <img onClick={ChangeTheme} src={darkTheme ? darkThemeIcon : lightThemeIcon}
                                       alt="Theme icon" className={header.lightThemeIcon}/>
                                : <img onClick={ChangeTheme} src={darkTheme ? darkThemeIconHover : lightThemeIconHover}
                                       alt="Theme icon" className={header.lightThemeIcon}/>}
                        </div>

                        : <div onMouseMove={() => {
                            ChangeHover(false)
                        }} onMouseLeave={() => {
                            ChangeHover(true)
                        }}>
                            {hover
                                ? <img onClick={ChangeTheme} src={darkTheme ? darkThemeIcon : lightThemeIcon}
                                       alt="Theme icon" className={header.lightThemeIcon}/>
                                : <img onClick={ChangeTheme} src={darkTheme ? darkThemeIconHover : lightThemeIconHover}
                                       alt="Theme icon" className={header.lightThemeIcon}/>}
                        </div>
                }
            </div>

            {
                darkTheme ? <UnderLineDark/> : <UnderLine/>
            }

        </div>
    )
};

export default Header