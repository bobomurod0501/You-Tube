import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { ContextProvider } from './providers/contextProvider'
import { AuthProvider } from './providers/authProvider'

createRoot(document.getElementById('root')!).render(
  <>
    <AuthProvider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </AuthProvider>
  </>
)
