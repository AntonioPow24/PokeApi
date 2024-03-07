import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

export default function PublicLayout() {
  return (
    <>
        <div className="bg-slate-800 min-h-screen px-40 pb-5 md:px-10">
            <Header />
            <Outlet />
        </div>

    </>
  )
}
