import React from 'react';
import Header from './header'
import Footer from './footer'
import '../styles/layout.css'

const Layout = ({ children }) => {
    return (
        <div className="layout-container">
            <div className="content">
                <Header />
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout