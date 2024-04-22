import { useState, useEffect } from 'react'
import style from './item.module.scss'
import React from 'react'
import SvgIcon from '@/components/SvgIcon'
import { useNavigate } from 'react-router-dom'
function Item(props) {
  const navigate = useNavigate()
  const { typename, title, typecount, count, path } = props
  useEffect(() => { }, [])
  const gotoPath = () => {
    navigate(path, { push: true })
  }
  return (
    <div className={style.item} onClick={gotoPath}>
      <div className={style.leftBox}>
        <SvgIcon size="1.1rem" svgName={typename} color="#fff" />
        <div className={style.title}>
          <div className={style.toptitle}>{title}</div>
          <div className={style.bottomtitle}>{typecount} </div>
        </div>
      </div>
      <div className={style.rightBox}>${count ? count : "0.00"}</div>
    </div>
  )
}

export default Item
