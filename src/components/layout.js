import * as React from 'react'
import Navbar from './navbar'
import { heading } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
			<header>
      	<Navbar />
			</header>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout