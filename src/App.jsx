import React from 'react';



function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>

  )
}

function Header() {
  return (
    <header className='header'>
      <img src="src/assets/react.svg" className='nav-logo' alt="react logo" />
      <nav>
        <ul className='nav-list'>
          <li className='nav-list-item'>Pricing</li>
          <li className='nav-list-item'>About</li>
          <li className='nav-list-item'>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

function MainContent() {
  return (
    <main className='main'>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was fiest released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 200k stars on github</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <h2>Why i'm learning react in 2024?</h2>
      <ol>
        <li>React is a popular library, so i can new cool dev's out there😁</li>
        <li>I'm more likely to get a job as a front-end developer if i know react</li>
      </ol>
    </main>
  )
}



function Footer() {
  return (
    <footer className='footer'>
      <small>© 2024 Karbaala development. All rights reserved</small>
    </footer>
  )
}


export default Page;