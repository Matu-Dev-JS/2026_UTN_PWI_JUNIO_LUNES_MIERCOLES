import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {PI, sumar} from './math.js'

console.log('El valor de PI es ' + PI)
console.log(sumar(1, 1))

createRoot(document.getElementById('root')).render(
  <App />
)
