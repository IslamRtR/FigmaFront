import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"

// Pages
import DashboardPage from "./pages/DashboardPage"
import ScanPage from "./pages/ScanPage"
import HistoryPage from "./pages/HistoryPage"
import ProfilePage from "./pages/ProfilePage"

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            {/* Public routes */}
            <Route path="/dashboard" element={<DashboardPage/>} />


            {/* Теперь все защищённые страницы доступны без входа */}
            <Route path="/scan" element={<ScanPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/profile" element={<ProfilePage />} />

            {/* Redirect any unknown routes */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
