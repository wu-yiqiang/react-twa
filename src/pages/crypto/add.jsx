import { Page } from '@/components/Page/Page.jsx'
import style from './add.module.scss'
import { useTranslation } from 'react-i18next'

import AddItem  from './addItem'
/**
 * @returns {JSX.Element}
 */
export default function Add() {
  const { t } = useTranslation()
  return (
    <div className={style.Add}>
      <h2 className={style.title}>{t('addcrypto.title')}</h2>
      <div className={style.opts}>
        <AddItem typename="dollar" typecount={t('addcrypto.item1.tips')} title={t('addcrypto.item1.title')} />
        <AddItem typename="dollar" typecount={t('addcrypto.item2.tips')} title={t('addcrypto.item2.title')} />
        <AddItem typename="dollar" typecount={t('addcrypto.item3.tips')} title={t('addcrypto.item3.title')} />
      </div>
    </div>
  )
}
