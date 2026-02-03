import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from './contexts/ThemeContext'
import App from './App'
import './styles/globals.css'
import { initAI } from './utils/aiAssistant'

// Initialize AI
initAI()

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider>
          <App />
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
                color: '#fff',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)'
              }
            }}
          />
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
)
