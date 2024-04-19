import {
  createNavigator,
  useBackButtonIntegration,
  useNavigatorIntegration,
} from '@tma.js/react-router-integration';
import { useBackButton } from '@tma.js/sdk-react';
import { useMemo } from 'react';
import {
  Navigate,
  Route,
  Router,
  Routes,
} from 'react-router-dom';
import RouterView from  '@/navigation/RouterView'
import { routes } from '@/navigation/routes.jsx';

/**
 * @return {JSX.Element}
 */
export function App() {
  const tmaNavigator = useMemo(createNavigator, []);
  const [location, navigator] = useNavigatorIntegration(tmaNavigator);
  const backButton = useBackButton();

  useBackButtonIntegration(tmaNavigator, backButton);

  return (
    <Router location={location} navigator={navigator}>
      <Routes>
        {/* {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))} */}
        <RouterView />
        {/* <Route path="/" element={<Navigate to="/home" />} /> */}
      </Routes>
    </Router>
  )
}
