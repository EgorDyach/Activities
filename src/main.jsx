import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { ActivitiesContextProvider } from './context/ActivitiesContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <ActivitiesContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ActivitiesContextProvider>
  </AuthContextProvider>
)
