import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import ThemeContext from './context/ThemeContext.jsx';

//@fortawesome/fontawesome-free/css/all.css
import './index.css'

createRoot(document.getElementById('root')).render(
  <>
    
    <BrowserRouter>
    <ThemeContext>
    <App />
    </ThemeContext>
    </BrowserRouter>
  </>,
)
