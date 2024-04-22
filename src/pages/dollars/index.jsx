import { useNavigate } from 'react-router-dom'
import SvgIcon from '@/components/SvgIcon'
import style from './index.module.scss'
import { useTranslation } from 'react-i18next'
import Detail from '@/components/Detail'
import Tips from '@/components/tips'
export default function Dollars() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  return (
    <div className={style.Dollars}>
      <Detail />
      <div className={style.tips}>
        <Tips color="green" title={t('dollers.title')} secondtitle={t('dollers.secondtitle')} listContent={[t('dollers.item1'), t('dollers.item2')]} />
      </div>
    </div>
  )
}
