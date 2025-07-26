import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet, ScrollRestoration } from 'react-router'
import Footer from '../Footer/Footer'

export default function Layout() {
  return <>
    <Navbar />
    <ScrollRestoration />
    <Outlet />
    <Footer />
  </>
}
