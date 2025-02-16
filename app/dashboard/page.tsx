'use client'

import React from 'react'
import Sidebar from '@/components/Sidebar'
import { DashboardProvider, useDashboard } from '@/context/DashboardContext'
import ReadingAssistantPage from './reading/page'
import SpeechSupportPage from './speech/page'
import LearningHubPage from './learning/page'
import TutorPage from './tutor/page'
import ProgressPage from './progress/page'
import SettingsPage from './settings/page'

const DashboardContent = () => {
  const { activeSection } = useDashboard()

  const renderContent = () => {
    switch (activeSection) {
      case 'reading':
        return <ReadingAssistantPage />
      case 'speech':
        return <SpeechSupportPage />
      case 'learning':
        return <LearningHubPage />
      case 'tutor':
        return <TutorPage />
      case 'progress':
        return <ProgressPage />
      case 'settings':
        return <SettingsPage />
      default:
        return (
          <div className="p-4">
            <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
            <div className="grid gap-6">
              {/* Add your default dashboard content here */}
            </div>
          </div>
        )
    }
  }

  return (
    <main className="flex-1">
      {renderContent()}
    </main>
  )
}

const DashboardPage = () => {
  return (
    <DashboardProvider>
      <div className="flex">
        <Sidebar />
        <DashboardContent />
      </div>
    </DashboardProvider>
  )
}

export default DashboardPage
