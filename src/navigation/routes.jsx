// import { IndexPage } from '@/pages/IndexPage/IndexPage';
// import { InitDataPage } from '@/pages/InitDataPage/InitDataPage';
// import { LaunchParamsPage } from '@/pages/LaunchParamsPage/LaunchParamsPage.jsx';
// import { ThemeParamsPage } from '@/pages/ThemeParamsPage/ThemeParamsPage.jsx';
// import { TONConnectPage } from '@/pages/TONConnectPage/TONConnectPage';
import Home from '@/pages/home/index'
import Add from '@/pages/crypto/add'
import Bank from '@/pages/bank/index'
import NoSupport from '@/pages/nosupport/index'
import Dollars from '@/pages/dollars'
import Toncoin from '@/pages/toncoin'
import Bitcoin from '@/pages/bitcoin'
// /**
//  * @typedef {object} Route
//  * @property {string} path
//  * @property {import('react').ComponentType} Component
//  * @property {string} [title]
//  * @property {import('react').JSX.Element} [icon]
//  */

// /**
//  * @type {Route[]}
//  */
const routesMap = [
  { path: '/', Component: Home },
  { path: '/home', Component: Home },
  { path: '/addcrypto', Component: Add },
  { path: '/bank', Component: Bank },
  { path: '/nosupport', Component: NoSupport },
  { path: '/dollars', Component: Dollars },
  { path: '/toncoin', Component: Toncoin },
  { path: '/bitcoin', Component: Bitcoin }
]

export default routesMap
