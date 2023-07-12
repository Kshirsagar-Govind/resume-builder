import HomePage from './Pages/HomePage'
import Header from './Pages/HomePage/header'
import TemplateEditPage from './Pages/TemplateEditPage'
import TemplatesPage from './Pages/TemplatesPage'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/template/edit" element={<TemplateEditPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
