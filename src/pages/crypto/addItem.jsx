import { useState, useEffect } from 'react'
import style from './addItem.module.scss'
import SvgIcon from '@/components/SvgIcon'
function AddItem(props) {
  const { typename, typecount, title } = props
  useEffect(() => {}, [])
  return (
    <div className={style.AddItem}>
      <div className={style.leftBox}>
        <SvgIcon size="1.1rem" svgName={typename} color="#fff" />
        <div className={style.title}>
          <div className={style.toptitle}>{title}</div>
          <div className={style.bottomtitle}>{typecount} </div>
        </div>
      </div>
      <div className={style.rightBox}>
        <SvgIcon size="0.6rem" svgName='right' color="#fff" />
      </div>
    </div>
  )
}

export default AddItem
