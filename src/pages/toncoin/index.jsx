import { useNavigate } from 'react-router-dom'
import SvgIcon from '@/components/SvgIcon'
import style from './index.module.scss'
import { useTranslation } from 'react-i18next'
import Detail from '@/components/Detail'
import Tips from '@/components/tips'
export default function Toncoin() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  return (
    <div className={style.Toncoin}>
      <Detail />
      <div className={style.tips}>
        <Tips color="blue" title={t('toncoin.title')} secondtitle={t('toncoin.secondtitle')} listContent={[t('toncoin.item1'), t('toncoin.item2')]} />
      </div>
    </div>
  )
}
