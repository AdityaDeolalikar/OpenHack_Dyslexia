'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

type DashboardContextType = {
  activeSection: string
  setActiveSection: (section: string) => void
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined)

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState('dashboard')

  return (
    <DashboardContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </DashboardContext.Provider>
  )
}

export function useDashboard() {
  const context = useContext(DashboardContext)
  if (undefined === context) {
    throw new Error('useDashboard must be used within a DashboardProvider')
  }
  return context
} 