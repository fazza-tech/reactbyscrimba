import React from 'react';



function Page() {
  return (
    <>
      <Header/>
      <main>
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
      <footer>
        <small>© 2024 Karbaala development. All rights reserved</small>
      </footer>

    </>

  )
}

function Header() {
  return (
    <header>
      <img src="src/assets/react.svg" width="100px" alt="react logo" />
    </header>
  )
}
export default Page;