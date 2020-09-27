import React from 'react'
import mainContentBlock from './mainContentBlock.module.css'

type PropsType = {
    href: string
    header: string
    text: string
    darkTheme: boolean
}

const MainContentBlock: React.FC<PropsType> = ({href, header, text, darkTheme}) => {
    return (
        <div className={mainContentBlock.mainBlock}>
            <a href={href}
               className={darkTheme ? mainContentBlock.headerMainContentBlockDark :
                   mainContentBlock.headerMainContentBlock}>{header}</a>
            <p className={darkTheme ? mainContentBlock.descriptionMainContentBlockDark :
                mainContentBlock.descriptionMainContentBlock}>{text}</p>
        </div>
    )
};

export default MainContentBlock