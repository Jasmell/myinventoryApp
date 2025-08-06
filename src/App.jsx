
import { useState } from 'react'
import { Context } from './jsmodules.js/context';
import  LayOut from './components/layout/layOut.jsx';
import SignInForm from "./components/authComponents/sighInIn.jsx"

// React Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App({ children }) {
  const [data, setData] = useState([]);//this is use to hold global data;
  
  return (
    <Context.Provider value={{data, setData}}>
      <Router>
        <Routes>
          <Route path='/' element={<SignInForm />}></Route>
          <Route path='App' element={<LayOut/>}></Route>
            {/* <div>      
            <LayOut />
            {children}
          </div> */}
        </Routes>
      </Router>
    </Context.Provider>
  )
}

export default App
