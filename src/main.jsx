import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

import { store } from './redux/store';
import global_en from './translation/en/global.json';
import global_ua from './translation/ua/global.json';
import { App } from './components/App';
import './index.css';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'ua',
  resources: {
    en: {
      global: global_en,
    },
    ua: {
      global: global_ua,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <I18nextProvider i18n={i18next}>
          <App />
        </I18nextProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
