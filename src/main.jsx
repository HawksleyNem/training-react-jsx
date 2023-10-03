import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bulma/css/bulma.css'
import WrapperComponent from './components/WrapperComponent.jsx'
import NotificationComponent from './components/NotificationComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <WrapperComponent>
      <NotificationComponent type="is-danger" content="Je suis un message d'avertissement"/>
    </WrapperComponent>
  </React.StrictMode>,
)