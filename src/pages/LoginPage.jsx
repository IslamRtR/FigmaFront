"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Leaf, Eye, EyeOff, Mail, Lock, ArrowLeft } from "lucide-react"

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Просто переход на dashboard без проверки
      navigate("/dashboard")
    } catch (error) {
      console.error("Кіру қатесі:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleGuestLogin = () => {
    navigate("/dashboard")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Артқа қайту
          </Link>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="w-8 h-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-800">PlantID</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Кіру</h1>
          <p className="text-gray-600 mt-2">Аккаунтыңызға кіріңіз немесе қонақ ретінде кіріңіз</p>
        </div>

        <div className="card shadow-xl border-0">
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="input pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Құпия сөз
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Құпия сөзіңіз"
                    value={formData.password}
                    onChange={handleChange}
                    className="input pl-10 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <button type="submit" disabled={isLoading} className="btn btn-primary w-full">
                {isLoading ? "Кіруде..." : "Кіру"}
              </button>

              <button
                type="button"
                onClick={handleGuestLogin}
                className="btn btn-secondary w-full"
              >
                Гость ретінде кіру
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Аккаунтыңыз жоқ па?{" "}
                <Link to="/register" className="text-green-600 hover:text-green-700 font-medium">
                  Тіркелу
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
