import './App.css'
import HomePage from './components/pages/homePage/HomePage'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './index.css'
import { useState } from 'react'
import Month from './components/pages/month/Month'
import Birth from './components/pages/birth/Birth'
import Trip from './components/pages/trip/Trip'
import Impressed from './components/pages/impressed/Impressed'

function App() {
  const [tab, setTab] = useState('home')
  return (
    <div className='App'>
      <Header tab={tab} setTab={setTab} />
      <hr />
      {tab === 'home' && <HomePage />}
      {tab === 'month' && <Month />}
      {tab === 'birth' && <Birth />}
      {tab === 'trip' && <Trip />}
      {tab === 'impressed' && <Impressed />}
      <hr />
      <Footer />
    </div>
  )
}

export default App
