import React from 'react'
import { Main } from './Main'
import { Nav } from './Nav'
import '../styles/layout.css';
export const Layout = () => {
  return (
    <div className='main-layout'>
      <Nav/>
      <Main/>
    </div>
  )
}
