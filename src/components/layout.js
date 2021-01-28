import React from 'react'
import '../styles/layout.css'
import Header from "./header"
import Footer from '../components/footer'

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header></Header>
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout