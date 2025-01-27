import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LoginContext from './contexts/LoginContext.jsx'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <LoginContext>
            <App />
        </LoginContext>
    </StrictMode>
)
