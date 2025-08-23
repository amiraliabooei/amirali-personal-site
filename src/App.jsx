import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import {Route, Routes} from "react-router-dom"
import Home from "./Pages/Home/Home.jsx";
// import AbooeiLanding from "./Pages/Home/Home.jsx";


function App() {
  // const [count, setCount] = useState(0)

  return (
      <>
          <Routes>
              <Route path={'/'} element={<Home language={'en'} />}/>
              <Route path={'/en'} element={<Home language={'en'} />}/>
              <Route path={'/fa'} element={<Home language={'fa'} /> } />
          </Routes>
      </>
  )
}

export default App
