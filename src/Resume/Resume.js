import React from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import HobbiesSection from './Components/HobbiesSection'
import Main from './Components/Main'
import Nav from './Components/Nav'

function App() {
  return (
    <div className="">
      <Header />
      <Nav />
      <Main />
      <HobbiesSection />
      <hr />
      <div className="">
        <h5 className="text-center ">
          I hereby decare that all the information provided over here are correct upto my knowledge.
        </h5>
      </div>
      <Footer />
    </div>
  )
}

export default App
