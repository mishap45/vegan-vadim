import React from 'react'
import infoBlocks from './infoBlocks.module.css'
import MainContentBlock from './MainContentBlock/MainContentBlock'
import HeaderInfoBlocks from '../Utils/HeaderInfoBlocks/HeaderInfoBlocks'
import UnderLine from '../Utils/UnderLine/UnderLine'
import {DarkTheme} from '../../Types/Types'
import UnderLineDark from "../Utils/UnderLineDark/UnderLineDark";

const InfoBlocks: React.FC<DarkTheme> = ({darkTheme}) => {
    return (
        <div>
            <div className={darkTheme ? infoBlocks.firstBlockDark : infoBlocks.firstBlock}>
                <div className={darkTheme ? infoBlocks.firstBlockWithInfoDark : infoBlocks.firstBlockWithInfo}>
                    <HeaderInfoBlocks darkTheme={darkTheme} text={'Загалом про криптовалюти'}/>

                    <MainContentBlock
                        href={'https://www.youtube.com/channel/UCQQ_fGcMDxlKre3SEqEWrLA'}
                        header={'99Bitcoins'}
                        text={'Легкою англійською пояснюються як базові, так і продвинуті теми з сфери блокчейну: ' +
                        'що таке блокчейн, що таке біткоін, що таке майнінг, що таке ефіріум, яка різниця між ' +
                        'різними криптовалютами.'}
                        darkTheme={darkTheme}
                    />

                    <MainContentBlock
                        href={'https://www.youtube.com/channel/UCnqJ2HjWhm7MbhgFHLUENfQ'}
                        header={'Colin Talks Crypto\n'}
                        text={'Легкий англомовний канал. Автор переконаний, що криптовалюти — це інструмент, ' +
                        'за допомогою якого людство звільнить себе від катастрофічної соціальної нерівності, ' +
                        'яка є наслідком, в тому числі, того, що емісія грошей знаходиться у руках еліт.'}
                        darkTheme={darkTheme}
                    />

                    <MainContentBlock
                        href={'https://www.youtube.com/channel/UCU2jqei6GZGOfvekDZU6AuQ'}
                        header={'Cryptor'}
                        text={'Російськомовний канал. Розказує про найновіші фішки зі світу криптовалют і ' +
                        'як на низ заробити. Розказує як працює біткоін, ефіріум, що таке децентралізовані ' +
                        'фінанси. Є відео з крутими індикаторами технічного аналізу, які допомагають ' +
                        'прибутково інвестувати у біткоін. Купив сину один біткоін, бо переконаний, що ' +
                        'син у свої 30 не зможе купити навіть 1/10 біикоіна — такою величезною, на його ' +
                        'думку, буде ціна монети.'}
                        darkTheme={darkTheme}
                    />

                    <MainContentBlock
                        href={'https://www.youtube.com/channel/UCHop-jpf-huVT1IYw79ymPw'}
                        header={'Chico Crypto'}
                        text={'Англомовний канал. Автор — хардкорний крипто-інвестор з 2013-го року. ' +
                        'Знімає журналістські розслідування у сфері криптовалют і їхнього потенціалу. ' +
                        'Першим говорить про перспективні альткоіни.'}
                        darkTheme={darkTheme}
                    />
                </div>

                {
                    window.innerWidth < 401
                        ? darkTheme ? <UnderLineDark/> : <UnderLine/>
                        : <br/>
                }

                <div className={infoBlocks.secondBlockWithInfo}>
                    <HeaderInfoBlocks text={'Інвестування і трейдинг'} darkTheme={darkTheme}/>

                    <MainContentBlock
                        href={'https://www.youtube.com/channel/UCx_aVLk2W0qZ9rg7Jz5ossQ'}
                        header={'ДЕНЬГИ — биткоин инвестор'}
                        text={'Російськомовний канал. Професійний трейдер з 7-річним досвідом торгоговлі на ' +
                        'фінансових ринках розказує, як повинен мислити інвестор/трейдер на фінансовому ринку, ' +
                        'щоб заробляти гроші, а не втрачати їх. Його підхід — це довгострокова торговля з ' +
                        'чіткою торговою стратегією, без імпульсивності і з холодною головою; без погоні ' +
                        'за горами грошей тут і зараз. Вірить, що біткоін змінить фінансову систему людства.'}
                        darkTheme={darkTheme}
                    />

                    <MainContentBlock
                        href={'https://www.youtube.com/user/TheLordguard'}
                        header={'Крипто Кот'}
                        text={'Російськомовний канал. Професійний трейдер показує приклади торгових стратегій, ' +
                        'розказує ключові принципи успішної безпечної торговлі як на спотових, так і на ' +
                        'фючерсних біржах. Дуже схожий на попередній канал, але з акцентом суто на трейдинг.'}
                        darkTheme={darkTheme}
                    />
                </div>
            </div>

            {
                darkTheme ? <UnderLineDark/> : <UnderLine/>
            }

            <div className={darkTheme ? infoBlocks.firstBlockDark : infoBlocks.firstBlock}>
                <div className={darkTheme ? infoBlocks.firstBlockWithInfoDark : infoBlocks.firstBlockWithInfo}>
                    <HeaderInfoBlocks text={'Безпечне зберігання криптовалют'} darkTheme={darkTheme}/>

                    <MainContentBlock
                        href={'https://www.youtube.com/channel/UC7tTKCaW57FaXLBDMaP6yhQ'}
                        header={'Cryptonist'}
                        text={'Російськомовний канал. Автори каналу — власники інтернет-магазину з продажу апаратних ' +
                        'гаманців (пристроїв для безпечного зберігання криптовалют). Максимально детально розкажуть, ' +
                        'як захистити свої криптоактиви. Є лекції про те, як працюють транзакції у біткоіні і ' +
                        'ефіріумі. Вірять, що за криптовалютами майбутнє.'}
                        darkTheme={darkTheme}
                    />
                </div>

                {
                    window.innerWidth < 401
                        ? darkTheme ? <UnderLineDark/> : <UnderLine/>
                        : <br/>
                }

                <div className={infoBlocks.secondBlockWithInfo}>
                    <HeaderInfoBlocks text={'Як працює блокчейн'} darkTheme={darkTheme}/>

                    <MainContentBlock
                        href={'https://www.youtube.com/user/aantonop'}
                        header={'Andreas Antonopoulos'}
                        text={'Англомовний експерт у сфері блокчейн-технологій. Написав кілька технічних книжок для ' +
                        'розробників. Його називають євангелистом біткоіна за те, що він обїздив півсвіту з лекціями ' +
                        'про блокчейн і біткоін. Переконаний, що криптовалюти зроблять світ більш справедливим місцем.'}
                        darkTheme={darkTheme}
                    />
                </div>
            </div>

            {
                darkTheme ? <UnderLineDark/> : <UnderLine/>
            }

            <div className={darkTheme ? infoBlocks.EndBlockDark : infoBlocks.EndBlock}>
                <p className={darkTheme ? infoBlocks.EndDark : infoBlocks.End}>made by <a
                    href="" className={darkTheme ? infoBlocks.instaDark : infoBlocks.insta}> vegan.vadim</a> & <a
                    href=""
                    className={darkTheme ? infoBlocks.instaDark : infoBlocks.insta}> misha.pavlov(MiLov)</a> with love &
                    dope</p>
            </div>
        </div>
    )
};

export default InfoBlocks