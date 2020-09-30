import React from 'react'
import sideBar from './SideBar.module.css'
import {SideBarAction} from '../../Types/Types'
import Meme from '../../Images/image_mem.png'

const SideBar: React.FC<SideBarAction> = ({visible, ChangeVisible, darkTheme}) => {
    return (
        <div className={visible ? sideBar.sideBarBlock : sideBar.sideBarBlockHide}>
            <div className={darkTheme ? sideBar.mainBlockDark : sideBar.mainBlock}>
                <p className={darkTheme ? sideBar.bigTextDark : sideBar.bigText}>
                    Добрий вечір.
                    Веб-сайт знаходиться у розробці. Тому просимо Вас закрити даний сайдбар, поки чого поганого не
                    сталося.
                </p>

                <img className={sideBar.memeImage} src={Meme} alt="image with meme(for real)" />

                <p className={darkTheme ? sideBar.bigTextTYDark : sideBar.bigTextTY}>Дякуємо за розуміння.</p>
            </div>

            <div className={sideBar.blackPart} onClick={ChangeVisible}>
                black boy
            </div>
        </div>
    )
};

export default SideBar