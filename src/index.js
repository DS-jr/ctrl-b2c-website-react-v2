import React from 'react'
import { createRoot } from 'react-dom/client'
import 'react-tooltip/dist/react-tooltip.css'
import './index.scss'

import Router from './Router'
import unregister from './core/serviceWorker'

createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister()
