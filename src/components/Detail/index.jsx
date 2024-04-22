import { useNavigate } from 'react-router-dom'
import SvgIcon from '@/components/SvgIcon'
import style from './index.module.scss'
import { useTranslation } from 'react-i18next'
import Options from '@/components/Options'
export default function Detail() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  return (
    <div className={style.Detail}>
      <div className={style.content}>
        <div className={style.left}>
          <div className={style.title}>Dollars</div>
          <div className={style.dollars}>$0.00</div>
          <div className={style.count}>0 USTD</div>
        </div>
        <div className={style.right}>
          <SvgIcon size="1.7rem" svgName='logo' color="#fff" />
        </div>
      </div>
      <Options />
    </div>
  )
}
