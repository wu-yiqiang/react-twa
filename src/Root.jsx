import { setDebug, SettingsButton, postEvent } from '@tma.js/sdk'
import { DisplayGate, SDKProvider, useLaunchParams } from '@tma.js/sdk-react';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { useEffect, useMemo } from 'react';
import { App } from './App.jsx';

/**
 * @param {unknown} error
 * @returns {JSX.Element}
 */
function Err({ error }) {
  return (
    <div>
      <p>An error occurred while initializing the SDK</p>
      <blockquote>
        <code>
          {error instanceof Error
            ? error.message
            : JSON.stringify(error)}
        </code>
      </blockquote>
    </div>
  );
}

/**
 * @returns {JSX.Element}
 */
function Loading() {
  return (
    <div>Application is loading</div>
  );
}

/**
 * @returns {JSX.Element}
 */
export function Root() {
  const launchParams = useLaunchParams();
  const manifestUrl = useMemo(() => {
    return new URL('tonconnect-manifest.json', window.location.href).toString();
  }, []);
  
  const settingsButton = new SettingsButton(false, '6.3', postEvent)
  useEffect(() => {
    if (launchParams.startParam === 'debug') {
      setDebug(true);
      import('eruda').then((lib) => lib.default.init());
    }
    settingsButton.show()
  }, [launchParams]);

  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <SDKProvider options={{ acceptCustomStyles: true, cssVars: true, complete: true }}>
        <DisplayGate error={Err} loading={Loading} initial={Loading}>
          <App />
        </DisplayGate>
      </SDKProvider>
    </TonConnectUIProvider>
  );
}
