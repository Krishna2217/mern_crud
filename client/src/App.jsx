import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Users from './components/Users'
import CreateUsers from './components/CreateUsers'
import UpdateUsers from './components/UpdateUsers'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Users/>}></Route>
          <Route path='/create' element = {<CreateUsers/>}></Route>
          <Route path='/update' element = {<UpdateUsers/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
