import { useState, useEffect } from 'react'
import style from './explore.module.scss'
import React, { FC } from 'react'
import SvgIcon from '@/components/SvgIcon'
function Explore(props) {
  const { title, path, pic, urlStr, strColorClass, colorClass } = props
  useEffect(() => {}, [])
  return (
    <div className={`${style.Explore} ${style[colorClass]}`}>
      <div className={style.leftBox}>
        <span className={style.title}>{title}</span>
        <span className={`${style.url} ${style[strColorClass]}`}>{urlStr}</span>
      </div>
      <div className={style.rightBox}>
        <SvgIcon size="1.7rem" svgName="logo" color="#fff" />
      </div>
    </div>
  )
}

export default Explore
