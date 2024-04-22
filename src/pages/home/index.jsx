import { useState, useEffect } from 'react'

import style from './index.module.scss'

import Item from '@/pages/home/item'
import Explore from '@/pages/home/explore'
import { useExpand } from '@vkruglikov/react-telegram-web-app'
import { useTranslation } from 'react-i18next'
import Options from '@/components/Options/index'
function Home(props) {
  const { t } = useTranslation()
  const [count, setCount] = useState(0.00)
  const [dotbefore, setDontbefore] = useState('0')
  const [dotafter, setDontafter] = useState('0')
  const [isExpanded, expand] = useExpand()
  useEffect(() => {
    const num = 12.34
    var data = num.toString().split('.')
    setDontbefore(data[0] ? data[0] : '0')
    setDontafter(data[1] ? data[1] : '00')
    expand()
  }, [])
  return (
    <div className={style.Home}>
      <div className={style.banner}>
        <div className={style.title}>{t('home.title')}</div>
        <div className={style.count}>
          <span className={style.dotbefore}>${dotbefore}</span>
          <span className={style.dotafter}>.{dotafter}</span>
        </div>
      </div>
      <Options />
      <div className={style.assets}>
        <Item typename="logo" count="12" typecount="1 TON" title="Toncoin" path="/toncoin" />
        <Item typename="bit" count="12" typecount="10 BTC" title="Bitcoin" path="/bitcoin" />
        <Item typename="dollar" count="12" typecount="1 USTD" title="Dollars" path="/dollars" />
      </div>
      <div className={style.exploreBox}>
        <div className={style.title}>{t('home.exporeTitle')}</div>
        <div className={style.content}>
          <Explore path="https" title={t('home.see.title')} urlStr={t('home.see.str')} pic="logo" colorClass="discover" strColorClass="discover" />
          <Explore path="https" title={t('home.discover.title')} urlStr={t('home.discover.str')} pic="logo" colorClass="discover" strColorClass="discover" />
          <Explore path="https" title={t('home.get.title')} urlStr={t('home.get.str')} pic="logo" colorClass="discover" strColorClass="discover" />
          <Explore path="https" title={t('home.play.title')} urlStr={t('home.play.str')} pic="logo" colorClass="discover" strColorClass="discover" />
        </div>
      </div>
    </div>
  )
}

export default Home
