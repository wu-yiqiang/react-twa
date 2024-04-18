import { Link } from '@/components/Link/Link.jsx';
import { Page } from '@/components/Page/Page.jsx';
import { routes } from '@/navigation/routes.jsx';
import style from './index.module.scss'
import SvgIcon from '@/components/SvgIcon'

/**
 * @returns {JSX.Element}
 */
export function Home() {
  return (
    <Page title="Home Page">
       <div className={style.Home}>
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
        </div>
      {/* <ul className="index-page__links">
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
      </ul> */}
    </Page>
  );
}