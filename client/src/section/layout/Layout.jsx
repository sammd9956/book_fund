import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { Toaster } from '@/components/ui/sonner'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
        <Toaster richColors position="top-right" />
      <Header />

      <main className="flex-1 flex items-center justify-center bg-page-background">
        <Outlet />
      </main>

    </div>
  )
}
export default Layout