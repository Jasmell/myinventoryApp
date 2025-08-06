// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import  DbRetrieving from './DBConfigs/dbRetrievingData.jsx'
import App from './App.jsx'
import { ToastContainer, Slide } from 'react-toastify';


createRoot(document.getElementById('root')).render(
  <main>
    <App />
    <ToastContainer 
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={true}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Slide}
      stacked
    />
  </main>,
)
