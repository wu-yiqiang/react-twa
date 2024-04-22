import { useNavigate } from 'react-router-dom'
import SvgIcon from '@/components/SvgIcon'
import style from './index.module.scss'
import { useTranslation } from 'react-i18next'
import Detail from '@/components/Detail'
import Tips from '@/components/tips'
export default function Bitcoin() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  return (
    <div className={style.Bitcoin}>
      <Detail />
      <div className={style.tips}>
        <Tips color="orange" title={t('bitcoin.title')} secondtitle={t('bitcoin.secondtitle')} listContent={[t('bitcoin.item1'), t('bitcoin.item2')]} />
      </div>
    </div>
  )
}
