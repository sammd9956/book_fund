import { useState } from 'react'
import './App.css'
import Layout from './section/layout/Layout'
import Homepage from './pages/Homepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import LoginPage from './pages/LoginPage'
import ClassCreateBookFund from './pages/CreateBookFund'
import Dashboard from './pages/Dashboard'
import EditCampaign from './pages/EditCampaign'
import EditProfile from './pages/EditProfile'
import EGiftCard from './pages/EGiftCard'
import ViewCampaign from './pages/ViewCampaign'
import ThankForDonating from './pages/ThankForDonating'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/log-in" element={<LoginPage />} />
          <Route path="/create-bookfund" element={<ClassCreateBookFund />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/edit-campaign" element={<EditCampaign />} />
          <Route path="/create-new-campaign" element={<EditCampaign />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/e-gift-card" element={<EGiftCard />} />
          <Route path="/view-campaign" element={<ViewCampaign />} />
          <Route path="/thank-for-donating" element={<ThankForDonating />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
