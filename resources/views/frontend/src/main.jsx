import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import { SkillProvider } from './context/SkillContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SkillProvider>
    <RouterProvider router={router} />
    </SkillProvider>
  </React.StrictMode>,
)

