
import React from 'react'
import ReactDOM from 'react-dom/client'

// import Profile from  './styel/profile.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"

import Driverdash from './driver/driverdash'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Driverdash />
    </BrowserRouter>
   
  </React.StrictMode>,
)
