import { useState } from 'react'
import{Route,Routes} from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './routes/Home'
import Politics from './routes/Politics'
import Entertainment from './routes/Entertainment'
import Buisness from './routes/Buisness'
import Sports from './routes/Sports'
import TopHeadings from './routes/TopHeadings'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Routes>
 <Route path="/" element={<Home />} />
<Route path="/top-heading" element={<TopHeadings/>}/>
<Route path="/politics" element={<Politics/>}/>
<Route path="/sports" element={<Sports/>}/>
<Route path="/buisness" element={<Buisness/>}/>
<Route path="/entertainment" element={<Entertainment/>}/>
      </Routes>
    
    
    

    </div>
  )
}

export default App
