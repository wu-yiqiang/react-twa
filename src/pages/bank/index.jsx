import style from './index.module.scss'
import { useTranslation } from 'react-i18next'
import { MainButton, postEvent } from '@tma.js/sdk'
import RadioLists from './radio'
import { useEffect, useState } from 'react'
import { Navigate, Route, Router, Routes, useNavigate } from 'react-router-dom'
/**
 * @returns {JSX.Element}
 */
export default function Bank() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const mainButton = new MainButton({
    backgroundColor: '#aaddfe',
    isEnabled: false,
    isVisible: false,
    isLoaderVisible: false,
    text: 'SUBMIT',
    textColor: '#ffffff',
    postEvent
  })
  const [lists, setLists] = useState([
    { title: t('bank.item1.title'), typename: 'logo', tips: "0 USTD" },
    { title: t('bank.item2.title'), typename: 'logo', tips: "0 TON" },
    { title: t('bank.item3.title'), typename: 'logo', tips: '0 BTC' }
  ])
  const [current, setCurrent] = useState(t('bank.item1.title'))
  const selected = (value) => {
    if (!value) return
    setCurrent(value)
  }
  useEffect(() => {
    mainButton.hide()
  }, [])
  const gotonosupport = () => {
    navigate('/nosupport', { push: true })
  }
  return (
    <div className={style.Bank}>
      <h2 className={style.title}>{t('bank.title')}</h2>
      <div className={style.opts}>
        <RadioLists lists={lists} current={current} fn={selected} currnet={current} />
      </div>
      <div className={style.continue} onClick={gotonosupport}>{t('bank.continue')}</div>
    </div>
  )
}
