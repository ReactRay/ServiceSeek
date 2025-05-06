import { createRoot } from 'react-dom/client'
import App from './App.js'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.scss';


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>

    <App />
  </BrowserRouter>
)
