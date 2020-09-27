import React from 'react'
import headerArticleBlocks from './headerArticleBlocks.module.css'
import UnderLine from '../Utils/UnderLine/UnderLine'
import {DarkTheme} from '../../Types/Types'
import UnderLineDark from '../Utils/UnderLineDark/UnderLineDark'

const HeaderArticleBlocks: React.FC<DarkTheme> = ({darkTheme, ChangeTheme}) => {
    return (
        <div>
            <div className={darkTheme ? headerArticleBlocks.bigTextBlockDark : headerArticleBlocks.bigTextBlock}>
                <p className={darkTheme ? headerArticleBlocks.bigTextDark : headerArticleBlocks.bigText}>Освітні ютуб-канали про блокчейн</p>
            </div>

            {
                darkTheme ? <UnderLineDark /> : <UnderLine />
            }

        </div>
    )
};

export default HeaderArticleBlocks