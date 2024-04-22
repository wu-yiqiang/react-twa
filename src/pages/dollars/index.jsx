import { useNavigate } from 'react-router-dom'
import SvgIcon from '@/components/SvgIcon'
import style from './index.module.scss'
import { useTranslation } from 'react-i18next'
import Detail from '@/components/Detail'
export default function Dollars() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  return <div className={style.Dollars}>
    <Detail />
  </div>
}
