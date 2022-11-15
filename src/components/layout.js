import * as React from 'react'
import Navbar from './navbar'
import { heading } from './css/layout.module.css'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <div>
			<header>
      	<Navbar />
			</header>
      <main className='bg-black'>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout