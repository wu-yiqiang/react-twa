import { useNavigate } from 'react-router-dom'
import SvgIcon from '@/components/SvgIcon'
import style from './index.module.scss'
import { useTranslation } from 'react-i18next'
export default function Detail() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  return (
    <div className={style.Detail}>
      <div className={style.content}>
        <div className={style.left}>沙发上</div>
        <div className={style.right}>萨达撒</div>
      </div>
    </div>
  )
}
