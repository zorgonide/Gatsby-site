import React from 'react'
import Header from './header'
import Footer from '../components/footer'
function Main({children}) {
    return (
        <div>
            <Header>

            </Header>
            <div>
                {children}
            </div>
            <Footer/>
        </div>

    )
}

export default Main
