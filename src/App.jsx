import { createNavigator, useBackButtonIntegration, useNavigatorIntegration } from '@tma.js/react-router-integration'
import { useBackButton } from '@tma.js/sdk-react'
import { useMemo, useEffect } from 'react'
import { Navigate, Route, Router, Routes } from 'react-router-dom'
import routesMap from '@/navigation/routes'
import { changeTheme } from './utils/index'
import i18n from './i18n'
/**
 * @return {JSX.Element}
 */
export function App() {
  const tmaNavigator = useMemo(createNavigator, [])
  const [location, navigator] = useNavigatorIntegration(tmaNavigator)
  const backButton = useBackButton()
  useBackButtonIntegration(tmaNavigator, backButton)
  useEffect(() => {
    changeTheme('dark')
    localStorage.setItem('lang', 'en')
    i18n.changeLanguage('en')
  }, [])
  return (
    <Router location={location} navigator={navigator}>
      <Routes>
        {routesMap.map((route) => (
          <Route key={route.path} {...route} />
        ))}
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  )
}
