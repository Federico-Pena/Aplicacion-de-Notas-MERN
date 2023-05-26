import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Auth0Provider
      domain="fede-pena.us.auth0.com"
      clientId="wFoQTnYxLLp7FLFkB4PVr65fGcG8IZNT"
      authorizationParams={{
      redirect_uri: window.location.origin
      }}
      >

      <App />

    </Auth0Provider>
  </React.StrictMode>
);

