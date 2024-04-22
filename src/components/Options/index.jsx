
import { Navigate, Route, Router, Routes, useNavigate } from 'react-router-dom'
import SvgIcon from '@/components/SvgIcon'
import style from './index.module.scss'
import { useTranslation } from 'react-i18next'
export default function Options() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  return (
    <div className={style.Options}>
          <div
            className={style.send}
            onClick={() => {
              navigate('/addcrypto', { push: true })
            }}
          >
            <SvgIcon size="0.8rem" svgName="send" />
            <span className={style.title}>{t('home.send')}</span>
          </div>
          <div
            className={style.add}
            onClick={() => {
              navigate('/addcrypto', { push: true })
            }}
          >
            <SvgIcon size="0.8rem" svgName="add" />
            <span className={style.title}>{t('home.addCrypto')}</span>
          </div>
          <div
            className={style.exchange}
            onClick={() => {
              navigate('/addcrypto', { push: true })
            }}
          >
            <SvgIcon size="0.8rem" svgName="exchange" />
            <span className={style.title}>{t('home.exchange')}</span>
          </div>
          <div
            className={style.shell}
            onClick={() => {
              navigate('/addcrypto', { push: true })
            }}
          >
            <SvgIcon size="0.8rem" svgName="shell" />
            <span className={style.title}>{t('home.shell')}</span>
          </div>
        </div>
  )
}