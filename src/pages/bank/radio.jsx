import { useState } from 'react'
import style from './radio.module.scss'
import SvgIcon from '@/components/SvgIcon'
import { useTranslation } from 'react-i18next'
// import Radio from '@mui/material/Radio'
import Radio from '@mui/material/Radio'
export default function RadioLists(props) {
  const { t } = useTranslation()
  const { lists, fn, current } = props
  useState(() => {
  }, [])
  return (
    <div className={style.Radio}>
      {lists.map((item, index) => {
        return (
          <div className={style.item} key={index} onClick={() => fn(item.title)}>
            <div className={style.left}>
              <SvgIcon size="1.1rem" svgName={item.typename} color="#fff" />
            </div>
            <div className={style.right}>
              <div className={style.titleBox}>
                <div className={style.title}>{item.title}</div>
                <div className={style.tips}>{item.tips}</div>
              </div>
              {
                <div className={style.selected}>
                  <Radio
                    checked={current === item.title}
                    value={item.title}
                    sx={{
                      '& .MuiSvgIcon-root': {
                        fontSize: 24
                      }
                    }}
                  />
                </div>
              }
            </div>
          </div>
        )
      })}
    </div>
  )
}
