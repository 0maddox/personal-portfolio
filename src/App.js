import { Route, Routes } from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import Layout from './components/layout'
import Portfolio from './components/portfolio'
import Dashboard from './components/dashboard'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
