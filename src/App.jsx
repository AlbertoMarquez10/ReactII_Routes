import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'

import HomePage from './views/HomePage'
import FormPage from './views/FormPage'
import NotFoundPage from './views/NotFoundPage'

import Cake from './assets/img/cake.png'
import Inicio from './assets/img/house.png'
import Agenda from './assets/img/contacts.png'
import { Route, Routes } from 'react-router-dom'



const App = () => {
  

  return (
    <>
      <NavBar Agenda={Agenda} Home={Inicio} Cake={Cake} />
      <Routes>
        <Route path='/' element={ <HomePage Cake ={Cake}/>} />
        <Route path='/contacto' element={<FormPage />} />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
    </>
  )
}

export default App
