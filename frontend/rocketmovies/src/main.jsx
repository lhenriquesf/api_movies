import React from 'react'
import ReactDOM from 'react-dom/client'

import {ThemeProvider} from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/global';

import { Profile } from './pages/Profile';
import { Details } from './pages/Details';

 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Profile />
    </ThemeProvider>
  </React.StrictMode>
)
