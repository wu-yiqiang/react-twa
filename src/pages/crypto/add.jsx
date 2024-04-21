import { Page } from '@/components/Page/Page.jsx'
import style from './add.module.scss'
import { useTranslation } from 'react-i18next'
import AddItem from './addItem'
import { Navigate, Route, Router, Routes, useNavigate } from 'react-router-dom'

/**
 * @returns {JSX.Element}
 */
export default function Add() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const goToBank = () => {
    navigate('/bank', { push: true })
  }
  return (
    <div className={style.Add}>
      <h2 className={style.title}>{t('addcrypto.title')}</h2>
      <div className={style.opts}>
        <div onClick={() => goToBank()}>
          <AddItem typename="dollar" typecount={t('addcrypto.item1.tips')} title={t('addcrypto.item1.title')} />
        </div>
        <div onClick={() => goToBank()}>
          <AddItem typename="dollar" typecount={t('addcrypto.item2.tips')} title={t('addcrypto.item2.title')} func={goToBank} />
        </div>
        <div onClick={() => goToBank()}>
          <AddItem typename="dollar" typecount={t('addcrypto.item3.tips')} title={t('addcrypto.item3.title')} func={goToBank} />
        </div>
      </div>
    </div>
  )
}
