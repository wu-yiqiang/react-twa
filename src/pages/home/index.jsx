import { Link } from '@/components/Link/Link.jsx';
import { Page } from '@/components/Page/Page.jsx';
import { routes } from '@/navigation/routes.jsx';
import './index.module.scss';

/**
 * @returns {JSX.Element}
 */
export function Home() {
  return (
    <Page title="Home Page">
      <ul className="index-page__links">
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
      </ul>
    </Page>
  );
}
