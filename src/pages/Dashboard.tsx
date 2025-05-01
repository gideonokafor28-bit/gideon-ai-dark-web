
import React from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/AuthContext"

const Dashboard = () => {
  const { user, signOut } = useAuth()

  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 heading">
              <span className="bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                Welcome to Your Dashboard
              </span>
            </h1>
            <p className="text-gray-400 mb-8">
              You are logged in as {user?.email}
            </p>
            
            <Button 
              variant="outline" 
              className="border-gideon text-gideon hover:bg-gideon hover:text-white"
              onClick={signOut}
            >
              Sign Out
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-dark-800 rounded-lg p-6 border border-gray-700 hover:border-gideon transition-colors">
              <h3 className="text-xl font-semibold mb-4">Your Projects</h3>
              <p className="text-gray-400">View and manage your AI projects</p>
            </div>
            
            <div className="bg-dark-800 rounded-lg p-6 border border-gray-700 hover:border-gideon transition-colors">
              <h3 className="text-xl font-semibold mb-4">AI Tools</h3>
              <p className="text-gray-400">Access our suite of AI tools and capabilities</p>
            </div>
            
            <div className="bg-dark-800 rounded-lg p-6 border border-gray-700 hover:border-gideon transition-colors">
              <h3 className="text-xl font-semibold mb-4">Account Settings</h3>
              <p className="text-gray-400">Manage your profile and preferences</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default Dashboard
