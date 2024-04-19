import { Link } from '@/components/Link/Link.jsx';
import { Page } from '@/components/Page/Page.jsx';
import { routes } from '@/navigation/routes.jsx';
import style from './index.module.scss'
import SvgIcon from '@/components/SvgIcon'
// import { Navigate, Route, Router, Routes } from 'react-router-dom'
import { BrowserRouter as Router, Route, Link, useHistory } from 'react-router-dom'

/**
 * @returns {JSX.Element}
 */
export function Home(props) {
  const history = useHistory()
  const gotoAddCrypto = () => {
    // Routes.history.push('/crypto')
    //  Routes.push('/crypto')
    history.push('/addcrypto')
  }
   const gotoExchange = () => {
      Navigate.to('/addcrypto')
   }
   const gotoShell = () => {
     Route.push('/addcrypto')
   }
  return (
    <Page title="Home Page">
      <button onClick={gotoAddCrypto}>Go</button>
      <button onClick={gotoExchange}>Go1</button>
      <button onClick={gotoShell}>Go2</button>
      {/* <Link to="addcrypto">
        {' '}
        <button>点我1 发送氛围萨达撒·</button>
      </Link>
      <button>
        <Link to="addcrypto">点我2</Link>
      </button> */}

      {/* <div className={style.Home}>
        <div className={style.banner}>
          <div className={style.title}>{t('home.title')}</div>
          <div className={style.count}>
            <span className={style.dotbefore}>${dotbefore}</span>
            <span className={style.dotafter}>.{dotafter}</span>
          </div>
        </div>
        <div className={style.opts}>
          <div className={style.send} onClick={gotoSend}>
            <SvgIcon size="0.8rem" svgName="send" />
            <span className={style.title}>{t('home.send')}</span>
          </div>
          <div className={style.add} onClick={gotoAddCrypto}>
            <SvgIcon size="0.8rem" svgName="add" />
            <span className={style.title}>{t('home.addCrypto')}</span>
          </div>
          <div className={style.exchange} onClick={gotoExchange}>
            <SvgIcon size="0.8rem" svgName="exchange" />
            <span className={style.title}>{t('home.exchange')}</span>
          </div>
          <div className={style.shell} onClick={gotoShell}>
            <SvgIcon size="0.8rem" svgName="shell" />
            <span className={style.title}>{t('home.shell')}</span>
          </div>
        </div>
      </div> */}
    </Page>
  )
  {
    /* <ul className="index-page__links">
        {routes.map(({ path, title, icon }) => title && (
          <li className="index-page__link-item" key={path}>
            <Link className="index-page__link" to={path}>
              {icon && (
                <i className="index-page__link-icon">
                  {icon}你好
                </i>
              )}
              {title}
            </Link>
          </li>
        ))}
      </ul> */
  }
}
