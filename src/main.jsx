import React from 'react';
import ReactDOM from 'react-dom/client';
import { Root } from './Root';
import 'virtual:svg-icons-register'
import '@/assets/scss/dark.scss'
import '@/assets/scss/light.scss'
import 'amfe-flexible'
// import { ThemeProvider, CssBaseline } from '@mui/material'
ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    {/* <Root /> */}
    {/* <ThemeProvider theme={theme}> */}
      {/* <CssBaseline /> */}
      <Root />
    {/* </ThemeProvider> */}
  </React.StrictMode>
)
