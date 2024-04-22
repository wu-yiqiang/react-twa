import { Navigate, Route, Router, Routes, useNavigate } from 'react-router-dom'
import SvgIcon from '@/components/SvgIcon'
import style from './index.module.scss'
import { useTranslation } from 'react-i18next'
export default function Tips(props) {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { color, title, secondtitle, listContent } = props
  return (
    <div className={style.Tips}>
      <div className={`${style.title} ${style[color]}`}>{title}</div>
      <div className={style.secondtitle}>{secondtitle}</div>
      <div className={`${style.items}`}>
        {listContent.map((item, index) => {
          return (
            <div className={style.row} key={index}>
              <span className={`${style[color]}`}>•</span>
              <span>{item}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
