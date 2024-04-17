import React from 'react';
import ReactDOM from 'react-dom/client';
import { Root } from '@/components/Root/Root';
import 'virtual:svg-icons-register'
import '@/assets/scss/dark.scss'
import '@/assets/scss/light.scss'
import 'amfe-flexible'
import './i18n'
import './index.css';

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);
