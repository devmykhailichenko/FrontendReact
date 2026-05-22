import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import ThemeProvider from './context/ThemeContext.jsx';

import { store } from './store/store.js';

import App from './App.jsx';

import './index.css';
import "antd/dist/reset.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <ThemeProvider>
                  <App />
              </ThemeProvider>
          </BrowserRouter>
      </Provider>
  </StrictMode>,
)

//npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react jest-environment-jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event identity-obj-proxy