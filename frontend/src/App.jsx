import AuthPage from "./pages/AuthPage"
import React from "react"
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="min-h-screen">
      <div className="p-6">
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="*" element={<div>404 Not found </div>} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
