import { Link as RouterLink } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import routesMap from '@/navigation/routes'
import { HashNavigator } from '@tma.js/sdk'
// import userInfoModel from '@/store/store'
const RouterView = (props) => {
  // const { token } = userInfoModel()
  const pathname = props.location.pathname
  const targetRouter = routesMap.find((item) => item.path === pathname)
  // const isLogin = token
  console.log('sdsd', targetRouter, pathname)
  if (!targetRouter) {
    return <Link to="/404" />
  }
  if (targetRouter?.redirect) {
    return <Link to={targetRouter.redirect} />
  }
  if (!targetRouter?.auth) {
    return <Route key={targetRouter.path} {...targetRouter} />
  }
}
export default RouterView