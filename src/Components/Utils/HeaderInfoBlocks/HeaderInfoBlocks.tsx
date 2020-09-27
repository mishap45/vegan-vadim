import React from 'react'
import headerInfoBlocks from './headerInfoBlocks.module.css'

type PropsType = {
    text: string
    darkTheme: boolean
}

const HeaderInfoBlocks: React.FC<PropsType> = ({text, darkTheme}) => {
    return <p className={darkTheme ? headerInfoBlocks.headerInfoBlocksCSSDark : headerInfoBlocks.headerInfoBlocksCSS}>{text}</p>
};

export default HeaderInfoBlocks