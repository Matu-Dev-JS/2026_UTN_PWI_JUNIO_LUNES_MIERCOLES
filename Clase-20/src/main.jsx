import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { ThemeContextProvider } from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  /* Permite que la app pueda navegar entre rutas con react-router */
  <BrowserRouter>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </BrowserRouter>
)
