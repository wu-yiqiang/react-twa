import style from './index.module.scss'
import { useTranslation } from 'react-i18next'
import { MainButton, postEvent } from '@tma.js/sdk'
import { useEffect, useState } from 'react'
import { Navigate, Route, Router, Routes, useNavigate } from 'react-router-dom'
/**
 * @returns {JSX.Element}
 */
export default function NoSupport() {
    const navigate = useNavigate()
  const { t } = useTranslation()
  const mainButton = new MainButton({
    backgroundColor: '#aaddfe',
    isEnabled: false,
    isVisible: false,
    isLoaderVisible: false,
    text: 'SUBMIT',
    textColor: '#ffffff',
    postEvent
  })
  useEffect(() => {
    mainButton.hide()
  }, [])
  const goHome = () => {
     navigate('/', { push: true })
  }
  return (
    <div className={style.NoSupport}>
      <h2 className={style.title}>{t('nosupport.title')}</h2>
      <div className={style.continue} onClick={goHome}>{t('nosupport.goback')}</div>
    </div>
  )
}