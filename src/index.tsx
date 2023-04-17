import App from '@app/App'
import '@style/style.scss'
import { initializeApp } from 'firebase/app'
import React from 'react'
import ReactDOM from 'react-dom/client'

import firebaseConfig from './app/firebase/firebaseConfig'

try {
  initializeApp(firebaseConfig)
} catch (error) {
  console.log('Could not initialize Firestore', error)
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
