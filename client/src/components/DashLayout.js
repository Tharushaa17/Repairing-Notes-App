import React from 'react'
import { Outlet } from 'react-router-dom'
import DashHeader from './DashHeader'
import DashFooter from './DashFooter'

const DashLayout = () => {
  return (
    <div className="flex items-center justify-center h-screen">
    <div className="will-change-auto p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <DashHeader />
          <div>
              <Outlet />
          </div>
        <DashFooter />
      </div>
    </div>
  )
}

export default DashLayout