import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import { RevenueCard } from './components/RevenueCard'

export function App() {

  return (
    <div className='grid grid-cols-4 '>
      <RevenueCard  title={'amount pending'} amount={'92,312.20'} orderCount={'13'}></RevenueCard>
    </div>
  )
}
