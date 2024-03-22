// import { useState } from 'react'
import { RouterProvider } from '../node_modules/react-router-dom/dist/index'
import './App.css'
import AppRoutes from './routes/index'

function App() {
  // const [count, setCount] = useState(0)

  return (
       <>
    <RouterProvider router={AppRoutes}/>
    </>
     
  )
}

export default App
